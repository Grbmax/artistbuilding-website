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
      <main id='scroll-container' className='overflow-hidden'>
        <article>{children}</article>
      </main>
    </>
  );
}
