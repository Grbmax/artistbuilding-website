import Heading from '../ui/heading';

const Contact = () => {
  return (
    <section
      id='contact'
      className='relative flex gap-16 bg-black py-16 text-3xl text-white md:text-4xl'
    >
      <div className='flex w-full justify-between px-32'>
        <div className='flex w-1/3 flex-col gap-10'>
          <Heading heading='CONTACT US' font='sherika' className='text-3xl' />
          <div>
            <div>
              <h2 className='text-xl'>hello@email.com</h2>
            </div>
            <h2 className='text-xl'>+91 123456789</h2>
          </div>
          <div>
            <h2 className='text-xl'>
              Ankur Complex Phase 1, 6 Number Stop, Shivaji Nagar, Bhopal,
              Madhya Pradesh
            </h2>
          </div>
        </div>
        <div>B</div>
      </div>
    </section>
  );
};

export default Contact;
