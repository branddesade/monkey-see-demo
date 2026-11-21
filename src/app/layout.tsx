import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Monkey Monkey — Pet Toucan Adoption & Care',
  description:
    'Adopt a happy, hand-raised pet toucan. Learn about aviary setup, fruit-rich diets, and responsible toucan companionship.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col bg-stone-950 text-stone-50">
        {children}
      </body>
    </html>
  );
}
