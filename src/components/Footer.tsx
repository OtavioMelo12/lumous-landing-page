import { MailIcon, MapPinnedIcon } from 'lucide-react';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa6';

import { LogotipoVertIconOrange } from '@/components/Icons';
import { Separator } from '@/components/ui/separator';
import { Environment } from '@/lib/environment';

export const Footer = () => {
  return (
    <footer className="" id="contato">
      <Separator className="w-11/12 mx-auto mt-8" />

      <section className="container py-20 pt-12 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <Link
            className="font-bold text-xl flex items-center gap-1 justify-center"
            href="/"
            rel="noreferrer noopener"
          >
            <LogotipoVertIconOrange />
          </Link>
        </div>

        <div className="flex flex-col gap-2 col-span-full xl:col-span-2">
          <h3 className="font-bold text-lg">Contato</h3>
          <div>
            <Link
              className="opacity-60 hover:opacity-100 flex items-center gap-1"
              href={Environment.WHATSAPP_URL}
              rel="noreferrer noopener"
              target="_blank"
            >
              <FaWhatsapp className="size-4" />
              {Environment.WHATSAPP_NUMBER}
            </Link>
          </div>
          <div>
            <Link
              className="opacity-60 hover:opacity-100 flex items-center gap-1"
              href={`mailto:${Environment.EMAIL}`}
              rel="noreferrer noopener"
              target="_blank"
            >
              <MailIcon className="size-4" />
              {Environment.EMAIL}
            </Link>
          </div>
          <div>
            <Link
              className="opacity-60 hover:opacity-100 flex items-center gap-1"
              href={Environment.CITY_MAP_URL}
              rel="noreferrer noopener"
              target="_blank"
            >
              <MapPinnedIcon className="size-4" />
              Lavras-MG e região
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-2 ">
          <h3 className="font-bold text-lg">Redes Sociais</h3>
          <div>
            <Link
              className="opacity-60 hover:opacity-100 flex items-center gap-1"
              href={Environment.INSTAGRAM_URL}
              rel="noreferrer noopener"
              target="_blank"
            >
              <FaInstagram className="min-h-4 min-w-4 size-4" />
              lumousautomacao
            </Link>
          </div>
          <div>
            <Link
              className="opacity-60 hover:opacity-100 flex items-center gap-1 whitespace-nowrap"
              href={Environment.FACEBOOK_URL}
              rel="noreferrer noopener"
              target="_blank"
            >
              <FaFacebook className="min-h-4 size-4 min-w-4" />
              Página - Lumous
            </Link>
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2024 Landing page criada por{' '}
          <a
            className="text-primary transition-all border-primary hover:border-b-2 font-medium"
            href="https://www.instagram.com/_otavio_melo/"
            rel="noreferrer noopener"
            target="_blank"
          >
            Otávio Melo (Lumous)
          </a>
        </h3>
      </section>
    </footer>
  );
};
