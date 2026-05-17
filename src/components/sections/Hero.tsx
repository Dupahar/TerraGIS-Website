'use client';

import { Suspense } from 'react';
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
  { icon: <Zap size={16} />, label: '₹269 / $3', sub: 'One-time' },
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
        paddingBottom: '40px',
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

      <div className="container-main responsive-grid-2" style={{ width: '100%', alignItems: 'center' }}>
        {/* Left — Content */}
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <style>{`
            @media (min-width: 768px) {
              .hero-content { text-align: left !important; margin: 0 !important; }
              .hero-cta { justify-content: flex-start !important; }
              .hero-stats { justify-content: flex-start !important; }
              .hero-body { margin-left: 0 !important; margin-right: 0 !important; }
            }
          `}</style>
          <div className="hero-content" style={{ textAlign: 'center' }}>
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
                      fontSize: 'clamp(40px, 6vw, 72px)',
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
              className="hero-body"
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: 'clamp(15px, 2vw, 18px)',
                lineHeight: 1.6,
                color: 'var(--text-secondary)',
                maxWidth: '480px',
                marginBottom: '32px',
                marginLeft: 'auto',
                marginRight: 'auto',
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
              className="hero-cta"
              style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}
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
              className="hero-stats"
              style={{
                display: 'flex',
                gap: '24px',
                marginTop: '48px',
                flexWrap: 'wrap',
                justifyContent: 'center',
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
            32.7°N 74.9°E • JAMMU
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
    </section>
  );
}
