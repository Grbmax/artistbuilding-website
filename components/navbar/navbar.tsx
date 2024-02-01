'use client';

import { ScrollContext } from '@/lib/scroll-observer';
import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import SplashScreen from '../splash-screen/splashScreen';
import Image from 'next/image';
import logoImage from '@/public/website-assets/logo-2.png';

const Navbar = () => {
  const { activeSection } = useContext(ScrollContext);
  const [loading, setLoading] = useState(true);
  // const loading = true;

  const routes = [
    {
      href: '#home',
      label: 'Home',
      active: activeSection === 'home',
    },
    // {
    //   href: '#what-we-do',
    //   label: 'What We Do',
    //   active: activeSection === 'what-we-do',
    // },
    {
      href: '#highlights',
      label: 'Projects',
      active: activeSection.startsWith('highlight'),
    },
    {
      href: '#services',
      label: 'Services',
      active: activeSection === 'services',
    },
    {
      href: '#about-us',
      label: 'About Us',
      active: activeSection === 'about-us',
    },
    {
      href: '#clients',
      label: 'Clientele',
      active: activeSection === 'clients',
    },
    {
      href: '#contact',
      label: 'Contact',
      active: activeSection === 'contact',
    },
  ];

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Set loading false after 5 seconds
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  // Disable scrolling when loading
  useEffect(() => {
    const scrollContainer = document.getElementById(
      'scroll-container'
    ) as HTMLElement;
    if (!scrollContainer) return;
    if (loading) {
      scrollContainer.style.overflow = 'hidden';
    } else {
      scrollContainer.style.overflow = 'auto';
    }
  }, [loading]);

  return loading ? (
    <SplashScreen />
  ) : (
    <nav
      className={`text-bold absolute z-10 h-fit w-full items-center justify-between space-x-2 bg-transparent px-8 py-4 text-2xl md:flex md:space-x-4 lg:space-x-6`}
    >
      <div className='flex flex-col items-center gap-[10px]'>
        <Image
          src={logoImage}
          alt='ArtistBuilding Logo'
          width={145}
          height={145}
        />
      </div>
      <div className='hidden space-x-2 md:flex md:space-x-4 lg:space-x-6'>
        {routes.map((route) =>
          route.href.startsWith('/') ? (
            <Link
              key={route.href}
              href={route.href}
              passHref
              className={`${route.active ? 'primary-text text-base' : 'secondary-text text-base'}`}
            >
              {route.label}
            </Link>
          ) : (
            <Link
              key={route.href}
              href={route.href}
              passHref
              onClick={(e) => handleClick(e, route.href)}
              className={`${route.active ? 'primary-text text-base' : 'secondary-text text-base'}`}
            >
              {route.label}
            </Link>
          )
        )}
      </div>
    </nav>
  );
};

export default Navbar;
