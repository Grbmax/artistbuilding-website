import Image from 'next/image';
import bgImage from '@/public/website-assets/1.png';
import Heading from '../ui/heading';
import Paragraph from '../ui/paragraph';

const paragraph = `publishing and graphic design, Lorem ipsum is a  placeholder text commonly used to demonstrate the visual form of a document or a typeface  without relying on meaningful content.`;

const AboutUs = () => {
  return (
    <section
      id='about-us'
      className='relative flex-col gap-16 bg-black py-6 text-3xl text-white md:flex md:py-16 md:text-4xl'
    >
      <Image
        src={bgImage}
        width={600}
        height={500}
        quality={100}
        className='absolute bottom-0 right-0 z-0'
        alt='bg-image'
      />
      <div className='z-10 flex w-full flex-col items-start justify-between px-6 md:flex-row md:px-36'>
        <div className='flex w-full md:w-3/5'>
          <div className='flex h-32 w-full flex-col gap-3'>
            <Heading
              heading={'ABOUT'}
              textSize='xl'
              className='europa text-4xl font-semibold md:text-8xl'
            />
            <Paragraph
              paragraph={paragraph}
              textSize='xs'
              font='sherika'
              className='text-left text-sm md:text-xl'
            />
          </div>
        </div>
        <div className='relative flex h-96 w-full md:w-1/3'>
          <Image
            src='/website-assets/8.png'
            fill
            className='object-fit'
            quality={100}
            alt='about-image'
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
