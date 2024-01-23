import Heading from '../ui/heading';
import Paragraph from '../ui/paragraph';

const paragraph = `publishing and graphic design, Lorem ipsum is a  placeholder text commonly used to demonstrate the visual form of a document or a typeface  without relying on meaningful content.`;
const titles = ['CONCEPT ART', 'COMPOSITING', 'ROTO', 'MATCHMOVE', '3D'];

const WhatWeDo = () => {
  return (
    <section
      id='what-we-do'
      className='min-h-fit bg-black  pb-8 text-white md:min-h-screen md:p-0  md:pb-0'
    >
      <div className='flex h-full items-start md:ml-10 md:flex-col md:items-center'>
        <div className='flex h-full w-full border-l-0 border-t-2 border-[#A67FB9] md:col-span-1 md:grid-cols-3 md:border-l-2 md:border-t-0 md:py-0 md:pl-5 md:pt-0'>
          <div className='flex h-full w-full flex-col items-start justify-center gap-14 px-6 py-3 pr-0 md:col-span-1 md:gap-[3rem] md:px-0 md:pr-20'>
            <div className='flex h-44 w-64 flex-col items-start justify-start'>
              <Heading heading='What We Do' textSize='4xl' font='sherika' />
              <Paragraph paragraph={paragraph} textSize='lg' font='sherika' />
            </div>
            <div className=' flex h-44 flex-col justify-start gap-5'>
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
