import type { Metadata } from 'next';

import { Montserrat } from 'next/font/google';

import './globals.css';

const lato = Montserrat({
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
      <body className={lato.className}>{children}</body>
    </html>
  );
}
