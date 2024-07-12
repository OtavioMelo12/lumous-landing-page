'use client';

import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa6';

import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <section className="">
        <Card className="container my-20 bg-gray-900 border-none text-white flex flex-col items-center px-4 py-12 mx-auto text-center rounded-none md:rounded-2xl">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Projetos <span className="text-teal-500">Personalizados</span>
          </h2>

          <p className="max-w-3xl mt-6 text-center text-white/80">
            Transforme sua casa sem a necessidade de obras. Nossas soluções
            cabem no seu bolso, oferecendo a você o melhor da tecnologia com
            custo acessível. Descubra como podemos personalizar o seu lar de
            forma prática e conveniente.
          </p>

          <div className="inline-flex w-full mt-6 sm:w-auto">
            <Button
              asChild
              className="w-full bg-teal-500 hover:bg-teal-600 font-medium text-lg"
              size={'sm'}
            >
              <Link
                className="flex gap-2 items-center"
                href="https://wa.me/message/BQEMI636X4STE1"
                rel="noreferrer noopener"
                target="_blank"
              >
                <FaWhatsapp />
                Fale conosco!
              </Link>
            </Button>
          </div>
        </Card>
      </section>
    </main>
  );
}
