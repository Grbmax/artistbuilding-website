import { Plus } from 'lucide-react';
interface CrossContainerProps {
  children: React.ReactNode;
}

const CrossContainerLayout: React.FC<CrossContainerProps> = ({ children }) => {
  return (
    <>
      <div className='absolute h-screen w-screen flex-col items-center justify-between p-6 md:flex'>
        <div className='flex h-max w-full justify-between text-white'>
          <Plus
            width={20}
            height={20}
            className='hover:animation-spin transition-all'
          />
          <Plus
            width={20}
            height={20}
            className='hover:animation-spin transition-all'
          />
          <Plus
            width={20}
            height={20}
            className='hover:animation-spin transition-all'
          />
        </div>
        <div className='flex h-max w-full justify-between text-white'>
          <Plus
            width={20}
            height={20}
            className='hover:animation-spin transition-all'
          />
          <Plus
            width={20}
            height={20}
            className='hover:animation-spin transition-all'
          />
        </div>
        <div className='flex h-max w-full justify-between text-white'>
          <Plus
            width={20}
            height={20}
            className='hover:animation-spin transition-all'
          />
          <Plus
            width={20}
            height={20}
            className='hover:animation-spin transition-all'
          />
          <Plus
            width={20}
            height={20}
            className='hover:animation-spin transition-all'
          />
        </div>
      </div>
      <div>{children}</div>
    </>
  );
};

export default CrossContainerLayout;
