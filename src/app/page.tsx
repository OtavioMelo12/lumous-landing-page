import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';

export default function Home() {
  return (
    <main className="bg-gradient-to-b md:bg-gradient-to-r from-[#0D0D0D] to-[#393d40]">
      <HeroSection />
      <ServicesSection />
    </main>
  );
}
