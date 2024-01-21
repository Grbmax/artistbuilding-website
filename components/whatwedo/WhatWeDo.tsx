import Heading from '../ui/heading';
import Paragraph from '../ui/paragraph';

const paragraph = `publishing and graphic design, Lorem ipsum is a  placeholder text commonly used to demonstrate the visual form of a document or a typeface  without relying on meaningful content.`;
const titles = ['CONCEPT ART', 'COMPOSITING', 'ROTO', 'MATCHMOVE', '3D'];

const WhatWeDo = () => {
  return (
    <section
      id='whatwedo'
      className='min-h-screen bg-black text-white sm:p-1 md:p-0'
    >
      <div className='flex h-full items-center md:ml-10 md:flex-col'>
        <div className='flex h-full w-full border-l-2 border-[#A67FB9] md:col-span-1 md:grid-cols-3 md:py-0 md:pl-5'>
          <div className='flex h-full w-full flex-col items-center justify-center gap-1 pr-0 md:col-span-1  md:items-start md:gap-[3rem] md:pr-20'>
            <div className='flex h-44 w-64 flex-col items-center justify-start md:items-start'>
              <Heading heading='What We Do' textSize='4xl' font='sherika' />
              <Paragraph paragraph={paragraph} textSize='lg' font='sherika' />
            </div>
            <div className='flex h-44 flex-col justify-start gap-5'>
              {titles.map((title) => (
                <Heading
                  key={title}
                  heading={title}
                  textSize='2xl'
                  font='akira'
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
