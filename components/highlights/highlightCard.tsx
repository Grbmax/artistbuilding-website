'use client';
import React from 'react';

interface HighlightCardProps {
  brand: string;
  brandHex: string;
  videoUrl: string;
  heading: string;
  paragraph: string;
  isRight?: boolean;
}

const HighlightCard: React.FC<HighlightCardProps> = ({
  brand,
  brandHex,
  videoUrl,
  heading,
  paragraph,
  isRight,
}) => {
  return (
    // ? Justify start or center
    <div className='w-fit my-4 flex min-h-screen flex-col items-center justify-center space-y-4 pb-4 text-center md:flex-row md:py-0 md:pb-0 md:text-start'>
      <div className='flex w-[75%] flex-col space-y-2 xl:w-1/2'>
        <video
          autoPlay
          playsInline
          src={videoUrl}
          className='rounded-xl border object-cover'
        />
        <h1 className={`md:text-md text-sm lg:text-xl ${brandHex}`}>{brand}</h1>
      </div>
      <div className='flex h-full z-10 max-w-[600px] flex-col items-center space-y-2 px-2 text-center md:h-[440px] md:items-start md:justify-end md:text-start'>
        <h1
          className={`text-4xl ${brandHex} drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] md:-ml-24 md:text-6xl`}
        >
          {heading}
        </h1>
        <p className='drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] md:text-2xl'>
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default HighlightCard;
