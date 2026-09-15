import { Hero } from '@/components/hero';
import { WorkSection } from '@/components/work-section';
import { ServicesSection } from '@/components/services-section';
import { ProcessSection } from '@/components/process-section';
import { AboutSection } from '@/components/about-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import { PageMotion } from '@/components/page-motion';

export default function Home() {
  return (
    <>
      <main id="main-content">
        <Hero />
        <WorkSection />
        <ServicesSection />
        <ProcessSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <PageMotion />
    </>
  );
}
