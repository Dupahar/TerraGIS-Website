import Link from 'next/link';
import Nav from '@/components/ui/Nav';
import Footer from '@/components/sections/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found | TerraGIS',
  description: 'The page you are looking for does not exist. Return to the TerraGIS homepage.',
};

export default function NotFound() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main
        role="main"
        className="container-main"
        style={{
          paddingTop: '160px',
          paddingBottom: '120px',
          minHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontFamily: 'var(--font-space-grotesk)',
            fontSize: 'clamp(72px, 10vw, 120px)',
            fontWeight: 800,
            color: 'var(--cyan)',
            marginBottom: '16px',
            letterSpacing: '-0.04em',
            lineHeight: 1,
          }}
        >
          404
        </h1>
        <h2
          style={{
            fontFamily: 'var(--font-space-grotesk)',
            fontSize: 'clamp(24px, 4vw, 36px)',
            fontWeight: 600,
            color: 'var(--text-primary)',
            marginBottom: '16px',
          }}
        >
          Page not found
        </h2>
        <p
          style={{
            fontSize: '18px',
            color: 'var(--text-secondary)',
            maxWidth: '460px',
            lineHeight: 1.6,
            marginBottom: '40px',
          }}
        >
          The page you&apos;re looking for doesn&apos;t exist or may have been
          moved. Let&apos;s get you back on the map.
        </p>
        <Link href="/" className="btn-primary">
          Back to Homepage
        </Link>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
