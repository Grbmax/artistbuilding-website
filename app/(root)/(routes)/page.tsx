import Button from '@/components/ui/button';
import Container from '@/components/ui/container';

export default function Home() {
  return (
    <Container>
      <div className='flex flex-col items-start space-y-4'>
        <h1 className='font-heading text-6xl'>Heading</h1>
        <Button className='primary-color text-sm'>Primary</Button>
        <Button className='secondary-color text-sm'>Secondary</Button>
        <Button className='accent-color text-sm'>Accent</Button>
      </div>
    </Container>
    
  );
}
