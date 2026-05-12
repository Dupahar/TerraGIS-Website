'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Features', href: '#features' },
  { label: 'Use Cases', href: '#usecases' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
  { label: 'Download', href: '#download' },
];

export default function Nav() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollPercent = (winScroll / height) * 100;
      setScrollProgress(scrollPercent);
      setScrolled(winScroll > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '2px',
          width: `${scrollProgress}%`,
          background: 'var(--cyan)',
          zIndex: 1001,
          transition: 'width 0.1s linear',
          boxShadow: '0 0 10px var(--glow-cyan-strong)',
        }}
      />

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed',
          top: scrolled ? '8px' : '16px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: scrolled ? 'calc(100% - 32px)' : 'calc(100% - 64px)',
          maxWidth: '1280px',
          zIndex: 1000,
          background: scrolled
            ? 'rgba(4, 8, 16, 0.85)'
            : 'rgba(4, 8, 16, 0.6)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid var(--border-glass)',
          borderRadius: '16px',
          padding: '0 24px',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        {/* Logo */}
        <a
          href="#hero"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
          }}
        >
          <Image
            src="/dupahar-logo.png"
            alt="Dupahar"
            width={36}
            height={36}
            style={{
              borderRadius: '8px',
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontWeight: 700,
              fontSize: '20px',
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
            }}
          >
            TerraGIS
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div
          className="nav-desktop hidden md:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 500,
                fontFamily: 'var(--font-inter)',
                transition: 'color 0.2s ease',
                position: 'relative',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = 'var(--text-primary)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = 'var(--text-secondary)')
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#download"
          className="btn-primary nav-cta hidden md:inline-flex"
          style={{
            padding: '10px 20px',
            fontSize: '14px',
            borderRadius: '10px',
          }}
        >
          Get Beta Free
        </a>

        {/* Mobile hamburger */}
        <button
          className="nav-mobile-btn md:hidden flex"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            padding: '4px',
          }}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed',
              top: '80px',
              left: '16px',
              right: '16px',
              zIndex: 999,
              background: 'rgba(10, 22, 40, 0.95)',
              backdropFilter: 'blur(20px)',
              border: '1px solid var(--border-glass)',
              borderRadius: '16px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  fontSize: '18px',
                  fontWeight: 500,
                  padding: '8px 0',
                  borderBottom: '1px solid var(--border-glass)',
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#download"
              className="btn-primary"
              style={{ textAlign: 'center', marginTop: '8px' }}
              onClick={() => setMobileOpen(false)}
            >
              Get Beta Free
            </a>
          </motion.div>
        )}
      </AnimatePresence>


    </>
  );
}
