import { useState, useEffect } from 'react';
import { useAnimate, stagger } from 'framer-motion';

const Path = (props) => (
  <path
    fill='transparent'
    strokeWidth='3'
    stroke='white'
    strokeLinecap='round'
    {...props}
  />
);

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations = isOpen
      ? [
          [
            'nav',
            { transform: 'translateX(0%)' },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 },
          ],
          [
            'li',
            { transform: 'scale(1)', opacity: 1, filter: 'blur(0px)' },
            { delay: stagger(0.05), at: '-0.1' },
          ],
        ]
      : [
          [
            'li',
            { transform: 'scale(0.5)', opacity: 0, filter: 'blur(10px)' },
            { delay: stagger(0.05, { from: 'last' }), at: '<' },
          ],
          ['nav', { transform: 'translateX(-100%)' }, { at: '-0.1' }],
        ];

    animate([
      [
        'path.top',
        { d: isOpen ? 'M 3 16.5 L 17 2.5' : 'M 2 2.5 L 20 2.5' },
        { at: '<' },
      ],
      ['path.middle', { opacity: isOpen ? 0 : 1 }, { at: '<' }],
      [
        'path.bottom',
        { d: isOpen ? 'M 3 2.5 L 17 16.346' : 'M 2 16.346 L 20 16.346' },
        { at: '<' },
      ],
      ...menuAnimations,
    ]);
  }, [isOpen, animate]);

  const handleNavItemClick = (sectionId) => {
    setIsOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const NavItems = [
    { id: 'services', text: 'What I offer?' },
    { id: 'skills', text: 'My Skills' },
    { id: 'experience', text: 'Education & Experience' },
    { id: 'work', text: 'My Work' },
    { id: 'contact', text: 'Contact' },
  ];

  return (
    // < className="fixed top-0 left-0 w-full z-50 bg-gradient-to-br from-primary to-secondary shadow-lg">
    <div className='relative flex justify-between px-12 py-2'>
      <div ref={scope} className='relative'>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='fixed top-4 left-4 z-40 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary
  flex items-center justify-center'
        >
          <svg width={23} height={18} viewBox='0 0 23 18'>
            <Path d='M 2 2.5 L 20 2.5' className='top' />
            <Path d='M 2 9.423 L 20 9.423' opacity='1' className='middle' />
            <Path d='M 2 16.346 L 20 16.346' className='bottom' />
          </svg>
        </button>

        <nav
          className={`fixed top-0 left-0 h-full w-72 z-30 flex items-center bg-gradient-to-br from-primary
         to-secondary transform ${
           isOpen ? 'translate-x-0' : '-translate-x-full'
         } transition-transform duration-300
          `}
        >
          <ul className='flex flex-col p-6'>
            {NavItems.map((item) => (
              <li key={item.id} className='text-white text-4xl font-bold mt-10'>
                <a
                  href={`#${item.id}`}
                  onClick={() => handleNavItemClick(item.id)}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* <h1 className='font-bold text-2xl text-white top-8 right-8 p-8 lg:top-12 lg:pr-16'>
        SHOSTKABRO
      </h1> */}
    </div>
  );
}
