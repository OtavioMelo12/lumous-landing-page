import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white">
      <div className="container grid lg:grid-cols-2 place-items-center py-8 gap-10 ">
        <div className="text-center lg:text-start space-y-6">
          <h1 className="inline text-5xl md:text-5xl font-bold">
            Transforme sua casa em um{' '}
            <span className="whitespace-nowrap inline bg-gradient-to-r from-[#5EEAD4] via-[#2DD4BF] to-[#0D9488] text-transparent bg-clip-text">
              lar mágico
            </span>{' '}
            com a{' '}
            <span className="inline bg-gradient-to-r from-[#fdba74]  to-[#f97316] text-transparent bg-clip-text">
              Lumous
            </span>{' '}
          </h1>{' '}
          <p className="text-xl text-white md:w-10/12 mx-auto lg:mx-0">
            Automação residencial trazendo conforto e segurança para o seu lar
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button asChild className="w-full md:w-1/3">
              <Link
                href="https://wa.me/message/BQEMI636X4STE1"
                rel="noreferrer noopener"
                target="_blank"
              >
                Saiba Mais
              </Link>
            </Button>
          </div>
        </div>

        <div className="max-w-[500px]">
          <Image
            alt="Hero"
            height={500}
            src={'/images/home/hero.png'}
            width={500}
          />
        </div>
      </div>
    </section>
  );
};
