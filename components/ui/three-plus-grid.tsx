import { Plus } from 'lucide-react';

const ThreePlusGrid = () => {
  const plusIcons = [];
  for (let i = 0; i < 3; i++) {
    plusIcons.push(
      <Plus
        key={i}
        width={20}
        height={20}
        className='hover:animation-spin transition-all'
      />
    );
  }

  return plusIcons;
};

export default ThreePlusGrid;




