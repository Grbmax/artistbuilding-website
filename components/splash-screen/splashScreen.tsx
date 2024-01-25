import ArtistBuilding from '../icons/artistbuilding';
import ColumnLogo from '../icons/column-logo';

const SplashScreen = () => {
  return (
    <section className='splash-screen-section absolute z-50 hidden bg-black text-white md:flex'>
      <div className='flex h-full w-full flex-col items-center justify-center gap-[10px]'>
        <ArtistBuilding className='splash-screen-logo' />
        <ColumnLogo className='splash-screen-logo-text' />
      </div>
    </section>
  );
};

export default SplashScreen;
