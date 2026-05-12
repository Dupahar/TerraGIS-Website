'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Download } from 'lucide-react';

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
      {/* Background coordinate grid */}
      <div
        className="coord-grid"
        style={{ position: 'absolute', inset: 0, opacity: 0.08 }}
      />

      {/* Topographic contour rings */}
      <svg
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '800px',
          opacity: 0.05,
        }}
        viewBox="0 0 800 800"
      >
        {[100, 150, 200, 260, 330].map((r) => (
          <circle
            key={r}
            cx="400"
            cy="400"
            r={r}
            fill="none"
            stroke="var(--cyan)"
            strokeWidth="1"
          />
        ))}
      </svg>

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
            Starting at ₹249. No account required. 224 MB.
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
