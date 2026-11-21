import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Monkey See — Playful Creative Studio',
  description: 'A playful creative studio building delightful digital experiences.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col bg-stone-50 text-stone-900">
        {children}
      </body>
    </html>
  );
}
