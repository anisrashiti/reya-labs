import { Hero } from '@/components/hero';
import { WorkSection } from '@/components/work-section';
import { ServicesSection } from '@/components/services-section';
import { ProcessSection } from '@/components/process-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import { HomeIntro } from '@/components/home-intro';
import { AboutSection } from '@/components/about-section';
import { contactConfig } from '@/config/contact';
import { siteConfig } from '@/config/site';

const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  url: siteConfig.url,
  email: contactConfig.email,
  logo: new URL(siteConfig.socialImage.url, siteConfig.url).href,
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organization).replace(/</g, '\\u003c'),
        }}
      />
      <HomeIntro />
      <main id="main-content">
        <Hero />
        <WorkSection />
        <ServicesSection />
        <ProcessSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
