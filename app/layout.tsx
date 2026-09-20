import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import './homepage.css';

const inter = localFont({
  src: '../public/fonts/inter-regular.ttf',
  variable: '--font-inter',
  weight: '400',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'REYA Labs',
  description: 'Websites, platforms & software built for modern businesses.',
  icons: { icon: '/favicon.png' },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body><a className="skip-link" href="#main-content">Skip to content</a>{children}</body>
    </html>
  );
}
