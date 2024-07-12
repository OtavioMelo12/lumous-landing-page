import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa6';

import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  return (
    <section
      style={{
        backgroundImage: "url('/images/home/wave.svg')",
        backgroundPosition: 'center bottom',
        backgroundSize: 'cover',
      }}
    >
      <div className="container flex py-8 md:pb-32 md:pt-0 gap-10 justify-around items-center flex-wrap">
        <div className="flex-1 text-center lg:text-start flex flex-col gap-6 max-w-[500px]">
          <h1 className="inline text-4xl md:text-5xl font-bold text-white">
            Transforme sua casa em um{' '}
            <span className="whitespace-nowrap inline text-teal-400">
              lar mágico
            </span>{' '}
            com a <span className="inline text-orange-400">Lumous</span>{' '}
          </h1>{' '}
          <p className="text-lg md:text-xl text-white md:w-10/12 mx-auto lg:mx-0">
            Automação residencial trazendo conforto e segurança para o seu lar
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button
              asChild
              className="w-full md:w-1/3 bg-teal-500 hover:bg-teal-600 font-medium text-lg"
            >
              <Link
                className="flex gap-2 items-center"
                href="https://wa.me/message/BQEMI636X4STE1"
                rel="noreferrer noopener"
                target="_blank"
              >
                Saiba Mais
                <FaWhatsapp />
              </Link>
            </Button>
          </div>
        </div>

        <div className="max-w-[300px] md:max-w-[500px]">
          <Image
            alt="Hero"
            height={500}
            src={'/images/home/hero-bg.png'}
            width={500}
          />
        </div>
      </div>
    </section>
  );
};
