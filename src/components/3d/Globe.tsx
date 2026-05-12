'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const indianCities = [
  { name: 'Delhi', lat: 28.6, lng: 77.2 },
  { name: 'Mumbai', lat: 19.1, lng: 72.9 },
  { name: 'Bengaluru', lat: 12.9, lng: 77.6 },
  { name: 'Hyderabad', lat: 17.4, lng: 78.5 },
  { name: 'Chennai', lat: 13.1, lng: 80.3 },
  { name: 'Kolkata', lat: 22.6, lng: 88.4 },
  { name: 'Jaipur', lat: 26.9, lng: 75.8 },
];

function latLngToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const y = radius * Math.cos(phi);
  const z = radius * Math.sin(phi) * Math.sin(theta);
  return new THREE.Vector3(x, y, z);
}

// Wireframe globe with grid lines
const globeVertexShader = `
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPosition;
  void main() {
    vUv = uv;
    vNormal = normalize(normalMatrix * normal);
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const globeFragmentShader = `
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPosition;
  uniform float uTime;

  void main() {
    float lat = vUv.y * 3.14159;
    float lng = vUv.x * 6.28318;
    
    // Grid lines every 30 degrees
    float latLine = smoothstep(0.02, 0.0, abs(fract(vUv.y * 6.0) - 0.5) - 0.48);
    float lngLine = smoothstep(0.02, 0.0, abs(fract(vUv.x * 12.0) - 0.5) - 0.48);
    
    float grid = max(latLine, lngLine);
    
    // Base color with subtle gradient
    vec3 baseColor = vec3(0.016, 0.031, 0.063); // #040810
    vec3 gridColor = vec3(0.0, 0.83, 1.0); // #00D4FF
    
    vec3 color = mix(baseColor, gridColor, grid * 0.35);
    
    // Edge glow (Fresnel)
    float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 3.0);
    color += vec3(0.0, 0.83, 1.0) * fresnel * 0.3;
    
    gl_FragColor = vec4(color, 0.95);
  }
`;

// Atmosphere glow shader
const atmosphereVertexShader = `
  varying vec3 vNormal;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const atmosphereFragmentShader = `
  varying vec3 vNormal;
  void main() {
    float intensity = pow(0.65 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
    vec3 color = vec3(0.0, 0.83, 1.0);
    gl_FragColor = vec4(color, intensity * 0.15);
  }
`;

function CityMarker({ lat, lng, radius }: { lat: number; lng: number; radius: number }) {
  const ref = useRef<THREE.Mesh>(null);
  const pos = useMemo(() => latLngToVector3(lat, lng, radius), [lat, lng, radius]);

  useFrame(({ clock }) => {
    if (ref.current) {
      const scale = 1 + Math.sin(clock.getElapsedTime() * 2) * 0.3;
      ref.current.scale.setScalar(scale);
    }
  });

  return (
    <mesh ref={ref} position={pos}>
      <sphereGeometry args={[0.025, 8, 8]} />
      <meshBasicMaterial color="#00D4FF" transparent opacity={0.9} />
      <pointLight color="#00D4FF" intensity={0.5} distance={0.5} />
    </mesh>
  );
}

function GlobeScene() {
  const globeRef = useRef<THREE.Group>(null);
  const timeRef = useRef({ value: 0 });

  useFrame(({ clock, pointer }) => {
    if (globeRef.current) {
      // Auto-rotation
      globeRef.current.rotation.y += 0.003;

      // Mouse parallax (subtle tilt)
      const targetX = pointer.y * 0.08;
      const targetZ = -pointer.x * 0.08;
      globeRef.current.rotation.x +=
        (targetX - globeRef.current.rotation.x) * 0.02;
      globeRef.current.rotation.z +=
        (targetZ - globeRef.current.rotation.z) * 0.02;
    }
    timeRef.current.value = clock.getElapsedTime();
  });

  const globeMaterial = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader: globeVertexShader,
        fragmentShader: globeFragmentShader,
        uniforms: { uTime: { value: 0 } },
        transparent: true,
        side: THREE.FrontSide,
      }),
    []
  );

  const atmosphereMaterial = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader: atmosphereVertexShader,
        fragmentShader: atmosphereFragmentShader,
        transparent: true,
        side: THREE.BackSide,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    []
  );

  return (
    <group ref={globeRef}>
      {/* Main globe */}
      <Sphere args={[2, 64, 64]} material={globeMaterial} />

      {/* Atmosphere */}
      <Sphere args={[2.15, 64, 64]} material={atmosphereMaterial} />

      {/* City markers */}
      {indianCities.map((city) => (
        <CityMarker
          key={city.name}
          lat={city.lat}
          lng={city.lng}
          radius={2.02}
        />
      ))}
    </group>
  );
}

export default function Globe() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        minHeight: '500px',
        position: 'relative',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        dpr={[1, 1.5]}
        style={{ background: 'transparent' }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.1} />
        <directionalLight position={[5, 3, 5]} intensity={0.3} />
        <GlobeScene />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
      </Canvas>

      {/* Ambient glow behind globe */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: -1,
        }}
      />
    </div>
  );
}
