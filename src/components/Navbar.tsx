import { Menu } from 'lucide-react';
import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa6';

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
import { Environment } from '@/lib/environment';

import { LogotipoIconBlack } from './Icons';
import { Button, buttonVariants } from './ui/button';

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
    <nav className="sticky top-0 z-40 w-full bg-background shadow-lg">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container px-4 py-2 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <Link className="" href="/" rel="noreferrer noopener">
              <LogotipoIconBlack />
            </Link>
          </NavigationMenuItem>

          <MobileSheet />

          {/* desktop */}
          <header className="hidden md:flex gap-2">
            {routeList.map((route: RouteProps) => (
              <Button asChild key={route.href} variant="outline">
                <Link href={route.href} rel="noreferrer noopener">
                  {route.label}
                </Link>
              </Button>
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

        <SheetContent className="items-center flex flex-col" side={'right'}>
          <SheetHeader>
            <SheetTitle>
              <LogotipoIconBlack />
            </SheetTitle>
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
              className={`border flex items-center gap-2 ${buttonVariants({ variant: 'secondary' })}`}
              href={Environment.INSTAGRAM_URL}
              rel="noreferrer noopener"
              target="_blank"
            >
              <FaInstagram size={20} />
              Instagram
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};
