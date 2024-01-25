import Heading from '../ui/heading';
import Paragraph from '../ui/paragraph';

interface ServicesCardProps {
  heading: string;
  services: string;
}

const ServicesCard: React.FC<ServicesCardProps> = ({ services, heading }) => {
  return (
    <div className='flex h-32 w-full flex-col gap-3'>
      <Heading
        heading={heading}
        textSize='xl'
        className='sherika text-lg font-semibold md:text-3xl'
      />
      <Paragraph
        paragraph={services}
        textSize='xs'
        font='sherika'
        className='text-left text-sm md:text-xl'
      />
    </div>
  );
};

export default ServicesCard;
