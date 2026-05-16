'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/* ── Subtle, elegant keyframes ── */
const animationStyles = `
@keyframes dl-breathe {
  0%, 100% { opacity: 0.04; transform: translate(-50%, -50%) scale(1); }
  50% { opacity: 0.09; transform: translate(-50%, -50%) scale(1.03); }
}
@keyframes dl-expand {
  0% { transform: translate(-50%, -50%) scale(0.4); opacity: 0.12; }
  100% { transform: translate(-50%, -50%) scale(1); opacity: 0; }
}
@keyframes dl-drift {
  0%, 100% { transform: translateY(0); opacity: 0.15; }
  50% { transform: translateY(-18px); opacity: 0.35; }
}
`;

/* Just 6 motes — sparse and delicate */
const motes = [
  { left: '18%', top: '25%', size: 2, delay: 0, dur: 8 },
  { left: '78%', top: '30%', size: 2.5, delay: 2, dur: 10 },
  { left: '30%', top: '72%', size: 2, delay: 4, dur: 9 },
  { left: '72%', top: '68%', size: 1.5, delay: 1, dur: 11 },
  { left: '50%', top: '18%', size: 2, delay: 3, dur: 7 },
  { left: '55%', top: '82%', size: 2, delay: 5, dur: 10 },
];

export default function DownloadCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="download"
      className="section-pad"
      ref={ref}
      style={{
        background: 'var(--surface)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: animationStyles }} />

      {/* Background coordinate grid */}
      <div
        className="coord-grid"
        style={{ position: 'absolute', inset: 0, opacity: 0.08 }}
      />

      {/* ──────── SUBTLE ANIMATED BACKGROUND ──────── */}

      {/* 1. Breathing contour rings — slow, gentle opacity pulse */}
      <svg
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '900px',
          height: '900px',
          animation: 'dl-breathe 8s ease-in-out infinite',
          pointerEvents: 'none',
        }}
        viewBox="0 0 900 900"
      >
        {[120, 180, 250, 330].map((r) => (
          <circle
            key={r}
            cx="450"
            cy="450"
            r={r}
            fill="none"
            stroke="var(--cyan)"
            strokeWidth="0.8"
            strokeDasharray={r > 220 ? '6 8' : 'none'}
          />
        ))}
      </svg>

      {/* 2. Single slow expanding ring — one gentle ripple every 12s */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          border: '1px solid rgba(0, 212, 255, 0.15)',
          animation: 'dl-expand 12s ease-out infinite',
          pointerEvents: 'none',
        }}
      />

      {/* 3. Sparse floating motes — barely-there ambient motion */}
      {motes.map((m, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: m.left,
            top: m.top,
            width: `${m.size}px`,
            height: `${m.size}px`,
            borderRadius: '50%',
            background: 'rgba(0, 212, 255, 0.5)',
            animation: `dl-drift ${m.dur}s ${m.delay}s ease-in-out infinite`,
            pointerEvents: 'none',
          }}
        />
      ))}

      {/* ──────── CONTENT ──────── */}
      <div
        className="container-main"
        style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
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
            Download TerraGIS Beta for Windows
          </h2>

          <p
            style={{
              fontSize: '20px',
              color: 'var(--text-secondary)',
              marginBottom: '48px',
              fontFamily: 'var(--font-inter)',
            }}
          >
            Starting at ₹254. No account required. 224 MB.
          </p>

          {/* Microsoft Store Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ marginBottom: '32px' }}
          >
            <a
              href="https://apps.microsoft.com/detail/9P1ZS0X4NF5Q"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '16px',
                padding: '18px 40px',
                background: 'white',
                color: '#000',
                borderRadius: '14px',
                fontSize: '18px',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                fontFamily: 'var(--font-inter)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02) translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 40px rgba(0,0,0,0.4), 0 0 30px var(--glow-cyan)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
              }}
            >
              {/* Microsoft logo */}
              <svg width="24" height="24" viewBox="0 0 24 24">
                <rect x="1" y="1" width="10" height="10" fill="#F25022" />
                <rect x="13" y="1" width="10" height="10" fill="#7FBA00" />
                <rect x="1" y="13" width="10" height="10" fill="#00A4EF" />
                <rect x="13" y="13" width="10" height="10" fill="#FFB900" />
              </svg>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '11px', fontWeight: 400, opacity: 0.7, lineHeight: 1 }}>
                  Get it from
                </div>
                <div style={{ fontSize: '18px', fontWeight: 700, lineHeight: 1.2 }}>
                  Microsoft Store
                </div>
              </div>
            </a>
          </motion.div>



          {/* Legal note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            style={{
              fontSize: '13px',
              color: 'var(--text-secondary)',
              opacity: 0.6,
              maxWidth: '500px',
              margin: '0 auto',
              lineHeight: 1.6,
              fontFamily: 'var(--font-inter)',
            }}
          >
            Windows 10 version 17763.0 or higher required. Free during public
            beta. Professional and Enterprise tiers launching soon.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
