import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { PageMotion } from '@/components/page-motion';
import { siteConfig } from '@/config/site';
import './globals.css';
import './homepage.css';

const inter = localFont({
  src: '../public/fonts/inter-regular.ttf',
  variable: '--font-inter',
  weight: '400',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  applicationName: siteConfig.name,
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.socialImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.socialImage],
  },
  icons: { icon: '/favicon.png' },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable} data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        {children}
        <PageMotion />
      </body>
    </html>
  );
}
