'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Brain, Sparkles, Zap, ArrowRight } from 'lucide-react';

export default function TerraAI() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      className="section-pad"
      ref={ref}
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Amber ambient glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          right: '-200px',
          transform: 'translateY(-50%)',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-main">
        <div className="responsive-grid-2" style={{ alignItems: 'center' }}>
          {/* Left — Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <Brain size={32} color="var(--amber)" />
                <span className="badge badge-amber" style={{ fontSize: '11px' }}>
                  <Sparkles size={12} style={{ marginRight: '4px' }} />
                  AI-POWERED
                </span>
              </div>

              <h2
                className="gradient-text-amber"
                style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  fontSize: 'clamp(40px, 5vw, 56px)',
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  marginBottom: '24px',
                }}
              >
                TerraAI
              </h2>

              <p
                style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  fontSize: '22px',
                  fontWeight: 500,
                  color: 'var(--text-primary)',
                  marginBottom: '16px',
                  lineHeight: 1.3,
                }}
              >
                Automated raster segmentation. No scripting required.
              </p>

              <p
                style={{
                  fontSize: '18px',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                  marginBottom: '32px',
                  maxWidth: '460px',
                }}
              >
                Connect the TerraAI backend to extract boundaries, land-use
                zones, and feature outlines from drone or satellite imagery.
                What takes hours of manual digitizing happens in minutes.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  'Automated parcel boundary extraction',
                  'Land-use zone classification',
                  'Feature outline detection from satellite imagery',
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      fontSize: '15px',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    <Zap size={16} color="var(--amber)" />
                    {item}
                  </div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                style={{ marginTop: '40px' }}
              >
                <a
                  href="#pricing"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '14px 28px',
                    background: 'rgba(245, 158, 11, 0.15)',
                    color: 'var(--amber)',
                    border: '1px solid rgba(245, 158, 11, 0.3)',
                    borderRadius: '12px',
                    fontSize: '16px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    fontFamily: 'var(--font-inter)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(245, 158, 11, 0.25)';
                    e.currentTarget.style.boxShadow = '0 0 30px rgba(245, 158, 11, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(245, 158, 11, 0.15)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  Available in Professional
                  <ArrowRight size={18} />
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Right — Animated Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div
              style={{
                width: '100%',
                aspectRatio: '1',
                borderRadius: '24px',
                background: 'linear-gradient(135deg, #0A1628, #0D1B2A)',
                border: '1px solid rgba(245, 158, 11, 0.15)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Background raster simulation */}
              <div
                style={{
                  position: 'absolute',
                  inset: '20px',
                  borderRadius: '16px',
                  background: `
                    linear-gradient(45deg, #0D1B2A 25%, transparent 25%),
                    linear-gradient(-45deg, #0D1B2A 25%, transparent 25%),
                    linear-gradient(45deg, transparent 75%, #0D1B2A 75%),
                    linear-gradient(-45deg, transparent 75%, #0D1B2A 75%)
                  `,
                  backgroundSize: '20px 20px',
                  backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
                  opacity: 0.3,
                }}
              />

              {/* Animated segmentation polygons */}
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 400 400"
                style={{ position: 'absolute', inset: 0 }}
              >
                {/* Polygon 1 */}
                <polygon
                  points="60,80 140,50 180,120 120,160"
                  fill="rgba(245,158,11,0.08)"
                  stroke="#F59E0B"
                  strokeWidth="1.5"
                  strokeDasharray="200"
                  strokeDashoffset="200"
                  style={{
                    animation: 'drawSegment 2s ease-out 0.3s forwards',
                  }}
                />
                {/* Polygon 2 */}
                <polygon
                  points="160,60 280,40 300,140 200,160"
                  fill="rgba(245,158,11,0.06)"
                  stroke="#F59E0B"
                  strokeWidth="1.5"
                  strokeDasharray="300"
                  strokeDashoffset="300"
                  style={{
                    animation: 'drawSegment2 2s ease-out 0.8s forwards',
                  }}
                />
                {/* Polygon 3 */}
                <polygon
                  points="80,180 180,150 220,260 140,280"
                  fill="rgba(245,158,11,0.1)"
                  stroke="#F59E0B"
                  strokeWidth="1.5"
                  strokeDasharray="280"
                  strokeDashoffset="280"
                  style={{
                    animation: 'drawSegment3 2s ease-out 1.3s forwards',
                  }}
                />
                {/* Polygon 4 */}
                <polygon
                  points="220,160 340,140 360,280 260,300"
                  fill="rgba(245,158,11,0.07)"
                  stroke="#F59E0B"
                  strokeWidth="1.5"
                  strokeDasharray="320"
                  strokeDashoffset="320"
                  style={{
                    animation: 'drawSegment4 2s ease-out 1.8s forwards',
                  }}
                />
                {/* Polygon 5 */}
                <polygon
                  points="140,300 260,280 300,370 160,380"
                  fill="rgba(245,158,11,0.08)"
                  stroke="#F59E0B"
                  strokeWidth="1.5"
                  strokeDasharray="260"
                  strokeDashoffset="260"
                  style={{
                    animation: 'drawSegment5 2s ease-out 2.3s forwards',
                  }}
                />
              </svg>

              {/* AI processing label */}
              <div
                style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(245, 158, 11, 0.1)',
                  padding: '6px 12px',
                  borderRadius: '8px',
                  border: '1px solid rgba(245, 158, 11, 0.2)',
                }}
              >
                <div
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: 'var(--amber)',
                    animation: 'pulse-glow 2s infinite',
                  }}
                />
                <span
                  style={{
                    fontFamily: 'var(--font-jetbrains)',
                    fontSize: '10px',
                    color: 'var(--amber)',
                    letterSpacing: '0.05em',
                  }}
                >
                  TERRAI PROCESSING
                </span>
              </div>

              {/* Confidence score */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '16px',
                  right: '16px',
                  fontFamily: 'var(--font-jetbrains)',
                  fontSize: '11px',
                  color: 'rgba(245, 158, 11, 0.6)',
                }}
              >
                5 boundaries detected • 98.2% confidence
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes drawSegment {
          to { stroke-dashoffset: 0; }
        }
        @keyframes drawSegment2 {
          to { stroke-dashoffset: 0; }
        }
        @keyframes drawSegment3 {
          to { stroke-dashoffset: 0; }
        }
        @keyframes drawSegment4 {
          to { stroke-dashoffset: 0; }
        }
        @keyframes drawSegment5 {
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </section>
  );
}
