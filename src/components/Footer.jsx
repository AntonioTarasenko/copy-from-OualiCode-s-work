import { motion } from 'framer-motion';

export default function Footer() {
    const sentence = 'All rights reserved 2024';
    const letters = sentence.split('');

    const variants = {
        hidden: {opacity:0,y:10},
        visible: {opacity:1,y:0},
    }
  return (
    // <footer className="relative z-10 text-white border-t-2 border-t-white mt-20">
    //     <div className="container p-8 flex justify-between">
    //         <div className="text-3xl font-bold flex">SHOSTKABRO</div>
    //         <nav className="flex ml-2 ">
    //             {letters.map((letter, index) => (
    //                 <motion.span
    //                     key={index}
    //                     variants={variants}
    //                     initial="hidden"
    //                     whileInView='visible'
    //                     transition={{ duration: 0.5, delay: index * 0.1 }}
    //                     className={`inline-block ${
    //                         letter === ' ' ? 'mr-4' : 'mr-1'
    //                     }`}
    //                 >
    //                     {letter}
    //                 </motion.span>
    //             ))}
    //         </nav>
    //     </div>
    // </footer>

    <footer className="relative z-10 text-white border-t-2 border-t-white mt-20">
  <div className="container p-8 flex flex-col sm:flex-row justify-between">
    <div className="text-3xl sm:text-2xl font-bold flex">SHOSTKABRO</div>
    <nav className="flex mt-4 sm:mt-0 sm:ml-2">
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`inline-block ${
            letter === ' ' ? 'mr-4 sm:mr-2' : 'mr-1 sm:mr-0.5'
          } text-lg sm:text-sm`}
        >
          {letter}
        </motion.span>
      ))}
    </nav>
  </div>
</footer>

  )
}
