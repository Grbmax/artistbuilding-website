import Image from 'next/image';
import bgImage from '@/public/website-assets/2.png';
import Heading from '../ui/heading';
import Paragraph from '../ui/paragraph';

const paragraph = ``;

const Clientele = () => {
  return (
    <section
      id='clients'
      className='relative flex-col gap-16 bg-black py-6 text-3xl text-white md:flex md:py-16 md:text-4xl'
    >
      <Image
        src={bgImage}
        width={600}
        height={500}
        quality={100}
        className='absolute bottom-0 left-0 z-0'
        alt='bg-image'
      />
      <div className='z-10 flex h-full w-full flex-col items-start justify-between px-6 md:flex-row md:items-center md:px-36'>
        <div className='flex h-min w-full md:w-3/5'>
          <div className='flex h-full w-full flex-col gap-3'>
            <Heading
              heading={'OUR CLIENTS'}
              textSize='xl'
              className='europa text-4xl font-semibold md:text-4xl'
            />
              <Paragraph
                paragraph={paragraph}
                textSize='xs'
                font='sherika'
                className='text-left text-sm md:text-xl'
              />  
          </div>
        </div>
        <div className='flex h-full w-full flex-col items-end justify-between pt-[7.5rem]'>
          <div className='flex h-[20px] w-full items-center justify-between'>
            <div className='relative flex h-full w-[70px]'>
              <Image
                src='/client-logos/1.png'
                fill
                className='object-fit'
                quality={100}
                alt='logo'
              />
            </div>
            <div className='relative flex h-full w-[70px]'>
              <Image
                src='/client-logos/2.png'
                fill
                className='object-fit'
                quality={100}
                alt='logo'
              />
            </div>
            <div className='relative flex h-full w-[70px]'>
              <Image
                src='/client-logos/1.png'
                fill
                className='object-fit'
                quality={100}
                alt='logo'
              />
            </div>
          </div>
          <div className='flex h-[25px] w-full items-center justify-between'>
            <div className='relative flex h-full w-[70px]'>
              <Image
                src='/client-logos/4.png'
                fill
                className='object-fit'
                quality={100}
                alt='logo'
              />
            </div>
            <div className='relative flex h-full w-[70px]'>
              <Image
                src='/client-logos/5.png'
                fill
                className='object-fit'
                quality={100}
                alt='logo'
              />
            </div>
            <div className='relative flex h-full w-[70px]'>
              <Image
                src='/client-logos/6.png'
                fill
                className='object-fit'
                quality={100}
                alt='logo'
              />
            </div>
          </div>
          <div className='flex h-[20px] w-full items-center justify-between'>
            <div className='relative flex h-full w-[70px]'>
              <Image
                src='/client-logos/7.png'
                fill
                className='object-fit'
                quality={100}
                alt='logo'
              />
            </div>
            <div className='relative flex h-full w-[70px]'>
              <Image
                src='/client-logos/8.png'
                fill
                className='object-fit'
                quality={100}
                alt='logo'
              />
            </div>
            <div className='relative flex h-full w-[70px]'>
              <Image
                src='/client-logos/9.png'
                fill
                className='object-fit'
                quality={100}
                alt='logo'
              />
            </div>
          </div>
          <div className='flex h-[20px] w-full items-center justify-between'>
            <div className='relative flex h-full w-[70px]'>
              <Image
                src='/client-logos/10.png'
                fill
                className='object-fit'
                quality={100}
                alt='logo'
              />
            </div>
            <div className='relative flex h-full w-[70px]'>
              <Image
                src='/client-logos/11.png'
                fill
                className='object-fit'
                quality={100}
                alt='logo'
              />
            </div>
            <div className='relative flex h-full w-[70px]'>
              <Image
                src='/client-logos/12.png'
                fill
                className='object-fit'
                quality={100}
                alt='logo'
              />
            </div>
          </div>
          <div className='relative flex h-[90px] w-full'>
            <Image
              src='/website-assets/10.png'
              fill
              className='object-fit'
              quality={100}
              alt='about-image'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clientele;