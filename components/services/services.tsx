import Image from 'next/image';
import Heading from '../ui/heading';
import Paragraph from '../ui/paragraph';
import bgImage from '@/public/website-assets/5.png';
import ServicesCard from './services-card';

const paragraph = `publishing and graphic design, Lorem ipsum is a  placeholder text commonly used to demonstrate the visual form of a document or a typeface  without relying on meaningful content.`;
const services = `We have more than four years of experience working with brands like Gucci, Northface, and PrettyBird.`;

const Services = () => {
  return (
    <section
      id='services'
      className='relative flex-col gap-16 overflow-visible bg-black py-2 text-3xl text-white md:flex-row md:py-16 md:text-4xl'
      style={{ minHeight: '85vh' }}
    >
      <Image
        src={bgImage}
        width={600}
        height={500}
        quality={100}
        className='absolute right-0 top-0 -z-10'
        alt='bg-image'
      />
      <Image
        src={bgImage}
        width={600}
        height={500}
        quality={100}
        className='absolute bottom-0 left-0 -z-10 -rotate-180'
        alt='bg-image'
      />
      <div className='relative z-10 flex w-full flex-col gap-4 px-6 md:px-0 md:pl-[60px]'>
        <Heading
          heading='SERVICES'
          textSize='3xl'
          className='europa text-4xl md:text-8xl'
        />
        <Paragraph
          paragraph={paragraph}
          textSize='lg'
          font='sherika'
          className='text-left text-sm md:text-lg'
        />
      </div>
      <div className='z-10 flex h-min w-full px-6 pt-3 md:px-0 md:pt-0'>
        <div className='flex w-full gap-4 md:gap-24'>
          <div className='flex w-full flex-col gap-12'>
            <ServicesCard services={services} heading='Creative' />
            <ServicesCard services={services} heading='Design' />
          </div>
          <div className='flex w-full flex-col gap-12'>
            <ServicesCard services={services} heading='VFX' />
            <ServicesCard services={services} heading='CG' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
