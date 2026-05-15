import Nav from '@/components/ui/Nav';
import Footer from '@/components/sections/Footer';
import TopoDivider from '@/components/ui/TopoDivider';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About TerraGIS | Dupahar',
  description: 'Our mission to build professional desktop GIS software for India\'s spatial workforce.',
};

export default function AboutPage() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main role="main" className="container-main" style={{ paddingTop: '140px', paddingBottom: '80px', minHeight: '100vh' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: 'clamp(36px, 5vw, 48px)', color: 'var(--text-primary)', marginBottom: '16px', fontWeight: 700 }}>About TerraGIS</h1>
          <p style={{ fontSize: '18px', color: 'var(--cyan)', fontFamily: 'var(--font-jetbrains)', marginBottom: '40px', letterSpacing: '0.02em' }}>
            Built for India&apos;s spatial workforce.
          </p>

          <div className="glass-card" style={{ padding: 'clamp(24px, 5vw, 40px)', marginBottom: '40px' }}>
            <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '24px', color: 'var(--text-primary)', marginBottom: '20px', fontWeight: 600 }}>Our Mission</h2>
            <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '20px' }}>
              Dupahar was founded with a clear vision: to democratize access to high-performance, professional-grade desktop GIS software for spatial practitioners in India and beyond.
            </p>
            <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              TerraGIS is our flagship offering, built specifically for Windows to leverage the raw computing power of modern hardware. From land surveyors and EIA consultants to drone survey teams, TerraGIS provides the essential tools needed for vector digitization, raster analysis, and map production without the bloated overhead or restrictive licensing of legacy enterprise solutions.
            </p>
          </div>

          <div className="glass-card" style={{ padding: 'clamp(24px, 5vw, 40px)' }}>
            <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '24px', color: 'var(--text-primary)', marginBottom: '20px', fontWeight: 600 }}>The Team</h2>
            <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              Behind TerraGIS is a dedicated team passionate about geospatial technology and performance optimization. We actively listen to the community to drive our roadmap, ensuring our tools directly solve real-world problems. By focusing on essential workflows and stripping away unnecessary complexity, we've built a tool that gets out of your way and lets you map faster.
            </p>
          </div>
        </div>
      </main>
      <TopoDivider />
      <footer>
        <Footer />
      </footer>
    </>
  );
}
