import { Menu, RssIcon } from 'lucide-react';
import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa6';

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
import { Button } from './ui/button';

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
    <nav className="sticky top-0 z-40 w-full bg-white shadow-lg ">
      <div className="flex px-8 py-2 w-full justify-between items-center container ">
        <Link href="/" rel="noreferrer noopener">
          <LogotipoIconBlack />
        </Link>

        <MobileSheet />

        {/* desktop */}
        <div className="hidden md:flex">
          {routeList.map((route: RouteProps) => (
            <Button
              asChild
              className="text-foreground"
              key={route.href}
              variant="link"
            >
              <Link href={'/' + route.href} rel="noreferrer noopener">
                {route.label}
              </Link>
            </Button>
          ))}
        </div>

        <Button asChild className="hidden md:flex" size={'sm'}>
          <Link href={'/blog'} rel="noreferrer noopener">
            Blog
            <RssIcon className="size-4 ml-2" />
          </Link>
        </Button>
      </div>
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

          <nav className="flex flex-col justify-between w-full h-full items-center gap-2 mt-4">
            <div className="flex flex-col gap-1">
              {routeList.map(({ href, label }: RouteProps) => (
                <SheetClose asChild key={label}>
                  <Button asChild variant="ghost">
                    <Link href={href} rel="noreferrer noopener">
                      {label}
                    </Link>
                  </Button>
                </SheetClose>
              ))}

              <SheetClose asChild>
                <Button asChild variant="outline">
                  <Link
                    className="flex items-center"
                    href={'/blog'}
                    rel="noreferrer noopener"
                  >
                    Blog
                    <RssIcon className="size-4 ml-2" />
                  </Link>
                </Button>
              </SheetClose>
            </div>

            <SheetClose asChild>
              <Button asChild variant="outline">
                <Link
                  className="flex items-center gap-2"
                  href={Environment.INSTAGRAM_URL}
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <FaInstagram size={20} />
                  Instagram
                </Link>
              </Button>
            </SheetClose>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};
