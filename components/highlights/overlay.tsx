import ThreePlusGrid from '../ui/three-plus-grid';
import TwoPlusGrid from '../ui/two-plus-grid';

const Overlay = () => {
  return (
    <div className='absolute flex min-h-screen w-full flex-1 flex-col justify-between'>
      <div className='flex h-max w-full justify-between p-8 text-white'>
        <ThreePlusGrid />
      </div>
      <div className='flex h-max w-full justify-between p-8 text-white'>
        <TwoPlusGrid />
      </div>
      <div className='flex h-max w-full justify-between p-8 text-white'>
        <ThreePlusGrid />
      </div>
    </div>
  );
};

export default Overlay;
