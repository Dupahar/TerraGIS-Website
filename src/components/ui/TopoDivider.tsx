'use client';

export default function TopoDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div
      style={{
        width: '100%',
        overflow: 'hidden',
        lineHeight: 0,
        transform: flip ? 'scaleY(-1)' : 'none',
      }}
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        style={{ width: '100%', height: '80px', display: 'block' }}
      >
        <path
          d="M0,40 C120,20 240,60 360,35 C480,10 600,50 720,40 C840,30 960,55 1080,35 C1200,15 1320,45 1440,40"
          fill="none"
          stroke="var(--grid-lines)"
          strokeWidth="1"
          opacity="0.4"
        />
        <path
          d="M0,50 C160,30 320,65 480,45 C640,25 800,55 960,50 C1120,45 1280,60 1440,50"
          fill="none"
          stroke="var(--grid-lines)"
          strokeWidth="1"
          opacity="0.3"
        />
        <path
          d="M0,60 C200,45 400,70 600,55 C800,40 1000,65 1200,55 C1400,45 1440,60 1440,60"
          fill="none"
          stroke="var(--grid-lines)"
          strokeWidth="1"
          opacity="0.2"
        />
      </svg>
    </div>
  );
}
