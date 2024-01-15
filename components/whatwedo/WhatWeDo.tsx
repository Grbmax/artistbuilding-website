import Image from 'next/image';
import Heading from '../ui/heading';
import Paragraph from '../ui/paragraph';

const paragraph = `publishing and graphic design, Lorem ipsum is a  placeholder text commonly used to demonstrate the visual form of a document or a typeface  without relying on meaningful content.`;
const titles = ['CONCEPT ART', 'COMPOSITING', 'ROTO', 'MATCHMOVE', '3D'];

const WhatWeDo = () => {
  return (
    <section className='min-h-screen bg-black text-white sm:p-1 md:p-0'>
      <div className='grid h-full w-full items-center md:grid-cols-3'>
        <div className='flex h-full w-full items-center border-b-2 border-[#A67FB9] py-4 md:col-span-1 md:border-b-0 md:border-r-2 md:px-14 md:py-0'>
          <div className='flex h-fit w-full flex-col items-center justify-center gap-10 border-[#A67FB9] md:border'>
            <div className='relative h-[177px] w-full'>
              <Image src={`/whatwedo.jpg`} fill alt='alt' />
            </div>
            <div className='relative h-[177px]  w-full '>
              <Image src={`/whatwedo.jpg`} fill alt='alt' />
            </div>
          </div>
        </div>
        <div className='grid h-full w-full py-4 md:col-span-2 md:grid-cols-3 md:py-0 md:pl-3'>
          <div className='flex h-full w-full flex-col items-center justify-center gap-1 pr-0 md:col-span-1  md:items-start md:gap-[3rem] md:pr-3'>
            <div className='flex h-44 w-full flex-col items-center justify-start md:items-start'>
              <Heading heading='What We Do' textSize='4xl' font='sherika' />
              <Paragraph paragraph={paragraph} textSize='lg' font='sherika' />
            </div>
            <div className='flex h-44 flex-col justify-start gap-5'>
              {titles.map((title) => (
                <Heading
                  key={title}
                  heading={title}
                  textSize='2xl'
                  font='akira'
                />
              ))}
            </div>
          </div>
          <div className='flex h-full w-full min-w-max flex-col py-44 justify-center gap-3 md:col-span-2 md:pr-12'>
            <div className='flex h-max w-full items-center justify-between gap-2'>
              <div className='relative h-[195px] w-[60%]'>
                <Image src={`/portfolio1.jpg`} fill alt='alt' />
              </div>
              <Heading heading='PORT' textSize='5xl' font='akira' />
              <div className='relative h-[195px] w-44'>
                <Image src={`/portfolio2.jpg`} fill alt='alt' />
              </div>
            </div>
            <div className='flex h-max items-center justify-between'>
              <div className='relative h-[195px] w-44'>
                <Image src={`/portfolio3.jpg`} fill alt='alt' />
              </div>
              <div className='relative h-[195px] w-[60%]'>
                <Image src={`/portfolio4.jpg`} fill alt='alt' />
              </div>
            </div>
            <div className='flex h-max items-center justify-between gap-2'>
              <div className='relative h-[195px] w-44'>
                <Image src={`/portfolio5.jpg`} fill alt='alt' />
              </div>
              <Heading heading='FOLIO' textSize='5xl' font='akira' />
              <div className='relative h-[195px] w-[60%]'>
                <Image src={`/portfolio4.jpg`} fill alt='alt' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
