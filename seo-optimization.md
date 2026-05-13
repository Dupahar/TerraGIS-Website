# TerraGIS SEO Optimization Report

> **Audit Date:** 12 May 2026, 9:36 PM UTC
> **URL:** https://terragis.co.in
> **Hosting:** Vercel | **SSL:** ✅ Enabled | **Server IP:** 216.198.79.1

---

## Score Overview

| Category | Status |
|----------|--------|
| On-Page SEO | ⚠️ Could be better |
| GEO (Generative Engine) | ⚠️ Could be better |
| Links | ⚠️ Weak backlinks |
| Usability | ⚠️ Could be better |
| Performance | ⚠️ Could be better |

---

## 🔴 High Priority

### 1. Execute a Link Building Strategy
- **Category:** Links
- **Issue:** 0 total backlinks, 0 referring domains
- **Impact:** Search engines use backlinks as a strong indicator of authority and ranking potential
- **Actions:**
  - Submit site to GIS-related directories and software listings
  - Write guest posts on GIS/surveying blogs linking back to terragis.co.in
  - Get listed on Product Hunt, AlternativeTo, Slant
  - Share on Reddit (r/gis, r/geospatial), HackerNews
  - Create valuable GIS content/tutorials that attract natural links

---

## 🟡 Medium Priority

### 2. Implement XML Sitemaps File
- **Category:** On-Page SEO
- **Issue:** No XML sitemap detected
- **Actions:**
  - Create `public/sitemap.xml` with all page URLs
  - Or use `next-sitemap` package for auto-generation
  - Submit sitemap to Google Search Console

### 3. Implement robots.txt File
- **Category:** On-Page SEO
- **Issue:** No robots.txt detected
- **Actions:**
  - Create `public/robots.txt`:
    ```
    User-agent: *
    Allow: /
    Sitemap: https://terragis.co.in/sitemap.xml
    ```

### 4. Increase Title Tag Length (Currently 18 chars → Target 50-60)
- **Category:** On-Page SEO
- **Current:** `TerraGIS | Dupahar` (18 characters)
- **Recommended:** `TerraGIS — Professional Desktop GIS Software for Windows | Dupahar` (66 chars)
- **Or:** `TerraGIS by Dupahar — Desktop GIS for Windows` (46 chars)
- **File:** `src/app/layout.tsx` → `metadata.title`

### 5. Reduce Meta Description Length (Currently 315 chars → Target 120-160)
- **Category:** On-Page SEO
- **Current (315 chars):**
  > TerraGIS is a modern desktop GIS application for professional spatial workflows on Windows. Load Shapefiles, GeoTIFF, GeoPackage — edit vectors, run spatial analysis, digitize features, and export publication-ready maps. Built for land surveyors, EIA consultants, drone survey teams, and GIS professionals in India.
- **Recommended (155 chars):**
  > TerraGIS — professional desktop GIS for Windows. Load Shapefiles, GeoTIFF, run spatial analysis, and export maps. Starting at ₹249. Download now.
- **File:** `src/app/layout.tsx` → `metadata.description`

### 6. Remove Duplicate Canonical Tags
- **Category:** On-Page SEO
- **Issue:** Two canonical tags found, both pointing to `https://dupahar.github.io/TerraGIS/`
- **Fix:** Keep ONE canonical tag pointing to `https://terragis.co.in/`
- **File:** `src/app/layout.tsx` — check `metadata.alternates.canonical`
- **Critical:** The canonical is pointing to the OLD GitHub Pages URL, not the current domain!

---

## 🟢 Low Priority

### 7. Increase Page Text Content
- **Issue:** Only 559 words detected — considered "thin content"
- **Target:** 800-1500+ words
- **Actions:**
  - Add FAQ section
  - Expand feature descriptions
  - Add comparison content (TerraGIS vs QGIS vs ArcGIS)
  - Add testimonials or case studies

### 8. Enable HTTP/2+ Protocol
- **Issue:** Using outdated HTTP protocol
- **Note:** Vercel should serve HTTP/2 by default — may be a DNS/proxy issue
- **Action:** Verify Vercel deployment settings

### 9. Mobile PageSpeed Insights — Poor Score
| Metric | Value | Target |
|--------|-------|--------|
| First Contentful Paint | 3.8s | < 1.8s |
| Speed Index | 6.3s | < 3.4s |
| Largest Contentful Paint | 5.6s | < 2.5s |
| Time to Interactive | 8.1s | < 3.8s |
| Total Blocking Time | 0.29s | < 0.2s |
| Cumulative Layout Shift | 0 | ✅ Good |

