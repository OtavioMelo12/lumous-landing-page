import Image from 'next/image';

import { cn } from '@/lib/utils';

interface LogoIconProps {
  className?: string;
}

export const LogoIcon = ({ className }: LogoIconProps) => {
  return (
    <Image
      alt="Logo Lumous Preta"
      className={cn(className)}
      height={50}
      src={'/images/icons/LUMOUS-LOGO_B.svg'}
      width={50}
    />
  );
};

export const WhatsIcon = ({ className }: LogoIconProps) => {
  return (
    <Image
      alt="Logo WhatsApp"
      className={cn(className)}
      height={15}
      src={'/images/icons/whats.svg'}
      width={15}
    />
  );
};
