'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const contactMethods = [
  {
    icon: <Mail size={24} />,
    label: 'Email',
    value: 'mahajanadil0220@gmail.com',
    href: 'mailto:mahajanadil0220@gmail.com',
    description: 'For inquiries, partnerships, and support',
  },
  {
    icon: <Phone size={24} />,
    label: 'Phone',
    value: '+91 8492989575',
    href: 'tel:+918492989575',
    description: 'Mon – Sat, 10 AM – 6 PM IST',
  },
  {
    icon: <MapPin size={24} />,
    label: 'Location',
    value: 'Jammu, India',
    href: null,
    description: 'Dupahar Headquarters',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="section-pad" ref={ref}>
      <div className="container-main">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
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
            Get in touch.
          </h2>
          <p
            style={{
              fontSize: '18px',
              color: 'var(--text-secondary)',
              maxWidth: '500px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Have questions about TerraGIS? Need a custom licensing plan?
            We&apos;d love to hear from you.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="responsive-grid-3" style={{ maxWidth: '900px', margin: '0 auto' }}>
          {contactMethods.map((method, i) => (
            <motion.div
              key={method.label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
              className="glass-card"
              style={{
                padding: '36px 28px',
                textAlign: 'center',
                cursor: method.href ? 'pointer' : 'default',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.3)';
                e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 212, 255, 0.08)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-glass)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'none';
              }}
              onClick={() => method.href && window.open(method.href, '_self')}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  background: 'rgba(0, 212, 255, 0.1)',
                  border: '1px solid rgba(0, 212, 255, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  color: 'var(--cyan)',
                }}
              >
                {method.icon}
              </div>
              <h4
                style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  fontSize: '16px',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '8px',
                  letterSpacing: '0.02em',
                }}
              >
                {method.label}
              </h4>
              <p
                style={{
                  fontFamily: 'var(--font-jetbrains)',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: 'var(--cyan)',
                  marginBottom: '8px',
                  wordBreak: 'break-all',
                }}
              >
                {method.value}
              </p>
              <p
                style={{
                  fontSize: '13px',
                  color: 'var(--text-secondary)',
                  opacity: 0.7,
                }}
              >
                {method.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quick CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            textAlign: 'center',
            marginTop: '48px',
          }}
        >
          <a
            href="mailto:mahajanadil0220@gmail.com?subject=TerraGIS%20Inquiry"
            className="btn-primary"
            style={{ fontSize: '16px' }}
          >
            <Send size={18} />
            Send us a message
          </a>
        </motion.div>
      </div>


    </section>
  );
}
