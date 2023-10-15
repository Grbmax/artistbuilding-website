'use client';

import Image from 'next/image';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { Building, ChevronDown } from 'lucide-react';

import { ScrollContext } from '@/lib/scroll-observer';

interface HeroVideoProps {
  reelURL: string;
}

const MastHead: React.FC<HeroVideoProps> = ({ reelURL }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;

  const { current: elementContainer } = refContainer;

  if (elementContainer) {
    progress = Math.min(scrollY / elementContainer.clientHeight, 1);
  }

  useEffect(() => {
    setImageLoaded(true);
  }, []);
  console.log(imageLoaded, 'imageLoaded');

  return (
    <div
      ref={refContainer}
      className='sticky top-0 -z-10 flex min-h-screen flex-col items-center justify-center bg-[a2a2a4]'
      style={{ transform: `translateY(-${progress * 20}vh)` }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className='absolute h-full w-full object-cover'
      >
        <source src={reelURL}></source>
      </video>

      <div
        className={`z-10 flex-grow-0 pt-10 transition-opacity 
        duration-1000 md:pb-10 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Building size={80} strokeWidth={0.75} color='white' />
      </div>
      <div className='flex flex-1 flex-col items-center justify-center p-12 text-center font-bold text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]'>
        <div>
          <h1 className='font-heading mb-6 text-4xl xl:text-5xl'>
            Artistbuilding
          </h1>
          <h2 className='mb-2 text-2xl tracking-tight xl:text-3xl'>
            <span>You imagination,</span> <span>our creation.</span>
          </h2>
        </div>
      </div>
      <div
        className={`z-10 flex-grow-0 pb-20 transition-all 
        duration-1000 md:pb-10 ${
          imageLoaded ? 'opacity-100' : '-translate-y-10 opacity-0'
        }`}
      >
        <ChevronDown size={120} strokeWidth={0.75} color='white' />
      </div>
    </div>
  );
};

export default MastHead;
