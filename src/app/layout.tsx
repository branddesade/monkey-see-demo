import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'Monkey See — Playful Creative Studio',
  description: 'A playful creative studio building delightful digital experiences.',
};

const bridgeUrl =
  process.env.NEXT_PUBLIC_SITEPORTAL_BRIDGE_URL ||
  'https://aiwebmaster.meskait.com/portal-bridge.js';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col bg-stone-50 text-stone-900">
        {children}
        <Script src={bridgeUrl} strategy="afterInteractive" />
      </body>
    </html>
  );
}
