import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  return (
    <section className="">
      <div className="container flex py-8 md:py-14 gap-10 justify-around items-center flex-wrap">
        <div className="flex-1 text-center lg:text-start flex flex-col gap-6 max-w-[500px]">
          <h1 className="inline text-4xl md:text-5xl font-bold">
            Transforme sua casa em um{' '}
            <span className="whitespace-nowrap inline bg-gradient-to-r from-[#5EEAD4] via-[#2DD4BF] to-[#0D9488] text-transparent bg-clip-text">
              lar mágico
            </span>{' '}
            com a{' '}
            <span className="inline bg-gradient-to-r from-[#fdba74]  to-[#f97316] text-transparent bg-clip-text">
              Lumous
            </span>{' '}
          </h1>{' '}
          <p className="text-lg md:text-xl text-white md:w-10/12 mx-auto lg:mx-0">
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

        <div className="max-w-[300px] md:max-w-[500px]">
          <Image
            alt="Hero"
            height={1000}
            src={'/images/home/hero-bg.png'}
            width={1000}
          />
        </div>
      </div>
    </section>
  );
};
