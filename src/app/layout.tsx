import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TerraGIS | Dupahar",
  description:
    "TerraGIS is a modern desktop GIS application for professional spatial workflows on Windows. Load Shapefiles, GeoTIFF, GeoPackage — edit vectors, run spatial analysis, digitize features, and export publication-ready maps. Built for land surveyors, EIA consultants, drone survey teams, and GIS professionals in India.",
  keywords: [
    "GIS software",
    "GIS software for Windows",
    "desktop GIS",
    "Geographic Information System",
    "Shapefile editor",
    "GeoTIFF viewer",
    "GeoPackage",
    "spatial analysis software",
    "vector editing GIS",
    "raster analysis",
    "drone survey software",
    "land survey software",
    "cadastral mapping software",
    "EIA mapping tool",
    "map making software",
    "TerraGIS",
    "Dupahar",
    "Indian GIS software",
    "GIS India",
    "free GIS alternative",
    "ArcGIS alternative",
    "QGIS alternative",
    "professional mapping tool",
    "geospatial analysis",
    "survey mapping software",
    "digitization software",
    "AI GIS",
    "remote sensing software",
    "topographic mapping",
    "contour mapping",
    "field survey app",
    "GIS for surveyors",
    "GIS for consultants",
    "Windows mapping software",
  ],
  authors: [{ name: "Dupahar", url: "https://github.com/Dupahar" }],
  creator: "Dupahar",
  publisher: "Dupahar",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "TerraGIS — Professional Desktop GIS for Windows",
    description:
      "Modern desktop GIS application for professional spatial workflows. Vector & raster editing, spatial analysis, AI-assisted mapping, and publication-ready exports. Starting at ₹249.",
    type: "website",
    locale: "en_IN",
    siteName: "TerraGIS by Dupahar",
    url: "https://dupahar.github.io/TerraGIS/",
  },
  twitter: {
    card: "summary_large_image",
    title: "TerraGIS — Professional Desktop GIS for Windows",
    description:
      "Modern desktop GIS application for professional spatial workflows. Vector & raster editing, spatial analysis, AI-assisted mapping.",
  },
  alternates: {
    canonical: "https://dupahar.github.io/TerraGIS/",
  },
  category: "Software",
};

// JSON-LD structured data for rich search results
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "name": "TerraGIS",
      "applicationCategory": "DesignApplication",
      "operatingSystem": "Windows 10, Windows 11",
      "description":
        "TerraGIS is a modern desktop GIS application for professional spatial workflows on Windows. It supports core vector and raster workflows, map interaction, editing, export, and AI-assisted analysis integration.",
      "url": "https://dupahar.github.io/TerraGIS/",
      "downloadUrl": "https://apps.microsoft.com/detail/9P1ZS0X4NF5Q",
      "softwareVersion": "Beta",
      "fileSize": "224MB",
      "offers": [
        {
          "@type": "Offer",
          "name": "Community",
          "price": "249",
          "priceCurrency": "INR",
          "description": "One-time purchase for hobbyists. Core vector + raster tools, community support, Shapefile / GeoPackage / GeoJSON.",
          "availability": "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          "name": "Professional",
          "price": "40000",
          "priceCurrency": "INR",
          "description": "Per user, billed annually. TerraAI segmentation, priority support, advanced spatial analysis.",
          "availability": "https://schema.org/PreOrder",
        },
      ],
      "author": {
        "@type": "Organization",
        "name": "Dupahar",
        "url": "https://github.com/Dupahar",
        "email": "mahajanadil0220@gmail.com",
        "telephone": "+91 8492989575",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Jammu",
          "addressCountry": "IN",
        },
      },
      "featureList": [
        "Shapefile import and export",
        "GeoTIFF raster support",
        "GeoPackage support",
        "GeoJSON support",
        "Vector digitization and editing",
        "Spatial analysis tools (Buffer, Clip, Intersect)",
        "Satellite and terrain basemaps",
        "Publication-ready map export (PDF, PNG)",
        "Layer management and styling",
        "AI-assisted segmentation (Professional)",
        "Coordinate reference system support",
      ],
      "screenshot": [
        "https://dupahar.github.io/TerraGIS/screenshot-1.png",
        "https://dupahar.github.io/TerraGIS/screenshot-2.png",
        "https://dupahar.github.io/TerraGIS/screenshot-3.png",
      ],
    },
    {
      "@type": "Organization",
      "name": "Dupahar",
      "url": "https://github.com/Dupahar",
      "logo": "https://dupahar.github.io/TerraGIS/dupahar-logo.png",
      "email": "mahajanadil0220@gmail.com",
      "telephone": "+91 8492989575",
      "sameAs": [
        "https://github.com/Dupahar",
        "https://www.linkedin.com/in/adil-mahajan0220/",
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Jammu",
        "addressRegion": "Jammu & Kashmir",
        "addressCountry": "IN",
      },
    },
    {
      "@type": "WebSite",
      "name": "TerraGIS",
      "url": "https://dupahar.github.io/TerraGIS/",
      "description": "Official website for TerraGIS — Professional Desktop GIS Software for Windows by Dupahar.",
      "publisher": {
        "@type": "Organization",
        "name": "Dupahar",
      },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is TerraGIS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "TerraGIS is a modern desktop GIS (Geographic Information System) application for Windows, designed for professional spatial workflows including vector editing, raster analysis, cadastral mapping, and AI-assisted geospatial analysis.",
          },
        },
        {
          "@type": "Question",
          "name": "What file formats does TerraGIS support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "TerraGIS supports Shapefile (.shp), GeoTIFF (.tif), GeoPackage (.gpkg), and GeoJSON formats for both import and export.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does TerraGIS cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "TerraGIS Community edition starts at ₹249 (approximately $3) as a one-time purchase. Professional edition is ₹40,000/year. Enterprise licensing is available for teams.",
          },
        },
        {
          "@type": "Question",
          "name": "Is TerraGIS an alternative to ArcGIS or QGIS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. TerraGIS is designed as a modern, lightweight alternative to ArcGIS and QGIS for Windows users who need professional GIS capabilities without heavy infrastructure or complex licensing.",
          },
        },
        {
          "@type": "Question",
          "name": "What operating systems does TerraGIS run on?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "TerraGIS runs natively on Windows 10 (version 17763.0 or higher) and Windows 11. It is available on the Microsoft Store.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href="https://dupahar.github.io/TerraGIS/" />
      </head>
      <body>{children}</body>
    </html>
  );
}
