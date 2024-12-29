
import { motion } from 'framer-motion';
import InteractiveButton from './InteractiveButton';
import CustomTitle from './CustomTitle';
import { contactData } from './data/config';

export default function ContactUs() {
  return (
    <article
      className='relative font-sans text-white rounded-lg p-16'
      id='contact'
    >
      <header
        className='absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#007cda] via-[#785ae4] to-primary opacity-20 blur-[100px] left-10 top-0
       hidden md:block'
      ></header>
      <header
        className='absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#007cda] via-[#785ae4] to-primary opacity-20 blur-[100px] right-10 bottom-0
       hidden md:block'
      ></header>

      <header>
        <CustomTitle title='Get in Touch' />
      </header>
      <section className='grid grid-cols-1 md:grid-cols-2 mt-32'>
        <section>
          {contactData.map((data) => (
            <motion.article
              key={data.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className='mb-20'
            >
              <div className='bg-black z-20 md:w-11/12 w-full text-white rounded-xl'>
                <div className='border border-primary bg-[#ffffff29] rounded-xl p-3 flex items-center'>
                  <img
                    src={data.icon}
                    width={64}
                    height={64}
                    alt={data.title}
                  />
                  <div className='ml-10'>
                    <h3 className='text-xl font-semibold'>{data.title}</h3>
                    <p className='text-sm'>{data.description}</p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </section>

        <motion.article
          transition={{ duration: 0.5, delay: 0.6 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <form action='' className='space-y-6'>
            <section className='mx-auto rounded-lg max-w-lg'>
              <div className='grid grid-cols-1 gap-4'>
                <label htmlFor='name' className='block border-b'>
                  <input
                    type='text'
                    id='name'
                    required
                    placeholder='Your Name'
                    className='appearance-none bg-transparent border-none w-full py-2 px-3
                            leading-tight focus:outline-none text-lg font-medium'
                  />
                </label>
                <label htmlFor='email' className='block border-b'>
                  <input
                    type='email'
                    id='email'
                    required
                    placeholder='Your Email'
                    className='appearance-none bg-transparent border-none w-full py-2 px-3
                            leading-tight focus:outline-none text-lg font-medium'
                  />
                </label>
                <label htmlFor='phone' className='block border-b'>
                  <input
                    type='tel'
                    id='phone'
                    required
                    placeholder='Your Phone'
                    className='appearance-none bg-transparent border-none w-full py-2 px-3
                            leading-tight focus:outline-none text-lg font-medium'
                  />
                </label>
                <label htmlFor='Message' className='block border-b'>
                  <textarea
                    rows='4'
                    id='Message'
                    required
                    placeholder='Your Message'
                    className='appearance-none bg-transparent border-none w-full py-2 px-3
                            leading-tight focus:outline-none text-lg font-medium'
                  >
                  </textarea>
                </label>

                <div className="text-center">
                  <InteractiveButton text='Send Message' className='w-full' />
                </div>
              </div>
            </section>
          </form>
        </motion.article>
      </section>
    </article>
  );
}
