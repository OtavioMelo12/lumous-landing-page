import type { Metadata } from 'next';

import { InstagramIcon } from 'lucide-react';
import { Montserrat } from 'next/font/google';
import Link from 'next/link';

import { WhatsIcon } from '@/components/Icons';
import { Navbar } from '@/components/Navbar';
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
          'min-h-screen bg-gradient-to-r from-slate-900 to-slate-700 antialiased',
          montserrat.className,
        )}
      >
        <div className="bg-teal-500 text-white  p-1">
          <div className="container flex items-center justify-between">
            <div className="flex gap-1 items-center">
              <WhatsIcon className="inline" />

              <Link
                className="text-sm"
                href="https://wa.me/message/BQEMI636X4STE1"
                rel="noreferrer noopener"
                target="_blank"
              >
                (35) 9 8466-3756
              </Link>
            </div>

            <div>
              <Link
                href="https://www.instagram.com/lumousautomacao/"
                rel="noreferrer noopener"
                target="_blank"
              >
                <InstagramIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
