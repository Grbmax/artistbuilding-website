import Image from 'next/image';

interface SplashScreenProps {
  isWorksPage?: boolean;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ isWorksPage }) => {
  return isWorksPage ? (
    <section className='splash-screen-section absolute z-50 hidden bg-black text-white md:flex'>
      <div className='flex h-full w-full flex-col items-center justify-center gap-[10px]'>
        What
      </div>
    </section>
  ) : (
    <section className='splash-screen-section absolute z-50 hidden bg-black text-white md:flex'>
      <div className='flex h-full w-full flex-col items-center justify-center gap-2'>
        <div className='splash-screen-logo relative flex h-20 w-20'>
          <Image
            src='/website-assets/logo-building.png'
            fill
            className='object-contain'
            quality={100}
            alt='about-image'
          />
        </div>
        <div className='splash-screen-logo-text relative flex h-20 w-56'>
          <Image
            src='/website-assets/logo-text.png'
            fill
            className='object-contain'
            quality={100}
            alt='about-image'
          />
        </div>
      </div>
    </section>
  );
};

export default SplashScreen;
