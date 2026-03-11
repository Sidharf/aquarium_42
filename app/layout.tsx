import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aquarium 42',
  description: 'Interactive 3D fish tank',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