- **Actions:**
  - Reduce unused JavaScript (1.2s savings potential)
  - Avoid multiple page redirects (0.63s savings)
  - Lazy-load the 3D Globe component (heaviest asset)
  - Consider removing Three.js on mobile entirely

### 10. Desktop PageSpeed Insights — Poor Score
| Metric | Value | Target |
|--------|-------|--------|
| First Contentful Paint | 0.6s | ✅ Good |
| Speed Index | 2.5s | < 1.3s |
| Largest Contentful Paint | 1.5s | ✅ Borderline |
| Time to Interactive | 3.8s | < 3.8s |
| Total Blocking Time | 0.64s | < 0.2s |
| Cumulative Layout Shift | 0 | ✅ Good |

- **Actions:**
  - Reduce JavaScript bundle size
  - Code-split Three.js and framer-motion

### 11. Add SPF Mail Record
- **Issue:** No SPF record for email deliverability
- **Action:** Add DNS TXT record:
  ```
  v=spf1 include:_spf.google.com ~all
  ```

### 12. Implement Analytics
- **Issue:** No analytics tool detected
- **Actions:**
  - Add Google Analytics 4 (GA4)
  - Or use Vercel Analytics (simpler integration)
  - Add to `src/app/layout.tsx`

### 13. Add Local Business Schema
- **Action:** Add LocalBusiness JSON-LD schema to `layout.tsx`

### 14. Social Media Profiles
- **Missing:** Facebook Page, X (Twitter), Instagram, YouTube
- **Action:** Create profiles and link them in footer

### 15. Implement llms.txt File
- **Category:** GEO
- **Action:** Create `public/llms.txt` with structured info about TerraGIS for AI crawlers

### 16. Remove Inline Styles
- **Issue:** Heavy use of inline styles detected
- **Note:** This is by design (Tailwind v4 workaround) — low priority

### 17. Resolve JavaScript Errors
- **Issue:** JS errors detected during page load
- **Action:** Check browser console for specific errors

### 18. Remove Plain Text Email Addresses
- **Issue:** Email addresses found in plain text (Contact section)
- **Action:** Use contact form or obfuscate emails

---

## Current SERP Preview

```
TerraGIS by Dupahar
https://terragis.co.in
TerraGIS | Dupahar
TerraGIS is a modern desktop GIS application for professional
spatial workflows on Windows. Load Shapefiles, GeoTIFF,
GeoPackage — edit vectors, run ...
```

## Target SERP Preview

```
TerraGIS — Professional Desktop GIS Software for Windows | Dupahar
https://terragis.co.in
TerraGIS — professional desktop GIS for Windows. Load Shapefiles,
GeoTIFF, run spatial analysis, and export maps. Starting at ₹249.
```

---

## Performance Summary

| Metric | Value |
|--------|-------|
| Server Response | 0.0s ✅ |
| Page Content Loaded | 0.9s ✅ |
| Page Scripts Complete | 1.0s ✅ |
| Download Size | 0.48 MB ✅ |
| Compression Rate | 55% ⚠️ |
| Total Resources | 19 files |
| JS Resources | 8 files |
| CSS Resources | 1 file |
| Images | 2 files |

---

## Technology Detected

| Technology | Details |
|------------|---------|
| Hosting | Vercel |
| DNS | ns63/ns64.domaincontrol.com (GoDaddy) |
| SSL | ✅ Enabled |
| DMARC | ✅ Valid |
| SPF | ❌ Missing |
| Schema.org | JSON-LD + Microdata |
| Facebook OG Tags | ✅ Present |
| X Cards | ✅ Present |

---

## Action Plan (Priority Order)

1. ✅ **Fix canonical tag** — point to `https://terragis.co.in/` (not GitHub Pages)
2. ✅ **Expand title tag** — 50-60 characters
3. ✅ **Shorten meta description** — 120-160 characters
4. ✅ **Add robots.txt** — `public/robots.txt`
5. ✅ **Add sitemap.xml** — use `next-sitemap`
6. ✅ **Add Google Analytics** — GA4 or Vercel Analytics
7. ⬜ **Increase page content** — add FAQ, expand features
8. ⬜ **Build backlinks** — directories, guest posts, communities
9. ⬜ **Optimize mobile performance** — lazy-load 3D globe
10. ⬜ **Add llms.txt** — for AI crawler visibility
11. ⬜ **Create social profiles** — Facebook, X, Instagram, YouTube
12. ⬜ **Add SPF DNS record** — email deliverability
