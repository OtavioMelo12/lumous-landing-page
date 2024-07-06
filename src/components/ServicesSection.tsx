'use client';

import Autoplay from 'embla-carousel-autoplay';
import { AudioLinesIcon, LampDeskIcon, LockIcon, WifiIcon } from 'lucide-react';
import Image from 'next/image';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';

const services = [
  {
    description:
      'Automatize a iluminação da susa casa. Controle a intensidade e atmosfera de cada ambiente com um simples toque ou comando de voz. Economize energia com desligamentos automáticos e personalize sua experiência luminosa para cada momento do seu dia.',
    icon: LampDeskIcon,
    image: '/images/home/iluminacao.jpg',
    title: 'Iluminação',
  },
  {
    description:
      'Garanta a segurança da sua família com soluções de segurança eletrônica de última geração. Monitore sua casa em tempo real, receba alertas instantâneos e tenha controle total sobre a proteção do seu lar, onde quer que você esteja.',
    icon: LockIcon,
    image: '/images/home/seguranca.jpg',
    title: 'Segurança Eletrônica',
  },
  {
    description: `Garanta conexões rápidas, estáveis e seguras em toda a sua casa 
    com um projeto de redes de alta performance. Projetamos e implementamos infraestruturas
    personalizadas que suportam todas as suas necessidades do ambiente.`,
    icon: WifiIcon,
    image: '/images/home/rede.avif',
    title: 'Redes Wi-fi Premium ',
  },
  {
    description: `Leve música e qualidade de som para todos os locais da sua casa/comércio.
    Projetos de sonorização ambiente personalizados, você pode criar atmosferas sonoras 
    perfeitas para cada ocasião, controlando tudo de maneira fácil e intuitiva.`,
    icon: AudioLinesIcon,
    image: '/images/home/som.jpg',
    title: 'Sonorização Ambiente',
  },
  {
    description: `Crie uma verdadeira experiência cinematográfica no conforto da sua casa. 
    Projetos de home cinema proporcionam uma qualidade de som e imagem incomparáveis, 
    fazendo com que você se sinta dentro dos filmes e séries favoritos.`,
    icon: AudioLinesIcon,
    image: '/images/home/cinema.jpg',
    title: 'Home Cinema',
  },
];

export const ServicesSection = () => {
  return (
    <section className="p-8 flex flex-col gap-2 items-center" id="servicos">
      <h1 className="text-4xl font-bold text-center">Nossos Serviços</h1>

      <h2 className="text-sm text-center max-w-[700px]">
        Soluções completas para proporcionar mais conforto, segurança e
        praticidade ao seu dia a dia. Nossos serviços podem tornar sua
        casa/comércio mais inteligente e eficiente.
      </h2>

      <div className="mt-8">
        <Carousel
          className="max-w-[300px] sm:max-w-[500px] md:max-w-[1000px] w-full"
          opts={{
            align: 'center',
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
              playOnInit: true,
              stopOnFocusIn: false,
              stopOnInteraction: false,
            }),
          ]}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {services.map(service => (
              <CarouselItem
                className="pl-2 md:basis-1/2 lg:basis-1/3 md:pl-4"
                key={service.title}
              >
                <Card className="h-full">
                  <Image
                    alt={service.title}
                    className="rounded-lg w-full h-48 object-cover"
                    height={750}
                    src={service.image}
                    width={750}
                  />

                  <CardHeader>
                    <CardTitle className="flex justify-between items-center text-base font-bold">
                      {service.title}
                      {service.icon && <service.icon className="h-6 w-6" />}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{service.description}</CardDescription>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};
