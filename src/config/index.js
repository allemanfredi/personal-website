module.exports = {
  siteTitle: 'Manfredi Alessandro | Blockchain Engineer',
  siteDescription: 'Manfredi Alessandro is a Blockchain Engineer based in Felegara(PR), Italy.',
  siteKeywords:
    'Manfredi Alessandro, Alessandro, Manfredi, allemanfredi, software engineer, blockchain engineer, blockchain, javascript, react, node',
  siteUrl: 'https://allemanfredi.com',
  siteLanguage: 'it_IT',

  /*googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',*/

  name: 'Alessandro Manfredi',
  location: 'Felegara, PR',
  email: 'alle.manfredi@gmail.com',
  github: 'https://github.com/allemanfredi',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/allemanfredi',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/alessandro-manfredi-36a22076/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/alle.manfredi/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/AlleManfredi',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Experience',
      url: '#jobs',
    },
    {
      name: 'Work',
      url: '#projects',
    },
    {
      name: 'Contact',
      url: '#contact',
    },
  ],

  twitterHandle: '@AlleManfredi',

  navHeight: 100,

  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
