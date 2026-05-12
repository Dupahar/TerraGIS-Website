'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Use Cases', href: '#usecases' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setScrollProgress(height > 0 ? (winScroll / height) * 100 : 0);
      setScrolled(winScroll > 50);
    };

    const handleResize = () => {
      const desktop = window.innerWidth >= 1024;
      setIsDesktop(desktop);
      if (desktop) setMobileOpen(false);
    };

    handleResize();
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
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
          top: scrolled ? '8px' : '12px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'calc(100% - 32px)',
          maxWidth: '1200px',
          zIndex: 1000,
          background: scrolled
            ? 'rgba(4, 8, 16, 0.88)'
            : 'rgba(4, 8, 16, 0.6)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid var(--border-glass)',
          borderRadius: '14px',
          padding: '0 24px',
          height: '60px',
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
            flexShrink: 0,
          }}
        >
          <Image
            src="/dupahar-logo.png"
            alt="Dupahar"
            width={30}
            height={30}
            style={{ borderRadius: '8px' }}
          />
          <span
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontWeight: 700,
              fontSize: '17px',
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
            }}
          >
            TerraGIS
          </span>
        </a>

        {/* Desktop Nav Links */}
        {isDesktop && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '32px',
              flex: 1,
              paddingLeft: '170px',
            }}
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
                  whiteSpace: 'nowrap',
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
        )}

        {/* CTA */}
        {isDesktop && (
          <a
            href="https://apps.microsoft.com/detail/9P1ZS0X4NF5Q"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{
              padding: '8px 16px',
              fontSize: '13px',
              borderRadius: '10px',
              flexShrink: 0,
            }}
          >
            Download
          </a>
        )}

        {/* Mobile hamburger */}
        {!isDesktop && (
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              padding: '4px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        )}
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: '76px',
              left: '16px',
              right: '16px',
              zIndex: 999,
              background: 'rgba(10, 22, 40, 0.96)',
              backdropFilter: 'blur(20px)',
              border: '1px solid var(--border-glass)',
              borderRadius: '14px',
              padding: '12px',
              display: 'flex',
              flexDirection: 'column',
              gap: '2px',
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
                  fontSize: '15px',
                  fontWeight: 500,
                  padding: '12px 16px',
                  borderRadius: '10px',
                  transition: 'background 0.2s ease',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = 'rgba(0, 212, 255, 0.08)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = 'transparent')
                }
              >
                {link.label}
              </a>
            ))}
            <div
              style={{
                height: '1px',
                background: 'var(--border-glass)',
                margin: '4px 0',
              }}
            />
            <a
              href="https://apps.microsoft.com/detail/9P1ZS0X4NF5Q"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                textAlign: 'center',
                justifyContent: 'center',
                margin: '4px 8px 8px',
              }}
              onClick={() => setMobileOpen(false)}
            >
              Download
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
