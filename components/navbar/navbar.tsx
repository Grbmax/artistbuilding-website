'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ColumnLogo from '../icons/column-logo';
import ArtistBuilding from '../icons/artistbuilding';

const Navbar = () => {
  const pathname = usePathname();

  const routes = [
    {
      href: '/',
      label: 'Home',
      active: pathname === '/',
    },
    {
      href: '/whatwedo',
      label: 'What We Do',
      active: pathname === '/whatwedo',
    },
    {
      href: '/projects',
      label: 'Projects',
      active: pathname === '/projects',
    },
    {
      href: '/services',
      label: 'Services',
      active: pathname === '/services',
    },
  ];

  return (
    <nav
      className={`text-bold z-50 absolute flex items-center justify-between h-fit w-full space-x-2 bg-transparent px-8 py-4 text-2xl md:space-x-4 lg:space-x-6`}
    >
      <div className='flex flex-col items-center'>
        <ArtistBuilding />
        <ColumnLogo />
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
    </nav>
  );
};

export default Navbar;
