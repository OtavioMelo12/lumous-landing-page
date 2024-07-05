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
      src={'/images/icons/LUMOUS-LOGO_P.svg'}
      width={50}
    />
  );
};
