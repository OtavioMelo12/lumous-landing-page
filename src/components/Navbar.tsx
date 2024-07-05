import { Menu } from 'lucide-react';
import Link from 'next/link';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { LogoIcon } from './Icons';
import { buttonVariants } from './ui/button';

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '#sobre',
    label: 'Sobre',
  },
  {
    href: '#servicos',
    label: 'Serviços',
  },
  {
    href: '#contato',
    label: 'Contato',
  },
];

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-40 w-full bg-orange-500 text-white ">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container px-4 py-2 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <Link
              className="ml-2 font-bold text-xl flex items-center gap-1"
              href="/"
              rel="noreferrer noopener"
            >
              <LogoIcon />
              Lumous
            </Link>
          </NavigationMenuItem>

          <MobileSheet />

          {/* desktop */}
          <header className="hidden md:flex gap-2">
            {routeList.map((route: RouteProps, i) => (
              <Link
                className={`text-[17px] ${buttonVariants({
                  variant: 'ghost',
                })}`}
                href={route.href}
                key={i}
                rel="noreferrer noopener"
              >
                {route.label}
              </Link>
            ))}
          </header>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

const MobileSheet = () => {
  return (
    <div className="flex md:hidden">
      <Sheet>
        <SheetTrigger className="px-2">
          <Menu className="flex md:hidden h-5 w-5" />
        </SheetTrigger>

        <SheetContent side={'right'}>
          <SheetHeader>
            <SheetTitle className="font-bold text-xl">Lumous</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col justify-center items-center gap-2 mt-4">
            {routeList.map(({ href, label }: RouteProps) => (
              <SheetClose asChild key={label}>
                <a
                  className={buttonVariants({ variant: 'ghost' })}
                  href={href}
                  rel="noreferrer noopener"
                >
                  {label}
                </a>
              </SheetClose>
            ))}

            <Link
              className={`border ${buttonVariants({ variant: 'secondary' })}`}
              href="https://www.instagram.com/lumousautomacao/"
              rel="noreferrer noopener"
              target="_blank"
            >
              Instagram
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};
