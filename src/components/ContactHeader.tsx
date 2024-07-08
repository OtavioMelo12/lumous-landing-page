import { InstagramIcon } from 'lucide-react';
import Link from 'next/link';

import { WhatsIcon } from './Icons';

export const ContactHeader = () => {
  return (
    <div className="bg-teal-500 text-white  p-1">
      <div className="container flex items-center justify-between">
        <div className="flex gap-1 items-center">
          <WhatsIcon className="inline" />

          <Link
            className="text-sm hover:underline"
            href="https://wa.me/message/BQEMI636X4STE1"
            rel="noreferrer noopener"
            target="_blank"
          >
            (35) 9 8466-3756
          </Link>
        </div>

        <div>
          <Link
            className="flex items-center gap-1 hover:underline text-sm"
            href="https://www.instagram.com/lumousautomacao/"
            rel="noreferrer noopener"
            target="_blank"
          >
            <InstagramIcon className="h-4 w-4" />
            @lumousautomacao
          </Link>
        </div>
      </div>
    </div>
  );
};
