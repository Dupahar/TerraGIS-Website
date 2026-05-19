import Nav from '@/components/ui/Nav';
import Footer from '@/components/sections/Footer';
import TopoDivider from '@/components/ui/TopoDivider';
import { Metadata } from 'next';
import { BookOpen, Compass, Layers, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Documentation | TerraGIS — Guides for Desktop GIS on Windows',
  description: 'Learn how to use TerraGIS for vector editing, raster analysis, spatial geoprocessing, and map export. Step-by-step guides for GIS professionals on Windows.',
  alternates: {
    canonical: 'https://terragis.co.in/docs',
  },
};

export default function DocsPage() {
  const categories = [
    {
      title: 'Getting Started',
      icon: <Compass className="text-cyan mb-4" size={32} style={{ color: 'var(--cyan)', marginBottom: '16px' }} />,
      desc: 'Installation guides, licensing, and setting up your first project.',
    },
    {
      title: 'Vector Editing',
      icon: <BookOpen className="text-cyan mb-4" size={32} style={{ color: 'var(--cyan)', marginBottom: '16px' }} />,
      desc: 'Digitize polygons, edit vertices, and manage attribute tables seamlessly.',
    },
    {
      title: 'Raster & Basemaps',
      icon: <Layers className="text-cyan mb-4" size={32} style={{ color: 'var(--cyan)', marginBottom: '16px' }} />,
      desc: 'Work with GeoTIFFs and connect to WMS/TMS streaming basemaps.',
    },
    {
      title: 'Spatial Analysis',
      icon: <Zap className="text-cyan mb-4" size={32} style={{ color: 'var(--cyan)', marginBottom: '16px' }} />,
      desc: 'Run geoprocessing tools like Buffer, Intersect, and Clip natively.',
    },
  ];

  return (
    <>
      <header>
        <Nav />
      </header>
      <main role="main" className="container-main" style={{ paddingTop: '140px', paddingBottom: '80px', minHeight: '100vh' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h1 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: 'clamp(36px, 5vw, 48px)', color: 'var(--text-primary)', marginBottom: '16px', fontWeight: 700 }}>Documentation</h1>
            <p style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
              Everything you need to know to map faster and smarter with TerraGIS.
            </p>
          </div>

          <div className="bento-grid" style={{ marginBottom: '64px' }}>
            {categories.map((cat, i) => (
              <a key={i} href="/docs" className="glass-card bento-large" style={{ padding: '32px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textDecoration: 'none' }}>
                {cat.icon}
                <h3 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '20px', color: 'var(--text-primary)', marginBottom: '12px', fontWeight: 600 }}>{cat.title}</h3>
                <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {cat.desc}
                </p>
                <div style={{ marginTop: 'auto', paddingTop: '20px', color: 'var(--cyan)', fontSize: '14px', fontWeight: 500, fontFamily: 'var(--font-inter)' }}>
                  Read guides →
                </div>
              </a>
            ))}
          </div>

          <div className="glass-card" style={{ padding: '40px', textAlign: 'center', backgroundImage: 'radial-gradient(circle at top right, rgba(0,212,255,0.05) 0%, transparent 50%)' }}>
            <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '24px', color: 'var(--text-primary)', marginBottom: '16px', fontWeight: 600 }}>Need more help?</h2>
            <p style={{ fontSize: '16px', color: 'var(--text-secondary)', marginBottom: '24px' }}>
              If you can't find what you're looking for, our support team is ready to assist you.
            </p>
            <a href="mailto:mahajanadil0220@gmail.com" className="btn-primary">
              Contact Support
            </a>
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
