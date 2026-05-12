'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Pen,
  Brain,
  Layers,
  FileText,
  Clock,
  Map,
  List,
} from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.1,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="features" className="section-pad" ref={ref}>
      <div className="container-main">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '64px' }}
        >
          <h2
            className="gradient-text"
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              marginBottom: '16px',
            }}
          >
            Everything a field professional needs.
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '20px',
              color: 'var(--text-secondary)',
              maxWidth: '500px',
            }}
          >
            No plugins. No configuration hell. No license server.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="bento-grid">
          {/* Vector Editing — Large Card */}
          <motion.div
            className="glass-card bento-large"
            custom={0}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={cardVariants}
            style={{ padding: '40px', position: 'relative', overflow: 'hidden' }}
          >
            <div style={{ position: 'relative', zIndex: 1 }}>
              <Pen size={32} color="var(--cyan)" />
              <h3
                style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  fontSize: '28px',
                  fontWeight: 700,
                  marginTop: '20px',
                  marginBottom: '12px',
                  color: 'var(--text-primary)',
                }}
              >
                Vector Editing
              </h3>
              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '16px',
                  lineHeight: 1.6,
                  marginBottom: '20px',
                  maxWidth: '380px',
                }}
              >
                Draw, edit, and snap vector geometries with precision tools
                built for cadastral and survey workflows.
              </p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {['Shapefile', 'GeoPackage', 'GeoJSON'].map((tag) => (
                  <span key={tag} className="badge">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Animated SVG overlay */}
            <svg
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: '250px',
                height: '200px',
                opacity: 0.15,
              }}
              viewBox="0 0 250 200"
            >
              <polygon
                points="30,180 100,30 170,120 220,60"
                fill="none"
                stroke="var(--cyan)"
                strokeWidth="1.5"
                strokeDasharray="400"
                strokeDashoffset="400"
                style={{
                  animation: 'draw-polygon 3s ease-in-out forwards infinite',
                }}
              />
              <circle cx="30" cy="180" r="4" fill="var(--cyan)" />
              <circle cx="100" cy="30" r="4" fill="var(--cyan)" />
              <circle cx="170" cy="120" r="4" fill="var(--cyan)" />
              <circle cx="220" cy="60" r="4" fill="var(--cyan)" />
            </svg>

            <style jsx>{`
              @keyframes draw-polygon {
                0% { stroke-dashoffset: 400; }
                50% { stroke-dashoffset: 0; }
                100% { stroke-dashoffset: 0; }
              }
            `}</style>
          </motion.div>

          {/* AI Segmentation — Large Card (Amber) */}
          <motion.div
            className="glass-card bento-large"
            custom={1}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={cardVariants}
            style={{
              padding: '40px',
              position: 'relative',
              overflow: 'hidden',
              borderColor: 'rgba(245, 158, 11, 0.15)',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <Brain size={32} color="var(--amber)" />
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '20px' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-space-grotesk)',
                    fontSize: '28px',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                  }}
                >
                  AI-Assisted Segmentation
                </h3>
                <span className="badge-amber badge">TerraAI</span>
              </div>
              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '16px',
                  lineHeight: 1.6,
                  marginTop: '12px',
                  maxWidth: '400px',
                }}
              >
                TerraAI extracts parcel boundaries from drone imagery without
                manual digitizing. What takes hours happens in minutes.
              </p>
            </div>

            {/* Raster + boundary overlay mockup */}
            <div
              style={{
                position: 'absolute',
                bottom: '20px',
                right: '20px',
                width: '200px',
                height: '150px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #1a1a2e, #16213e)',
                border: '1px solid rgba(245, 158, 11, 0.2)',
                overflow: 'hidden',
              }}
            >
              {/* Simulated boundary overlay */}
              <svg width="200" height="150" viewBox="0 0 200 150" style={{ opacity: 0.5 }}>
                <rect x="20" y="20" width="60" height="40" fill="none" stroke="var(--amber)" strokeWidth="1" opacity="0.6">
                  <animate attributeName="opacity" values="0;0.6;0.6" dur="2s" begin="0.5s" fill="freeze" />
                </rect>
                <rect x="90" y="30" width="80" height="50" fill="none" stroke="var(--amber)" strokeWidth="1" opacity="0.6">
                  <animate attributeName="opacity" values="0;0.6;0.6" dur="2s" begin="1s" fill="freeze" />
                </rect>
                <rect x="30" y="70" width="100" height="60" fill="none" stroke="var(--amber)" strokeWidth="1" opacity="0.6">
                  <animate attributeName="opacity" values="0;0.6;0.6" dur="2s" begin="1.5s" fill="freeze" />
                </rect>
              </svg>
            </div>
          </motion.div>

          {/* Spatial Analysis — Medium */}
          <motion.div
            className="glass-card"
            custom={2}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={cardVariants}
            style={{ padding: '32px' }}
          >
            <Layers size={28} color="var(--cyan)" />
            <h3
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: '22px',
                fontWeight: 700,
                marginTop: '16px',
                marginBottom: '12px',
                color: 'var(--text-primary)',
              }}
            >
              Spatial Analysis
            </h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '10px',
                marginTop: '16px',
              }}
            >
              {['Buffer', 'Clip', 'Dissolve', 'Intersect'].map((tool) => (
                <div
                  key={tool}
                  style={{
                    padding: '10px 14px',
                    background: 'rgba(0, 212, 255, 0.05)',
                    borderRadius: '8px',
                    border: '1px solid var(--border-glass)',
                    fontSize: '13px',
                    fontFamily: 'var(--font-jetbrains)',
                    color: 'var(--text-secondary)',
                    textAlign: 'center',
                    transition: 'all 0.2s ease',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(0,212,255,0.3)';
                    e.currentTarget.style.boxShadow = '0 0 15px rgba(0,212,255,0.1)';
                    e.currentTarget.style.color = 'var(--cyan)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-glass)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.color = 'var(--text-secondary)';
                  }}
                >
                  {tool}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Layout Export — Medium */}
          <motion.div
            className="glass-card"
            custom={3}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={cardVariants}
            style={{ padding: '32px' }}
          >
            <FileText size={28} color="var(--cyan)" />
            <h3
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: '22px',
                fontWeight: 700,
                marginTop: '16px',
                marginBottom: '12px',
                color: 'var(--text-primary)',
              }}
            >
              Layout Export
            </h3>
            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '14px',
                lineHeight: 1.6,
                marginBottom: '16px',
              }}
            >
              PDF, PNG, JPEG with saved presets
            </p>
            {/* Mini PDF preview mockup */}
            <div
              style={{
                width: '100%',
                aspectRatio: '4/3',
                background: 'linear-gradient(135deg, #0D2040, #0A1628)',
                borderRadius: '8px',
                border: '1px solid var(--border-glass)',
                display: 'flex',
                flexDirection: 'column',
                padding: '12px',
                gap: '8px',
              }}
            >
              <div style={{ height: '8px', width: '60%', background: 'rgba(0,212,255,0.2)', borderRadius: '4px' }} />
              <div style={{ flex: 1, background: 'rgba(0,212,255,0.05)', borderRadius: '4px', border: '1px solid var(--border-glass)' }} />
              <div style={{ display: 'flex', gap: '6px' }}>
                <div style={{ height: '6px', width: '30px', background: 'rgba(0,212,255,0.15)', borderRadius: '3px' }} />
                <div style={{ height: '6px', width: '50px', background: 'rgba(0,212,255,0.1)', borderRadius: '3px' }} />
              </div>
            </div>
          </motion.div>

          {/* Session Persistence — Medium */}
          <motion.div
            className="glass-card"
            custom={4}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={cardVariants}
            style={{ padding: '32px' }}
          >
            <Clock size={28} color="var(--cyan)" />
            <h3
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: '22px',
                fontWeight: 700,
                marginTop: '16px',
                marginBottom: '12px',
                color: 'var(--text-primary)',
              }}
            >
              Session Persistence
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.6 }}>
              Your project restores exactly where you left it. Layers, zoom
              level, selections — everything.
            </p>
          </motion.div>

          {/* WMTS Basemaps — Small */}
          <motion.div
            className="glass-card"
            custom={5}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={cardVariants}
            style={{ padding: '32px' }}
          >
            <Map size={28} color="var(--cyan)" />
            <h3
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: '22px',
                fontWeight: 700,
                marginTop: '16px',
                marginBottom: '16px',
                color: 'var(--text-primary)',
              }}
            >
              WMTS Basemaps
            </h3>
            <div style={{ display: 'flex', gap: '8px' }}>
              {['Satellite', 'Streets', 'Terrain'].map((type, i) => (
                <span
                  key={type}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: 500,
                    background: i === 0 ? 'var(--cyan)' : 'transparent',
                    color: i === 0 ? 'var(--bg)' : 'var(--text-secondary)',
                    border: i === 0 ? 'none' : '1px solid var(--border-glass)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    fontFamily: 'var(--font-inter)',
                  }}
                >
                  {type}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Layer Manager — Small */}
          <motion.div
            className="glass-card"
            custom={6}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={cardVariants}
            style={{ padding: '32px' }}
          >
            <List size={28} color="var(--cyan)" />
            <h3
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: '22px',
                fontWeight: 700,
                marginTop: '16px',
                marginBottom: '16px',
                color: 'var(--text-primary)',
              }}
            >
              Layer Manager
            </h3>
            {/* Checkbox list mockup */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { name: 'Parcels.shp', checked: true },
                { name: 'Roads.gpkg', checked: true },
                { name: 'DEM_50m.tif', checked: false },
                { name: 'Buffer_100m', checked: true },
              ].map((layer) => (
                <div
                  key={layer.name}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontSize: '13px',
                    fontFamily: 'var(--font-jetbrains)',
                    color: layer.checked ? 'var(--text-primary)' : 'var(--text-secondary)',
                    opacity: layer.checked ? 1 : 0.5,
                  }}
                >
                  <div
                    style={{
                      width: '16px',
                      height: '16px',
                      borderRadius: '4px',
                      border: `1.5px solid ${layer.checked ? 'var(--cyan)' : 'var(--text-secondary)'}`,
                      background: layer.checked ? 'rgba(0,212,255,0.2)' : 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {layer.checked && (
                      <svg width="10" height="10" viewBox="0 0 12 12">
                        <path d="M2 6L5 9L10 3" stroke="var(--cyan)" strokeWidth="2" fill="none" />
                      </svg>
                    )}
                  </div>
                  {layer.name}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
