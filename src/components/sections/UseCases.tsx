'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const useCases = [
  {
    id: 'surveyor',
    title: 'Land Surveyor',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="8" y="24" width="24" height="12" rx="2" stroke="#22C55E" strokeWidth="1.5" fill="rgba(34,197,94,0.1)" />
        <path d="M20 8L14 18H26L20 8Z" stroke="#22C55E" strokeWidth="1.5" fill="rgba(34,197,94,0.1)" />
        <line x1="20" y1="18" x2="20" y2="24" stroke="#22C55E" strokeWidth="1.5" strokeDasharray="2 2" />
      </svg>
    ),
    description:
      'Load drone rasters, digitize parcel boundaries, and export to Shapefile for cadastral mapping and revenue department submission.',
    accent: '#22C55E',
    accentBg: 'rgba(34, 197, 94, 0.1)',
    tags: ['Drone Rasters', 'Shapefile Export', 'Cadastral Mapping'],
  },
  {
    id: 'eia',
    title: 'EIA Consultant',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M12 32C12 32 14 20 20 20C26 20 28 32 28 32" stroke="#00D4FF" strokeWidth="1.5" fill="rgba(0,212,255,0.1)" />
        <circle cx="20" cy="14" r="6" stroke="#00D4FF" strokeWidth="1.5" fill="rgba(0,212,255,0.05)" />
        <rect x="30" y="26" width="6" height="8" stroke="#00D4FF" strokeWidth="1.5" fill="rgba(0,212,255,0.1)" />
        <line x1="33" y1="22" x2="33" y2="26" stroke="#00D4FF" strokeWidth="1.5" />
      </svg>
    ),
    description:
      'Buffer industrial zones, clip to project boundary, run intersection with forest/water layers, export PDF report maps.',
    accent: '#00D4FF',
    accentBg: 'rgba(0, 212, 255, 0.1)',
    tags: ['Buffer Analysis', 'PDF Reports', 'EIA Mapping'],
  },
  {
    id: 'hydro',
    title: 'Hydrologist',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M6 12C10 8 14 16 20 12C26 8 30 16 34 12" stroke="#00D4FF" strokeWidth="1.5" fill="none" />
        <path d="M6 20C10 16 14 24 20 20C26 16 30 24 34 20" stroke="#00D4FF" strokeWidth="1.5" fill="none" opacity="0.7" />
        <path d="M6 28C10 24 14 32 20 28C26 24 30 32 34 28" stroke="#00D4FF" strokeWidth="1.5" fill="none" opacity="0.4" />
      </svg>
    ),
    description:
      'Load DEM rasters, run watershed analysis, overlay with vector drainage networks.',
    accent: '#00D4FF',
    accentBg: 'rgba(0, 212, 255, 0.1)',
    tags: ['DEM Analysis', 'Watershed', 'Drainage Networks'],
  },
  {
    id: 'carbon',
    title: 'Carbon Auditor',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M20 8C14 8 10 14 12 20C8 22 10 28 16 28C18 32 24 32 26 28C32 28 34 22 30 20C32 14 28 8 20 8Z" stroke="#22C55E" strokeWidth="1.5" fill="rgba(34,197,94,0.1)" />
        <circle cx="20" cy="20" r="3" fill="#22C55E" opacity="0.5" />
        <line x1="20" y1="23" x2="20" y2="28" stroke="#22C55E" strokeWidth="1.5" />
      </svg>
    ),
    description:
      'Load land-use rasters, digitize boundary polygons, calculate areas, export audit-ready GeoPackage.',
    accent: '#22C55E',
    accentBg: 'rgba(34, 197, 94, 0.1)',
    tags: ['Land Use', 'Area Calculation', 'GeoPackage'],
  },
];

export default function UseCases() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="usecases" className="section-pad" ref={ref}>
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
            Built for India&apos;s spatial workforce.
          </h2>
        </motion.div>

        {/* Tab Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: 'flex',
            gap: '8px',
            marginBottom: '40px',
            overflowX: 'auto',
            paddingBottom: '4px',
          }}
        >
          {useCases.map((uc, i) => (
            <button
              key={uc.id}
              onClick={() => setActive(i)}
              style={{
                padding: '12px 24px',
                borderRadius: '12px',
                border: active === i
                  ? `1px solid ${uc.accent}`
                  : '1px solid var(--border-glass)',
                background: active === i ? uc.accentBg : 'transparent',
                color: active === i ? uc.accent : 'var(--text-secondary)',
                fontFamily: 'var(--font-inter)',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.3s ease',
              }}
            >
              {uc.title}
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="glass-card grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            style={{
              padding: 'clamp(24px, 5vw, 48px)',
              borderColor: `${useCases[active].accent}22`,
            }}
          >
            {/* Left — Icon & Description */}
            <div>
              <div
                style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '16px',
                  background: useCases[active].accentBg,
                  border: `1px solid ${useCases[active].accent}33`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px',
                }}
              >
                {useCases[active].icon}
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  fontSize: '32px',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '16px',
                }}
              >
                {useCases[active].title}
              </h3>

              <p
                style={{
                  fontSize: '18px',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                  marginBottom: '24px',
                  maxWidth: '440px',
                }}
              >
                {useCases[active].description}
              </p>

              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {useCases[active].tags.map((tag) => (
                  <span
                    key={tag}
                    className="badge"
                    style={{
                      background: useCases[active].accentBg,
                      color: useCases[active].accent,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — Visual Mockup */}
            <div
              style={{
                width: '100%',
                aspectRatio: '4/3',
                borderRadius: '16px',
                background: `linear-gradient(135deg, var(--bg), var(--surface))`,
                border: `1px solid ${useCases[active].accent}22`,
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Subtle coordinate grid */}
              <div className="coord-grid" style={{ position: 'absolute', inset: 0, opacity: 0.1 }} />
              <div style={{ fontSize: '80px', opacity: 0.15 }}>
                {useCases[active].icon}
              </div>
              <div
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  right: '12px',
                  fontFamily: 'var(--font-jetbrains)',
                  fontSize: '10px',
                  color: `${useCases[active].accent}66`,
                  letterSpacing: '0.05em',
                }}
              >
                {useCases[active].id.toUpperCase()}_WORKFLOW.gis
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>


    </section>
  );
}
