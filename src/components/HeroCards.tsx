import Image from 'next/image';

import { Card } from '@/components/ui/card';

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonial */}
      <Card className="bg-transparent border-none absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/20 ">
        <Image
          alt="Hero Image 1"
          className="rounded-lg"
          height={5000}
          src="/images/home/hero3.jpg"
          width={5000}
        />
      </Card>

      {/* Team */}
      <Card className="bg-transparent border-none absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/20 ">
        <Image
          alt="Hero Image 2"
          className="rounded-lg"
          height={600}
          src="/images/home/hero2.jpg"
          width={600}
        />
      </Card>

      {/* Pricing */}
      <Card className="bg-transparent border-none absolute top-[250px] left-[50px] w-72  drop-shadow-xl shadow-black/20 ">
        <Image
          alt="Hero Image 4"
          className="rounded-lg"
          height={500}
          src="/images/home/hero4.jpg"
          width={500}
        />
      </Card>

      {/* Service */}
      <Card className="bg-transparent border-none absolute w-[350px] -right-[10px] bottom-[0px]  drop-shadow-xl shadow-black/20 ">
        <Image
          alt="Hero Image 1"
          className="rounded-lg"
          height={500}
          src="/images/home/hero1.jpg"
          width={500}
        />
      </Card>
    </div>
  );
};
