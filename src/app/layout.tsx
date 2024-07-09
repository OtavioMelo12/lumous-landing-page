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
  authors: [
    {
      name: 'Otávio Melo',
      url: 'https://www.linkedin.com/in/otaviomelo12/',
    },
  ],
  creator: 'Otávio Melo, Lumous',
  description:
    'Empresa de automação residencial em Minas Gerais. Transforme sua casa em um lar mágico com a Lumous.',
  keywords: [
    'automação residencial',
    'casa inteligente',
    'smart home',
    'home automation',
    'serviços de automação',
    'lumous automação',
    'lumous',
    'minas gerais',
    'lavras',
  ],
  openGraph: {
    description:
      'Empresa de automação residencial em Minas Gerais. Transforme sua casa em um lar mágico com a Lumous.',
    images: [
      {
        alt: 'Lumous OG Image',
        height: 672,
        url: 'https://lumous.com.br/images/og.png',
        width: 1280,
      },
    ],
    locale: 'pt_BR',
    title: 'Lumous | Automação Residencial',
    type: 'website',
  },
  publisher: 'Lumous / Otávio Melo',
  robots: 'index, follow',
  title: 'Lumous | Automação Residencial',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-Br">
      <head>
        <meta
          content="F4DUd3kmkIwd-MCuSPKfPpDebCrPG2f84Fx8ADuLwZ4"
          name="google-site-verification"
        />
      </head>
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
