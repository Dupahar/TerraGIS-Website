'use client';

const features = [
  'Shapefile Editor',
  'GeoTIFF Raster',
  'AI Segmentation',
  'PDF Layout Export',
  'Buffer & Clip',
  'WMTS Basemaps',
  'Session Restore',
  'GeoPackage',
  'Drone Survey Ready',
  'Survey Ready',
];

export default function FeatureStrip() {
  const items = [...features, ...features]; // duplicate for seamless loop

  return (
    <div
      style={{
        width: '100%',
        background: 'var(--surface)',
        borderTop: '1px solid var(--border-glass)',
        borderBottom: '1px solid var(--border-glass)',
        padding: '16px 0',
        overflow: 'hidden',
      }}
      className="feature-strip"
    >
      <div className="feature-strip-inner">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '32px',
              whiteSpace: 'nowrap',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '14px',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                letterSpacing: '0.02em',
              }}
            >
              {item}
            </span>
            <span style={{ color: 'var(--cyan)', opacity: 0.4, fontSize: '8px' }}>
              ◆
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
