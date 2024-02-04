import Overlay from '@/components/highlights/overlay';
import ProjectsNav from '@/components/navbar/projects-navbar';
import React from 'react';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ProjectsNav />
      <Overlay />
      <main id='scroll-container' className='z-10 overflow-hidden'>
        <article>{children}</article>
      </main>
    </>
  );
}
