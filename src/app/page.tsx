'use client';

import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      {/* <Card className="mt-12 mb-5 w-11/12 max-w-md transform rounded-2xl  ml-auto mr-10  px-4 py-2 shadow-lg duration-300 hover:scale-105 md:px-8 md:py-4">
        <div className="-mt-16 flex justify-center md:justify-end">
          <Image
            alt="Testimonial avatar"
            className="h-20 w-20 rounded-full border-8 border-white border-opacity-40 object-cover"
            height={80}
            src="https://github.com/OtavioMelo12.png"
            width={80}
          />
        </div>
        <CardTitle className="mt-2 text-2xl md:mt-0 md:text-3xl">
          Otávio Melo
        </CardTitle>
        <span className="text-sm text-orange-300 dark:text-orange-300">
          Engenheiro de Controle e Automação
        </span>
        <CardDescription className="text-gl mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          quasi, voluptatem labore culpa illum esse!
        </CardDescription>
        <br />
      </Card> */}
    </main>
  );
}
