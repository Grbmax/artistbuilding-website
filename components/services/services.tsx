'use client';

import Heading from '../ui/heading';
import Paragraph from '../ui/paragraph';

const paragraph = `publishing and graphic design, Lorem ipsum is a  placeholder text commonly used to demonstrate the visual form of a document or a typeface  without relying on meaningful content.`;

const Services = () => {
  return (
    <section className='flex gap-8 bg-black py-16 text-3xl text-white md:text-4xl'>
      <div className='flex w-full flex-col gap-4 pl-[60px]'>
        <Heading
          heading='SERVICES'
          textSize='3xl'
          className='europa text-8xl'
        />
        <Paragraph
          paragraph={paragraph}
          textSize='lg'
          font='sherika'
          className='text-justify'
        />
      </div>
      <div className='flex w-full flex-col'>
        <div>
          <p>This</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
