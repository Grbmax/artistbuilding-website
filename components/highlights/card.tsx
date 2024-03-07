'use client';

import { cn } from '@/lib/utils';
import { HighlightsData } from './highlights';

const HighlightCard: React.FC<HighlightsData> = ({
  brand,
  brandHex,
  heading,
  paragraph,
  video,
  className,
  start,
}) => {
  const parentStyles = cn(
    `relative flex h-max w-max flex-col bg-black`,
    {
      'self-start': start,
      'self-end': !start,
    },
    className
  );

  return (
    <div id='highlights' className={parentStyles}>
      <div className='flex h-max w-max flex-col overflow-visible text-white md:flex md:flex-row md:justify-evenly'>
        <div className='flex flex-1 flex-col items-start justify-center space-y-2 px-6 md:m-0 md:h-max md:px-0'>
          <video
            autoPlay
            loop
            muted
            playsInline
            className='flex min-h-fit w-full max-w-[35rem] items-center justify-center rounded-xl border border-opacity-10 hover:border-2 hover:border-purple-500 md:min-h-max'
          >
            <source src={video}></source>
          </video>
          <h1
            className={cn(
              `z-10 flex w-full max-w-[35rem] justify-start text-3xl`,
              brandHex
            )}
          >
            {brand}
          </h1>
        </div>
        <div className='absolute -right-[38rem] top-12 flex h-[256px] max-h-[256px] w-[40rem] max-w-[40rem] flex-col items-start justify-end'>
          <h1 className='text-6xl drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] xl:text-8xl'>
            {heading}
          </h1>
          <p className='text-xl lg:text-2xl'>{paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default HighlightCard;

{
  /* <div className='absolute top-0 right-0 z-10 m-5 flex w-fit flex-1 flex-col items-center justify-center space-y-4 text-center md:m-0 md:mr-14 md:min-h-screen md:items-center md:text-start'>
          <h1 className='flex w-full flex-col text-6xl drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] md:-ml-20 md:justify-start xl:text-8xl'>
            {heading}
          </h1>
          <p className='flex w-full md:ml-4 md:text-xl lg:text-2xl'>
            {paragraph}
          </p>
        </div> */
}
