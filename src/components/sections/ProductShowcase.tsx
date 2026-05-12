'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Upload, Wrench, FileOutput, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const screenshots = [
  {
    src: '/screenshot-1.png',
    alt: 'TerraGIS Project Dashboard — Browse projects, quick start, timeline',
    label: 'Project Dashboard',
  },
  {
    src: '/screenshot-2.png',
    alt: 'TerraGIS Satellite View — Vector editing with digitized building footprints',
    label: 'Satellite + Vector Editing',
  },
  {
    src: '/screenshot-3.png',
    alt: 'TerraGIS Terrain View — Spatial analysis toolbox with buffer operation',
    label: 'Terrain + Analysis Toolbox',
  },
];

const steps = [
  {
    icon: <Upload size={28} />,
    title: 'Load your data',
    description: 'Shapefile, GeoTIFF, drone raster',
    number: '01',
  },
  {
    icon: <Wrench size={28} />,
    title: 'Analyze and edit',
    description: 'Spatial tools + digitizing',
    number: '02',
  },
  {
    icon: <FileOutput size={28} />,
    title: 'Export and deliver',
    description: 'PDF, PNG, GeoPackage',
    number: '03',
  },
];

export default function ProductShowcase() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => setActiveSlide((p) => (p + 1) % screenshots.length), []);
  const prevSlide = useCallback(() => setActiveSlide((p) => (p - 1 + screenshots.length) % screenshots.length), []);

  // Auto-advance every 4 seconds
  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(nextSlide, 4000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, nextSlide]);

  // Reset timer on manual navigation
  const handleManualNav = useCallback((action: () => void) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    action();
    if (!isPaused) {
      intervalRef.current = setInterval(nextSlide, 4000);
    }
  }, [isPaused, nextSlide]);

  return (
    <section
      className="section-pad"
      ref={ref}
      style={{ background: 'var(--surface)', position: 'relative', overflow: 'hidden' }}
    >
      <div className="container-main" style={{ textAlign: 'center' }}>
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="gradient-text"
          style={{
            fontFamily: 'var(--font-space-grotesk)',
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            marginBottom: '64px',
          }}
        >
          See it in action.
        </motion.h2>

        {/* Screenshot Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{
            maxWidth: '1100px',
            margin: '0 auto 32px',
            position: 'relative',
          }}
        >
          {/* Laptop frame */}
          <div
            style={{
              background: 'linear-gradient(180deg, #1A2030, #0A1020)',
              borderRadius: '16px',
              padding: '14px 14px 0',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 40px 80px rgba(0,0,0,0.5), 0 0 60px rgba(0,212,255,0.05)',
            }}
          >
            {/* Screen */}
            <div
              style={{
                borderRadius: '8px',
                overflow: 'hidden',
                position: 'relative',
                aspectRatio: '16/9',
                background: '#0c1424',
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, scale: 1.02, x: 30 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.98, x: -30 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  style={{ width: '100%', height: '100%', position: 'relative' }}
                >
                  <Image
                    src={screenshots[activeSlide].src}
                    alt={screenshots[activeSlide].alt}
                    fill
                    sizes="1100px"
                    style={{ objectFit: 'contain' }}
                    priority={activeSlide === 0}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Auto-play progress bar */}
              <motion.div
                key={`progress-${activeSlide}-${isPaused}`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isPaused ? undefined : 1 }}
                transition={{ duration: 4, ease: 'linear' }}
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, var(--cyan), var(--green))',
                  transformOrigin: 'left',
                  opacity: 0.7,
                  zIndex: 2,
                }}
              />
            </div>

            {/* Laptop base */}
            <div
              style={{
                height: '16px',
                background: 'linear-gradient(180deg, #1A2030, #151D2E)',
                borderRadius: '0 0 16px 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  width: '60px',
                  height: '4px',
                  borderRadius: '2px',
                  background: 'rgba(255,255,255,0.05)',
                }}
              />
            </div>
          </div>

          {/* Nav Arrows */}
          <button
            onClick={() => handleManualNav(prevSlide)}
            style={{
              position: 'absolute',
              left: '-20px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'rgba(4, 8, 16, 0.8)',
              border: '1px solid var(--border-glass)',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(8px)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.4)';
              e.currentTarget.style.background = 'rgba(0, 212, 255, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-glass)';
              e.currentTarget.style.background = 'rgba(4, 8, 16, 0.8)';
            }}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => handleManualNav(nextSlide)}
            style={{
              position: 'absolute',
              right: '-20px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'rgba(4, 8, 16, 0.8)',
              border: '1px solid var(--border-glass)',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(8px)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.4)';
              e.currentTarget.style.background = 'rgba(0, 212, 255, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-glass)';
              e.currentTarget.style.background = 'rgba(4, 8, 16, 0.8)';
            }}
          >
            <ChevronRight size={20} />
          </button>
        </motion.div>

        {/* Dot indicators + Label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            marginBottom: '64px',
          }}
        >
          <div style={{ display: 'flex', gap: '8px' }}>
            {screenshots.map((_, i) => (
              <button
                key={i}
                onClick={() => handleManualNav(() => setActiveSlide(i))}
                style={{
                  width: activeSlide === i ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  background: activeSlide === i ? 'var(--cyan)' : 'rgba(240, 244, 255, 0.15)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  padding: 0,
                }}
              />
            ))}
          </div>
          <span
            style={{
              fontFamily: 'var(--font-jetbrains)',
              fontSize: '12px',
              color: 'var(--cyan)',
              opacity: 0.7,
              letterSpacing: '0.05em',
            }}
          >
            {screenshots[activeSlide].label}
          </span>
        </motion.div>

        {/* Step Cards */}
        <div className="responsive-grid-3" style={{ maxWidth: '900px', margin: '0 auto' }}>
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + i * 0.15 }}
              className="glass-card"
              style={{
                padding: '32px 24px',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-jetbrains)',
                  fontSize: '12px',
                  color: 'var(--cyan)',
                  opacity: 0.5,
                  marginBottom: '16px',
                  letterSpacing: '0.1em',
                }}
              >
                STEP {step.number}
              </div>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  background: 'rgba(0, 212, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  color: 'var(--cyan)',
                }}
              >
                {step.icon}
              </div>
              <h4
                style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  fontSize: '18px',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '8px',
                }}
              >
                {step.title}
              </h4>
              <p
                style={{
                  fontSize: '14px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.5,
                }}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>


    </section>
  );
}
