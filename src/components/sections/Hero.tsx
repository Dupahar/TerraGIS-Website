'use client';

import { useEffect, useRef, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Download, Monitor, HardDrive, Zap } from 'lucide-react';
import dynamic from 'next/dynamic';

const Globe = dynamic(() => import('@/components/3d/Globe'), {
  ssr: false,
  loading: () => (
    <div
      style={{
        width: '100%',
        height: '500px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)',
        borderRadius: '24px',
        border: '1px solid var(--border-glass)',
      }}
    >
      <div style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-jetbrains)', fontSize: '14px' }}>
        Loading 3D Globe...
      </div>
    </div>
  ),
});

const heroWords = ['Map.', 'Analyze.', 'Export.'];

const stats = [
  { icon: <HardDrive size={16} />, label: '224 MB', sub: 'Lightweight' },
  { icon: <Monitor size={16} />, label: 'Windows 10 / 11', sub: 'Native' },
  { icon: <Zap size={16} />, label: '₹249 / $3', sub: 'One-time' },
];

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '100px',
      }}
    >
      {/* Background coordinate grid */}
      <div
        className="coord-grid"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.15,
          pointerEvents: 'none',
        }}
      />

      {/* Ambient glow */}
      <div
        style={{
          position: 'absolute',
          top: '-200px',
          right: '-200px',
          width: '800px',
          height: '800px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="container-main"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '64px',
          alignItems: 'center',
          width: '100%',
        }}
      >
        {/* Left — Content */}
        <div style={{ maxWidth: '600px' }}>
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span
              style={{
                fontFamily: 'var(--font-jetbrains)',
                fontSize: '13px',
                fontWeight: 600,
                color: 'var(--cyan)',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
              }}
            >
              Professional GIS for Windows
            </span>
          </motion.div>

          {/* Headline */}
          <div style={{ marginTop: '24px', marginBottom: '24px' }}>
            {heroWords.map((word, i) => (
              <motion.div
                key={word}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.4 + i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-space-grotesk)',
                    fontSize: 'clamp(48px, 6vw, 72px)',
                    fontWeight: i === 0 ? 300 : i === 1 ? 500 : 700,
                    lineHeight: 1.05,
                    letterSpacing: '-0.03em',
                    color: 'var(--text-primary)',
                    display: 'block',
                  }}
                >
                  {word}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '18px',
              lineHeight: 1.6,
              color: 'var(--text-secondary)',
              maxWidth: '480px',
              marginBottom: '32px',
            }}
          >
            TerraGIS is a modern desktop GIS application for professional
            spatial workflows on Windows. Designed for teams who need practical
            mapping and analysis tools without heavy infrastructure.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
          >
            <a
              href="https://apps.microsoft.com/detail/9P1ZS0X4NF5Q"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Download size={18} />
              Download
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            style={{
              display: 'flex',
              gap: '32px',
              marginTop: '48px',
              flexWrap: 'wrap',
            }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: 'rgba(0, 212, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--cyan)',
                  }}
                >
                  {stat.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-jetbrains)',
                      fontSize: '14px',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                    }}
                  >
                    {stat.label}
                  </div>
                  <div
                    style={{
                      fontSize: '12px',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {stat.sub}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — 3D Globe */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'relative',
            aspectRatio: '4/3',
            borderRadius: '24px',
            border: '1px solid rgba(0, 212, 255, 0.15)',
            overflow: 'hidden',
            background: 'var(--surface)',
          }}
        >
          <Suspense
            fallback={
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)',
                }}
              >
                Loading...
              </div>
            }
          >
            <Globe />
          </Suspense>

          {/* Corner labels */}
          <div
            style={{
              position: 'absolute',
              bottom: '16px',
              left: '16px',
              fontFamily: 'var(--font-jetbrains)',
              fontSize: '11px',
              color: 'rgba(0, 212, 255, 0.5)',
              letterSpacing: '0.05em',
            }}
          >
            28.6°N 77.2°E • DELHI
          </div>
          <div
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              fontFamily: 'var(--font-jetbrains)',
              fontSize: '11px',
              color: 'rgba(0, 212, 255, 0.5)',
              letterSpacing: '0.05em',
            }}
          >
            LIVE RENDER
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          section > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
