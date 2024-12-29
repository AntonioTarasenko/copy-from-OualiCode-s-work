//Hero Section
const animationDuration = 2;
export const variants = {
  initial: { pathLength: 0, strokeOpacity: 1, fillOpacity: 0 },
  animate: {
    pathLength: 1,
    strokeOpacity: 0,
    fillOpacity: 1,
    transition: {
      duration: animationDuration,
      ease: 'easeInOut',
      strokeOpacity: {
        delay: animationDuration,
      },
      fillOpacity: {
        delay: animationDuration,
      },
    },
  },
  hover: {
    scale: 1.1,
    transition: { duration: 0.3 },
  },
};

export const socialIcons = [
  {
    id: 1,
    path: 'M10 9h2V6c0-1.1.9-2 2-2h2V0h-2C9.79 0 8 1.79 8 4v5H6v3h2v11h3V12h2l1-3h-3V9z',
    viewBox: '0 0 24 24',
  },
  {
    id: 2,
    path: 'M23.954 4.569c-0.885 0.392-1.83 0.656-2.825 0.775 1.014-0.609 1.794-1.574 2.163-2.723-0.951 0.555-2.005 0.959-3.127 1.184-0.897-0.957-2.178-1.555-3.594-1.555-2.717 0-4.917 2.201-4.917 4.917 0 0.386 0.045 0.762 0.127 1.124-4.083-0.205-7.702-2.158-10.126-5.134-0.422 0.724-0.666 1.562-0.666 2.457 0 1.695 0.863 3.192 2.175 4.068-0.802-0.025-1.556-0.246-2.213-0.615v0.061c0 2.367 1.684 4.342 3.918 4.788-0.41 0.111-0.844 0.171-1.292 0.171-0.316 0-0.624-0.03-0.927-0.086 0.625 1.953 2.444 3.376 4.6 3.416-1.683 1.319-3.809 2.105-6.115 2.105-0.397 0-0.788-0.023-1.175-0.067 2.179 1.394 4.768 2.209 7.548 2.209 9.057 0 14.01-7.504 14.01-14.01 0-0.213-0.005-0.426-0.014-0.637 0.962-0.695 1.797-1.562 2.457-2.549z',
    viewBox: '0 0 24 24',
  },
  {
    id: 3,
    path: 'M12 2.163c-5.421 0-9.837 4.415-9.837 9.837 0 5.421 4.416 9.837 9.837 9.837s9.837-4.415 9.837-9.837c0-5.421-4.416-9.837-9.837-9.837zm0 18.148c-4.587 0-8.311-3.724-8.311-8.311 0-4.587 3.724-8.311 8.311-8.311s8.311 3.724 8.311 8.311c0 4.587-3.724 8.311-8.311 8.311zm0-13.475c-2.852 0-5.163 2.311-5.163 5.163s2.311 5.163 5.163 5.163 5.163-2.311 5.163-5.163-2.311-5.163-5.163-5.163zm0 8.675c-1.934 0-3.512-1.578-3.512-3.512s1.578-3.512 3.512-3.512 3.512 1.578 3.512 3.512-1.578 3.512-3.512 3.512z',
    viewBox: '0 0 24 24',
  },
  {
    id: 4,
    path: 'M22.23 0H1.77C0.79 0 0 0.77 0 1.72v20.51C0 23.23 0.79 24 1.77 24H22.23c0.98 0 1.77-0.77 1.77-1.77V1.77C24 0.79 23.23 0 22.23 0zM7.07 20.45H3.56V9h3.51v11.45zm-1.75-12.9c-1.12 0-2.03-0.91-2.03-2.03 0-1.12 0.91-2.03 2.03-2.03s2.03 0.91 2.03 2.03c0 1.12-0.91 2.03-2.03 2.03zm15.48 12.9h-3.51v-5.6c0-1.34-0.03-3.07-1.87-3.07-1.87 0-2.15 1.46-2.15 2.96v5.71h-3.51V9h3.37v1.56h0.05c0.47-0.89 1.63-1.83 3.36-1.83 3.6 0 4.26 2.37 4.26 5.45v6.27z',
    viewBox: '0 0 24 24',
  },
];

//Number Section

export const Numbers = [
  { id: 1, number: 12, title: 'Creates projects' },
  { id: 2, number: 200, title: 'Projects' },
  { id: 3, number: 120, title: 'Happy clients' },
  { id: 4, number: 5, title: 'Years of experience' },
];

//Services Section

export const services = [
  {
    id: 1,
    title: 'WEB DEVELOPMENT',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.',
  },
  {
    id: 2,
    title: 'MOBILE DEVELOPMENT',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.',
  },
  {
    id: 3,
    title: 'WEB DESIGN',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.',
  },
];

//Skills Section

export const skills = [
  {
    skill: 'React',
    percentage: 70,
    icon: 'https://img.icons8.com/office/40/react.png',
  },
  {
    skill: 'Node.js',
    percentage: 75,
    icon: 'https://img.icons8.com/fluency/40/node-js.png',
  },
  {
    skill: 'Tailwindcss',
    percentage: 95,
    icon: 'https://img.icons8.com/color/40/tailwindcss.png',
  },
  {
    skill: 'Figma',
    percentage: 85,
    icon: 'https://img.icons8.com/office/40/figma.png',
  },
  {
    skill: 'Vue.js',
    percentage: 90,
    icon: 'https://img.icons8.com/fluency/40/vuejs.png',
  },
];

//Experience Section

export const experience = [
  {
    id: 1,
    title: 'Frontend Developer1',
    company: 'Tech Solutions Inc.',
    year: '2024 - Present',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.',
    icon: 'https://img.icons8.com/ios-filled/64/ffffff/briefcase-settings.png',
  },
  {
    id: 2,
    title: 'Frontend Developer2',
    company: 'StartUp',
    year: '2023 - Present',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.',
    icon: 'https://img.icons8.com/ios-filled/64/ffffff/briefcase-settings.png',
  },
];
export const education = [
  {
    id: 1,
    degree: 'Frontend Developer3',
    institution: 'Tfgdgfgdg Inc.',
    year: '2021 - Present',
    details:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.',
    icon: 'https://img.icons8.com/ios-filled/64/ffffff/graduation-cap--v2.png',
  },
  {
    id: 2,
    degree: 'Frontend Developer4',
    institution: 'StartUp fgdgdfgdgdfg',
    year: '2020 - Present',
    details:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.',
    icon: 'https://img.icons8.com/ios-filled/64/ffffff/graduation-cap--v2.png',
  },
];


//Projects Section


export const projects = [
  {
    id:1,
    title: 'Project 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.',
    imageUrl: '/project1.jpg',
  },
  {
    id:2,
    title: 'Project 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.',
    imageUrl: '/project2.jpg',
  },
  {
    id:3,
    title: 'Project 3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.',
    imageUrl: '/project3.jpg',
  },
]

//Contact Section

export const contactData = [
  {
    id: 1,
    title: 'Address',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.',
    icon: 'https://img.icons8.com/ios-filled/50/ffffff/address--v1.png',
  },
  {
    id: 2,
    title: 'Phone Number',
    description: '+38099 123 45 67',
    icon: 'https://img.icons8.com/ios-filled/50/ffffff/phone.png',
  },
  {
    id: 3,
    title: 'Email',
    description: 'shostkabro@mail.com',
    icon: 'https://img.icons8.com/ios-filled/50/ffffff/new-post--v1.png',
  }
]