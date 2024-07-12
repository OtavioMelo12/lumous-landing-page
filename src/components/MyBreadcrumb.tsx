'use client';

import { Fragment } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

export const MyBreadcrumb = () => {
  const pathname = usePathname();
  const paths = pathname.split('/').filter(path => path !== '');

  const getFullPath = (endPath: string) => {
    return paths.slice(0, paths.indexOf(endPath) + 1).join('/');
  };

  return (
    <div className="p-8 pb-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />

          {paths.map((path, index) => {
            const isLast = index === paths.length - 1;

            return (
              <Fragment key={path}>
                <BreadcrumbItem>
                  {isLast && (
                    <BreadcrumbPage className="max-w-44 md:max-w-lg overflow-hidden text-nowrap overflow-ellipsis">
                      {path}
                    </BreadcrumbPage>
                  )}

                  {!isLast && (
                    <BreadcrumbLink asChild>
                      <Link href={`/${getFullPath(path)}`}>{path}</Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>

                {!isLast && <BreadcrumbSeparator />}
              </Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};
