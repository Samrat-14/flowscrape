'use client';

import { usePathname } from 'next/navigation';

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from './ui/breadcrumb';
import { MobileSidebar } from './Sidebar';

export default function BreadcrumbHeader() {
  const pathname = usePathname();
  const paths = pathname === '/' ? [''] : pathname.split('/');

  return (
    <div className="flex items-center flex-start">
      <MobileSidebar />
      <Breadcrumb>
        <BreadcrumbList>
          {paths.map((path, index) => (
            <BreadcrumbItem key={index}>
              <BreadcrumbLink className="capitalize" href={`/${path}`}>
                {path === '' ? 'home' : path}
              </BreadcrumbLink>
            </BreadcrumbItem>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
