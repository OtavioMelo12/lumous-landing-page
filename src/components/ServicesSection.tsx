'use client';

import Autoplay from 'embla-carousel-autoplay';
import {
  AudioLinesIcon,
  HousePlugIcon,
  LampDeskIcon,
  LockIcon,
  PopcornIcon,
  WifiIcon,
} from 'lucide-react';
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
    description: `Projetos de automação personalizados permitindo o controle de diversos dispositivos, 
      como <b>cortinas/persianas</b>, <b>ar condicionado</b>, irrigação de <b>jardins</b>, <b>piscinas</b>, 
      <b>TVs</b>, entre outros. Tudo isso de forma integrada e intuitiva.`,
    icon: HousePlugIcon,
    image: '/images/home/automacao.webp',
    title: 'Automações',
  },
  {
    description: `Automatize a iluminação da sua casa. <b>Controle a intensidade</b> e atmosfera de
      cada ambiente com um simples toque ou comando de voz. <b>Economize energia</b> com 
      desligamentos automáticos e personalize sua experiência luminosa para cada momento do seu dia.`,
    icon: LampDeskIcon,
    image: '/images/home/iluminacao.webp',
    title: 'Iluminação',
  },
  {
    description: `Garanta a segurança da sua família com sistema de monitoramento e <b>fechaduras inteligentes</b>.
      Monitore sua casa em tempo real, <b>receba alertas instantâneos</b> e tenha controle 
      total sobre a proteção do seu lar, <b>onde quer que você esteja</b>.`,
    icon: LockIcon,
    image: '/images/home/seguranca.webp',
    title: 'Segurança Eletrônica',
  },
  {
    description: `Garanta conexões <b>rápidas</b>, <b>estáveis</b> e <b>seguras</b> em toda a sua casa 
    com um projeto de redes de <b>alta performance</b>. Projetamos e implementamos infraestruturas
    personalizadas que suportam todas as suas necessidades do ambiente.`,
    icon: WifiIcon,
    image: '/images/home/rede.webp',
    title: 'Redes Wi-fi Premium ',
  },
  {
    description: `Leve música e som de qualidade para <b>todos os locais</b> da sua casa/comércio.
    Projetos de sonorização ambiente personalizados, você pode criar <b>atmosferas sonoras</b> 
    perfeitas para cada ocasião, controlando tudo de maneira fácil e intuitiva.`,
    icon: AudioLinesIcon,
    image: '/images/home/som.webp',
    title: 'Sonorização Ambiente',
  },
  {
    description: `Crie uma verdadeira <b>experiência cinematográfica</b> no conforto da sua casa. 
    Projetos de home cinema <b>(Home Theater, Projetores, Flap TV)</b> proporcionam uma qualidade de <b>som e imagem</b> incomparáveis, 
    fazendo com que você se sinta dentro dos filmes e séries favoritos.`,
    icon: PopcornIcon,
    image: '/images/home/cinema.webp',
    title: 'Home Cinema',
  },
];

export const ServicesSection = () => {
  return (
    <section
      className="p-8 pt-0 flex flex-col gap-2 items-center bg-orange-500"
      id="servicos"
    >
      <h1 className="text-4xl font-bold text-center text-white">
        Nossos Serviços
      </h1>

      <h2 className="text-sm md:text-base text-center max-w-[700px] text-white/90">
        Soluções completas para proporcionar mais conforto, segurança e
        praticidade ao seu dia a dia. Nossos serviços podem tornar sua
        casa/comércio mais inteligente e eficiente.
      </h2>

      <div className="mt-8">
        <Carousel
          className="max-w-[300px] sm:max-w-[500px] md:max-w-[800px] lg:max-w-[1000px] w-full"
          opts={{
            align: 'start',
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
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
                <Card className="h-full rounded-2xl">
                  <Image
                    alt={service.title}
                    className="rounded-2xl w-full h-48 object-cover p-1"
                    height={550}
                    src={service.image}
                    width={550}
                  />

                  <CardHeader>
                    <CardTitle className="flex justify-between items-center text-base font-bold">
                      {service.title}
                      {service.icon && <service.icon className="h-6 w-6" />}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription
                      className="text-black/90 font-normal"
                      dangerouslySetInnerHTML={{
                        __html: service.description,
                      }}
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-white/20" />
          <CarouselNext className="border-white/20" />
        </Carousel>
      </div>
    </section>
  );
};
