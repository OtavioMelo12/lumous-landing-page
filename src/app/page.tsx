import Link from 'next/link';

import { HeroCards } from '@/components/HeroCards';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main>
      <section className="container grid lg:grid-cols-2 place-items-center py-8 md:py-12 gap-10">
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
          <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
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

        {/* Hero cards sections */}
        <div className="z-10">
          <HeroCards />
        </div>
      </section>
    </main>
  );
}
