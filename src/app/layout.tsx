import type { Metadata } from 'next';

import { Montserrat } from 'next/font/google';

import { ContactHeader } from '@/components/ContactHeader';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';

import './globals.css';

const montserrat = Montserrat({
  fallback: ['font-sans', 'sans-serif', 'system-ui', 'ui-sans-serif', 'arial'],
  preload: true,
  subsets: ['latin'],
});

export const metadata: Metadata = {
  authors: [{ name: 'Otávio Melo' }],
  description:
    'Empresa de automação residencial em Minas Gerais. Transforme sua casa em um lar mágico com a Lumous.',
  title: 'Lumous | Automação Residencial',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-Br">
      <body
        className={cn(
          'min-h-screen bg-background antialiased',
          montserrat.className,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
          enableSystem
        >
          <ContactHeader />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
