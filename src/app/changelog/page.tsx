import Nav from '@/components/ui/Nav';
import Footer from '@/components/sections/Footer';
import TopoDivider from '@/components/ui/TopoDivider';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Changelog | TerraGIS',
  description: 'Release notes and recent updates to the TerraGIS software.',
};

export default function ChangelogPage() {
  const releases = [
    {
      version: 'v1.0.0-beta.2',
      date: 'May 10, 2026',
      badge: 'Latest',
      features: [
        'Added native GeoPackage support for faster reading/writing',
        'Introduced new Buffer tool with variable distance attributes',
        'Improved rendering performance for large GeoTIFF files',
      ],
      fixes: [
        'Resolved crash when importing Shapefiles with missing .prj files',
        'Fixed UI glitch in attribute table scrolling',
      ]
    },
    {
      version: 'v1.0.0-beta.1',
      date: 'April 22, 2026',
      badge: '',
      features: [
        'Initial public beta release',
        'Core vector editing tools (add, move, delete vertices)',
        'Basic styling engine for polygon and line layers',
        'Export maps to PDF and PNG formats',
      ],
      fixes: []
    }
  ];

  return (
    <>
      <header>
        <Nav />
      </header>
      <main role="main" className="container-main" style={{ paddingTop: '140px', paddingBottom: '80px', minHeight: '100vh' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'left', marginBottom: '64px' }}>
            <h1 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: 'clamp(36px, 5vw, 48px)', color: 'var(--text-primary)', marginBottom: '16px', fontWeight: 700 }}>Changelog</h1>
            <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              New updates and improvements to TerraGIS.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {releases.map((release, i) => (
              <div key={i} className="glass-card" style={{ padding: 'clamp(24px, 5vw, 40px)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px', flexWrap: 'wrap' }}>
                  <h2 style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '24px', color: 'var(--cyan)', fontWeight: 600 }}>{release.version}</h2>
                  {release.badge && (
                    <span className="badge">{release.badge}</span>
                  )}
                  <span style={{ fontSize: '14px', color: 'var(--text-secondary)', marginLeft: 'auto' }}>{release.date}</span>
                </div>

                {release.features.length > 0 && (
                  <div style={{ marginBottom: '24px' }}>
                    <h3 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '16px', color: 'var(--text-primary)', marginBottom: '12px', fontWeight: 600 }}>New Features</h3>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {release.features.map((feat, j) => (
                        <li key={j} style={{ fontSize: '15px', color: 'var(--text-secondary)', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                          <span style={{ color: 'var(--green)', marginTop: '2px' }}>+</span>
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {release.fixes.length > 0 && (
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '16px', color: 'var(--text-primary)', marginBottom: '12px', fontWeight: 600 }}>Bug Fixes</h3>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {release.fixes.map((fix, j) => (
                        <li key={j} style={{ fontSize: '15px', color: 'var(--text-secondary)', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                          <span style={{ color: 'var(--amber)', marginTop: '2px' }}>•</span>
                          {fix}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
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
