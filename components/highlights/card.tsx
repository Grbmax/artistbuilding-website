'use client';
import { useRef, useContext } from 'react';

import { cn } from '@/lib/utils';
import { HighlightsData } from './highlights';
import ThreePlusGrid from '../ui/three-plus-grid';
import TwoPlusGrid from '../ui/two-plus-grid';
import { ScrollContext } from '@/lib/scroll-observer';
import Overlay from './overlay';

const HighlightCard: React.FC<HighlightsData> = ({
  brand,
  brandHex,
  heading,
  paragraph,
  video,
  className,
  isLast,
}) => {
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;

  const { current: elementContainer } = refContainer;

  if (elementContainer) {
    progress = Math.min(scrollY / elementContainer.clientHeight, 1);
  }
  return (
    <div
      id='test'
      ref={refContainer}
      style={{ transform: `translateY(-${progress * 5}vh)` }}
      className={cn(
        `sticky top-0 -z-10 flex min-h-screen w-full flex-col border-b bg-black`,
        className
      )}
    >
      <Overlay />
      <div className='flex min-h-screen w-full flex-col  text-white md:flex md:flex-row md:justify-evenly'>
        <div className='flex w-full flex-1 flex-col items-center justify-center space-y-2 px-6 md:m-0 md:ml-14 md:min-h-screen md:items-center md:px-0'>
          <video
            autoPlay
            loop
            muted
            playsInline
            className='flex min-h-fit w-full items-center justify-center rounded-xl border border-opacity-10 md:min-h-max'
          >
            <source src={video}></source>
          </video>
          <h1 className={cn(`text-x z-10 flex w-full justify-start`, brandHex)}>
            {brand}
          </h1>
        </div>
        <div className='z-10 m-10 flex w-fit flex-1 flex-col items-center justify-center space-y-4 text-center md:m-0 md:mr-14 md:min-h-screen md:items-center md:text-start'>
          <h1 className='flex w-full flex-col text-6xl drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] md:-ml-20 md:justify-start xl:text-8xl'>
            {heading}
          </h1>
          <p className='flex w-full md:ml-4 md:text-xl lg:text-2xl'>
            {paragraph}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HighlightCard;
