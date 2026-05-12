'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Community',
    price: '₹249',
    priceUnit: '/ $3',
    subtext: 'One-time purchase for hobbyists',
    features: [
      'Core vector + raster tools',
      'Community support',
      'Single user',
      'Layout export (basic)',
      'Shapefile / GeoPackage / GeoJSON',
    ],
    excluded: ['TerraAI segmentation'],
    cta: 'Buy Now',
    ctaStyle: 'ghost',
    highlight: false,
    badge: null,
    href: 'https://apps.microsoft.com/detail/9P1ZS0X4NF5Q',
  },
  {
    name: 'Professional',
    price: '₹40,000',
    priceUnit: '/ annual',
    subtext: 'Per user, billed annually',
    features: [
      'Everything in Community',
      'TerraAI segmentation',
      'Priority support',
      'Layout export presets',
      'Session sync',
      'Advanced spatial analysis',
    ],
    excluded: [],
    cta: 'Contact Us',
    ctaStyle: 'primary',
    highlight: true,
    badge: null,
    href: 'mailto:mahajanadil0220@gmail.com?subject=TerraGIS%20Professional%20Inquiry',
    comingSoon: true,
  },
  {
    name: 'Enterprise',
    price: '₹1,60,000+',
    subtext: 'Custom team licensing',
    features: [
      'Everything in Professional',
      'Team management',
      'Custom training',
      'SLA',
      'On-premise deployment option',
      'Dedicated support engineer',
    ],
    excluded: [],
    cta: 'Contact Us',
    ctaStyle: 'outline',
    highlight: false,
    badge: null,
    href: 'mailto:mahajanadil0220@gmail.com?subject=TerraGIS%20Enterprise%20Inquiry',
    comingSoon: true,
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="pricing" className="section-pad" ref={ref}>
      <div className="container-main" style={{ textAlign: 'center' }}>
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
            Start small. Scale when you&apos;re ready.
          </h2>
        </motion.div>

        {/* Pricing Cards */}
        <div className="responsive-grid-pricing">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className={plan.highlight ? 'rotating-border' : ''}
              style={{
                position: 'relative',
                borderRadius: '20px',
              }}
            >
              <div
                style={{
                  background: plan.highlight
                    ? 'linear-gradient(180deg, var(--surface), var(--surface-elevated))'
                    : 'var(--surface)',
                  borderRadius: '20px',
                  border: plan.highlight
                    ? 'none'
                    : '1px solid var(--border-glass)',
                  padding: '40px 32px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'left',
                  position: 'relative',
                  zIndex: 1,
                }}
              >



                {/* Coming Soon */}
                {plan.comingSoon && (
                  <span
                    className="badge"
                    style={{ marginBottom: '16px', width: 'fit-content' }}
                  >
                    Coming Soon
                  </span>
                )}

                {/* Plan name */}
                <h3
                  style={{
                    fontFamily: 'var(--font-space-grotesk)',
                    fontSize: '24px',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '16px',
                  }}
                >
                  {plan.name}
                </h3>

                {/* Price */}
                <div style={{ marginBottom: '4px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-space-grotesk)',
                      fontSize: '40px',
                      fontWeight: 700,
                      color: plan.highlight ? 'var(--cyan)' : 'var(--text-primary)',
                    }}
                  >
                    {plan.price}
                  </span>
                  {plan.priceUnit && (
                    <span
                      style={{
                        fontSize: '16px',
                        color: 'var(--text-secondary)',
                        marginLeft: '4px',
                      }}
                    >
                      {plan.priceUnit}
                    </span>
                  )}
                </div>
                <p
                  style={{
                    fontSize: '14px',
                    color: 'var(--text-secondary)',
                    marginBottom: '32px',
                  }}
                >
                  {plan.subtext}
                </p>

                {/* Features */}
                <div
                  style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    marginBottom: '32px',
                  }}
                >
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        fontSize: '14px',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      <Check
                        size={16}
                        color={plan.highlight ? 'var(--cyan)' : 'var(--green)'}
                      />
                      {feature}
                    </div>
                  ))}
                  {plan.excluded.map((feature) => (
                    <div
                      key={feature}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        fontSize: '14px',
                        color: 'var(--text-secondary)',
                        opacity: 0.4,
                        textDecoration: 'line-through',
                      }}
                    >
                      <div
                        style={{
                          width: '16px',
                          height: '16px',
                          borderRadius: '50%',
                          border: '1px solid var(--text-secondary)',
                          opacity: 0.3,
                        }}
                      />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={plan.href}
                  target={plan.href.startsWith('http') ? '_blank' : undefined}
                  rel={plan.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={
                    plan.ctaStyle === 'primary'
                      ? 'btn-primary'
                      : plan.ctaStyle === 'ghost'
                      ? 'btn-ghost'
                      : 'btn-outline'
                  }
                  style={{
                    justifyContent: 'center',
                    width: '100%',
                  }}
                >
                  {plan.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>


    </section>
  );
}
