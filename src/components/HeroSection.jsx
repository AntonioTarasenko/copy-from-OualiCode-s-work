import { motion } from 'framer-motion';
import { variants } from './data/config.js';
import InteractiveButton from './InteractiveButton.jsx';
import SocialButtons from './SocialButtons.jsx';

function HeroSection() {
  return (
    <section className='relative w-full'>
      <header className='absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#007cda] via-[#785ae4] to-primary opacity-20 blur-[100px] left-10 top-0 hidden md:block'></header>
      <header className='absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#007cda] via-[#785ae4] to-primary opacity-20 blur-[100px] right-10 bottom-0 hidden md:block'></header>
      <section className='w-full px-5 sm:px-8 md:px-12 lg:px-0 max-w-screen-xl mx-auto relative'>
        <article className='grid lg:grid-cols-2 gap-10 xl:gap-6 relative pt-24 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto'>
          <section className='lg:py-6 flex justify-between'>
            <SocialButtons />
            <section className='ml-0 md:ml-12'>
              <header className='text-center lg:text-left'>
                <h1
                  className='pt-4 text-white font-bold text-4xl
               md:text-5xl lg:text-6xl '
                >
                  Hi, I&apos;m{' '}
                  <span className='text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary'>
                    SHOSTKABRO
                  </span>
                </h1>
              </header>
              <p className='text-gray-300 pt-8 text-center lg:text-left mx-auto max-w-[370px] md:max-w-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                doloribus architecto minima. Provident vel esse iure iusto,
                laboriosam placeat quisquam natus odit. Corrupti perferendis
                voluptatibus, consequatur odit quidem quia unde!
              </p>
              <section className='flex items-center gap-3 pt-9 flex-col sm:flex-row sm:mx-auto lg:mx-0'>
                <figure className='w-56'>
                  <InteractiveButton text='Hire Me' />
                </figure>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className='flex items-center px-4 py-2 bg-transparent text-primary border border-primary rounded-3xl'
                >
                  <svg viewBox='0 0 24 24' width={40} height={40}>
                    <motion.path
                      d='M12 15.586l4.95-4.95-1.414-1.414L13 12.172V4h-2v8.172L8.464 9.636 7.05 11.05l4.95 4.536zm-7 2h14v2H5v-2z'
                      fill='#ffc107'
                      stroke='#ffc107'
                      strokeWidth={0.5}
                      variants={variants}
                      initial='initial'
                      animate='animate'
                    />
                  </svg>
                  <span>Download Resume</span>
                </motion.button>
              </section>
            </section>
          </section>

          {/* <figure className='lg:h-full ms:justify-end mt-20 md:mt-0'>
            {
            <motion.div
              className='w-[335px] h-[335px] flex justify-center items-center rounded-full overflow-hidden relative'
              animate={{
                backgroundColor: ['#ffc107', '#ff7556', '#ff6667'],
                scale: [1, 1.1, 1],
                rotate: [1, 5, 5, 1],
              }}
              transition={{
                duration: 2,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            >
              <div className='absolute inset-0 rounded-full bg-gradient-to-r from-[#ffc107] to-[#ff6667] blur-3xl opacity-60 h-full w-full' />
              <img
                src='/heroPic.jpg'
                alt='Hiro Pic'
                className='relative z-10 rounded-full w-[300px] h-[300px] shadow-2xl transform transition-transform duration-500 ease-in-out hover:scale-110'
              />
            </motion.div>
            }
          </figure> */}
          <figure className='flex justify-center items-center h-full mt-20 md:mt-0'>
            <motion.div
              className='w-[335px] h-[335px] flex justify-center items-center rounded-full overflow-hidden relative'
              animate={{
                backgroundColor: ['#ffc107', '#ff7556', '#ff6667'],
                scale: [1, 1.1, 1],
                rotate: [1, 5, 5, 1],
              }}
              transition={{
                duration: 2,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            >
              <div className='absolute inset-0 rounded-full bg-gradient-to-r from-[#ffc107] to-[#ff6667] blur-3xl opacity-60 h-full w-full' />
              <img
                src='./heroPic.jpg'
                alt='Hero Pic'
                className='relative z-10 rounded-full w-[300px] h-[300px] shadow-2xl transform transition-transform duration-500 ease-in-out hover:scale-110'
              />
            </motion.div>
          </figure>
        </article>
      </section>
    </section>
  );
}

export default HeroSection;
