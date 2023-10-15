'use client';

import { Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const leftRoutes = [
    {
      href: '/',
      label: 'The ArtistBuilding',
      active: pathname === '/',
    },
  ];
  const routes = [
    {
      href: '/about',
      label: 'About',
      active: pathname === '/about',
    },
    {
      href: '/contact',
      label: 'Contact',
      active: pathname === '/contact',
    },
  ];
  return (
    <nav
      className={`${
        leftRoutes[0].active ? 'absolute' : 'border-b border-transparent'
      } flex h-16 w-full items-center px-8 text-2xl`}
    >
      <div className=' text-bold flex w-full justify-between space-x-2 text-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] md:space-x-4 lg:space-x-6'>
        <div>
          {leftRoutes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              rel='prefetch'
              className={`transition-colors ${
                route.active ? 'primary-text' : 'secondary-text'
              }`}
            >
              {route.label}
            </Link>
          ))}
        </div>
        <div className='flex md:hidden'>
          <Menu />
        </div>
        <div className='hidden space-x-2 md:flex md:space-x-4 lg:space-x-6'>
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              rel='prefetch'
              className={`transition-colors ${
                route.active ? 'primary-text' : 'secondary-text'
              }`}
            >
              {route.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
