import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'Parker — Controla tus gastos en segundos',
  description: 'Tres cifras clave —hoy, semana y mes— para entender tu dinero al instante. Sin hojas de cálculo, sin complicaciones. Gratis, sin registro, sin anuncios.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
