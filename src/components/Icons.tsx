import Image from 'next/image';

import { cn } from '@/lib/utils';

interface LogoIconProps {
  className?: string;
}

export const LogoIconWhite = ({ className }: LogoIconProps) => {
  return (
    <Image
      alt="Logo Lumous Branca"
      className={cn(className)}
      height={50}
      src={'/images/icons/LUMOUS-LOGO_B.svg'}
      width={50}
    />
  );
};

export const LogoIconBlack = ({ className }: LogoIconProps) => {
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

export const LogoIconOrange = ({ className }: LogoIconProps) => {
  return (
    <Image
      alt="Logo Lumous Laranja"
      className={cn(className)}
      height={50}
      src={'/images/icons/LUMOUS_LOGO_L.svg'}
      width={50}
    />
  );
};

export const LogotipoIconBlack = ({ className }: LogoIconProps) => {
  return (
    <Image
      alt="Logo Lumous Icone Preto"
      className={cn(className, '')}
      height={80}
      src={'/images/icons/LOGOTIPO-HORI-P.svg'}
      width={170}
    />
  );
};

export const LogotipoVertIconOrange = ({ className }: LogoIconProps) => {
  return (
    <Image
      alt="Logo Lumous Laranja"
      className={cn(className, '')}
      height={150}
      src={'/images/icons/LOGOTIPO-VERT-L.svg'}
      width={150}
    />
  );
};
