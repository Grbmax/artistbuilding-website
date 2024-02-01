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
        <div className='splash-screen-logo relative flex h-60 w-60'>
          <Image
            src='/website-assets/splash-logo.png'
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

export default SplashScreen;
