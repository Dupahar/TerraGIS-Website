// TerraGIS Design System Tokens — sourced from Stitch MCP design system
// Asset: assets/a05c7cb9376043ff81b847b0e144e46b

export const colors = {
  // Core backgrounds
  background: '#040810',
  surface: '#0A1628',
  surfaceDim: '#0e1417',
  surfaceBright: '#333a3d',
  surfaceContainerLowest: '#080f12',
  surfaceContainerLow: '#161d1f',
  surfaceContainer: '#1a2123',
  surfaceContainerHigh: '#242b2e',
  surfaceContainerHighest: '#2f3639',
  surfaceElevated: '#0D2040',
  
  // Accent system
  cyan: '#00D4FF',
  cyanDim: '#3cd7ff',
  cyanLight: '#a8e8ff',
  green: '#22C55E',
  greenLight: '#4ae176',
  amber: '#F59E0B',
  amberLight: '#ffd9a1',
  
  // Text
  textPrimary: '#F0F4FF',
  textSecondary: '#7B9EC8',
  onSurface: '#dde3e7',
  onSurfaceVariant: '#bbc9cf',
  
  // Borders & outlines
  outline: '#859398',
  outlineVariant: '#3c494e',
  borderGlass: 'rgba(240, 244, 255, 0.1)',
  
  // Glows
  glowCyan: 'rgba(0, 212, 255, 0.3)',
  glowCyanSubtle: 'rgba(0, 212, 255, 0.15)',
  glowAmber: 'rgba(245, 158, 11, 0.3)',
  glowGreen: 'rgba(34, 197, 94, 0.3)',
  
  // Grid
  gridLines: '#0D2040',
} as const;

export const typography = {
  headlineXl: {
    fontFamily: 'var(--font-space-grotesk)',
    fontSize: '72px',
    fontWeight: '700',
    lineHeight: '1.05',
    letterSpacing: '-0.03em',
  },
  headlineLg: {
    fontFamily: 'var(--font-space-grotesk)',
    fontSize: '48px',
    fontWeight: '700',
    lineHeight: '1.1',
    letterSpacing: '-0.02em',
  },
  headlineMd: {
    fontFamily: 'var(--font-space-grotesk)',
    fontSize: '32px',
    fontWeight: '600',
    lineHeight: '1.2',
  },
  headlineSm: {
    fontFamily: 'var(--font-space-grotesk)',
    fontSize: '24px',
    fontWeight: '600',
    lineHeight: '1.3',
  },
  bodyLg: {
    fontFamily: 'var(--font-inter)',
    fontSize: '20px',
    fontWeight: '400',
    lineHeight: '1.6',
  },
  bodyMd: {
    fontFamily: 'var(--font-inter)',
    fontSize: '18px',
    fontWeight: '400',
    lineHeight: '1.6',
  },
  bodySm: {
    fontFamily: 'var(--font-inter)',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '1.6',
  },
  labelMono: {
    fontFamily: 'var(--font-jetbrains)',
    fontSize: '13px',
    fontWeight: '500',
    lineHeight: '1.4',
    letterSpacing: '0.05em',
  },
} as const;

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
  '3xl': '64px',
  '4xl': '96px',
  '5xl': '128px',
  gutter: '20px',
} as const;

export const radii = {
  sm: '0.25rem',
  md: '0.5rem',
  lg: '1rem',
  xl: '1.5rem',
  full: '9999px',
} as const;

// Indian cities for globe markers
export const indianCities = [
  { name: 'Delhi', lat: 28.6, lng: 77.2 },
  { name: 'Mumbai', lat: 19.1, lng: 72.9 },
  { name: 'Bengaluru', lat: 12.9, lng: 77.6 },
  { name: 'Hyderabad', lat: 17.4, lng: 78.5 },
  { name: 'Chennai', lat: 13.1, lng: 80.3 },
  { name: 'Kolkata', lat: 22.6, lng: 88.4 },
  { name: 'Jaipur', lat: 26.9, lng: 75.8 },
] as const;
