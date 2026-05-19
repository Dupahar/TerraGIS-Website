import Nav from '@/components/ui/Nav';
import Hero from '@/components/sections/Hero';
import FeatureStrip from '@/components/sections/FeatureStrip';
import Features from '@/components/sections/Features';
import UseCases from '@/components/sections/UseCases';
import ProductShowcase from '@/components/sections/ProductShowcase';
import TerraAI from '@/components/sections/TerraAI';
import Pricing from '@/components/sections/Pricing';
import Contact from '@/components/sections/Contact';
import DownloadCTA from '@/components/sections/Download';
import Footer from '@/components/sections/Footer';
import TopoDivider from '@/components/ui/TopoDivider';

export default function Home() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main role="main" itemScope itemType="https://schema.org/WebPage">
        <h1 className="sr-only">
          TerraGIS — Professional Desktop GIS Software for Windows by Dupahar
        </h1>
        <Hero />
        <FeatureStrip />
        <TopoDivider />
        <article id="features-article" itemScope itemType="https://schema.org/SoftwareApplication">
          <Features />
        </article>
        <TopoDivider flip />
        <UseCases />
        <TopoDivider />
        <ProductShowcase />
        <TopoDivider flip />
        <TerraAI />
        <TopoDivider />
        <Pricing />
        <TopoDivider flip />
        <Contact />
        <TopoDivider />
        <DownloadCTA />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
