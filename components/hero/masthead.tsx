'use client';

import ArrowRight from '../icons/arrowRight';
import Button from '../ui/button';
import Heading from '../ui/heading';
import Paragraph from '../ui/paragraph';

interface HeroVideoProps {
  reelURL: string;
}

const MastHead: React.FC<HeroVideoProps> = ({ reelURL }) => {
  const paragraph = `publishing and graphic design, Lorem ipsum is a placeholder text
  commonly used to demonstrate the visual form of a document or a
  typeface without relying on meaningful content.`;

  return (
    <div
      id='home'
      className='flex min-h-screen w-full min-w-full flex-col items-center justify-center bg-[a2a2a4]'
    >
      <video
        autoPlay
        muted
        playsInline
        className='h-screen w-full bg-black object-cover'
      >
        <source src={reelURL}></source>
      </video>
      {/* Overlay */}
      <div className='absolute left-0 top-0 h-full w-full bg-none'>
        {/* Content */}
        <div className='flex h-full w-full flex-col items-start justify-end px-5 md:pb-[49px] md:pl-24 md:pr-44'>
          <div className='flex flex-col gap-4  md:pr-52'>
            <Heading heading='KEEPTURQUOISESE' textSize='3xl' font='sherika' />
            <Paragraph paragraph={paragraph} textSize='2xl' font='sherika' />
            <div>
              <Button onClick={() => alert()}>Book an appointment</Button>
            </div>
          </div>
          <div className='mt-16 flex w-full flex-col pr-6'>
            <div className='flex flex-col'>
              <div className='flex items-center gap-8 pr-4'>
                <ArrowRight className='w-full' />
                <p className='text-white'>SCROLL</p>
              </div>
              <div className='mt-2 flex'>
                <ArrowRight width={1200} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MastHead;
