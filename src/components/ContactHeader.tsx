import { InstagramIcon } from 'lucide-react';
import Link from 'next/link';

import { WhatsIcon } from './Icons';

export const ContactHeader = () => {
  return (
    <div className="bg-teal-500 text-white  p-1">
      <div className="container flex items-center justify-between gap-2 ">
        <Link
          className="flex items-center gap-1 text-xs md:text-sm hover:underline whitespace-nowrap"
          href="https://wa.me/message/BQEMI636X4STE1"
          rel="noreferrer noopener"
          target="_blank"
        >
          <WhatsIcon className="inline" />
          (35) 9 8466-3756
        </Link>
        <Link
          className="flex items-center gap-1 hover:underline text-xs md:text-sm whitespace-nowrap"
          href="https://www.instagram.com/lumousautomacao/"
          rel="noreferrer noopener"
          target="_blank"
        >
          <InstagramIcon className="h-4 w-4" />
          @lumousautomacao
        </Link>
      </div>
    </div>
  );
};
