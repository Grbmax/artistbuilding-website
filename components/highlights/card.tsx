'use client';
import ThreePlusGrid from '../ui/three-plus-grid';
import TwoPlusGrid from '../ui/two-plus-grid';
import { HighlightsData } from './highlights';

const HighlightCard: React.FC<HighlightsData> = ({
  brand,
  brandHex,
  heading,
  paragraph,
  video,
}) => {
  console.log(brand, brandHex, heading, paragraph, video, 'highlight card');
  return (
    <div className='flex min-h-screen w-full flex-col bg-black'>
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
      <div className='flex min-h-screen w-full flex-col border text-white md:flex md:flex-row md:justify-evenly'>
        <div className='flex w-full flex-1 items-end justify-center border md:min-h-screen md:justify-end'>
          A
        </div>
        <div className='flex w-full flex-1 items-start justify-center border md:min-h-screen md:justify-start'>
          B
        </div>
      </div>
    </div>
  );
};

export default HighlightCard;