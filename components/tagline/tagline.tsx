'use client';

import { useRef, useContext } from "react";
import { ScrollContext } from "@/lib/scroll-observer";

const Tagline = () => {
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;

  const { current: elementContainer } = refContainer;

  if (elementContainer) {
    progress = Math.min(scrollY / elementContainer.clientHeight, 1);
  }

  return (
    <section 
    className='sticky top-0 -z-10 flex flex-col bg-white py-16 text-3xl text-black md:text-4xl'
    style={{ transform: `translateY(-${progress * 10}vh)` }}
    >
      <div className='container mx-auto px-11'>
        <p className='mx-auto max-w-5xl text-4xl leading-tight tracking-tight lg:text-4xl'>
          <strong className='primary-text'>
            Guided by boundless creativity and technical precision,{' '}
          </strong>
          we specialize in turning imaginative concepts into breathtaking visual
          marvels, frame by frame, at Artistbuilding.
        </p>
      </div>
    </section>
  );
};

export default Tagline;
