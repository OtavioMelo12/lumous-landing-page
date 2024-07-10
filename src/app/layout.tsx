import type { Metadata } from 'next';

import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import { Montserrat } from 'next/font/google';
import Script from 'next/script';

import { ContactHeader } from '@/components/ContactHeader';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { ThemeProvider } from '@/components/theme-provider';
import { Environment } from '@/lib/environment';
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
        <Script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-NZVLR273');`,
          }}
          id="gtm-script"
        />
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
        <noscript>
          <iframe
            height="0"
            src="https://www.googletagmanager.com/ns.html?id=GTM-N36SPKLD"
            style={{
              display: 'none',
              visibility: 'hidden',
            }}
            title="gtm"
            width="0"
          />
        </noscript>
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
      <GoogleTagManager gtmId={Environment.GOOGLE_TAG_MANAGER_ID} />
    </html>
  );
}
