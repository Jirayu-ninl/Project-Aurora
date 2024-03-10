export const Projects = [
  {
    name: 'ARTSCAPE',
    type: 'Web-App',
    description: 'Discover, Showcase, and Connect with Artists Worldwide,',
    icon: 'website',
    link: 'https://artscape.day/',
    star: '99',
  },
  {
    name: 'NEXEL',
    type: 'Tech Startup',
    description: 'Creators of cutting-edge technology for Modern applications',
    icon: 'website',
    link: 'https://nexellab.com/',
    star: '99',
  },
  {
    name: 'Aurora Stack',
    type: 'App starter',
    description:
      'Full-stack WebApp, Unleash Limitless Scalability and Type-Safe Master',
    icon: 'website',
    link: 'https://aurora.nexellab.com/',
    star: '99',
  },
  {
    name: 'Nova Stack',
    type: 'App starter',
    description:
      'A cutting-edge backend stack for seamless development and scalability',
    icon: 'website',
    link: 'https://nova.nexellab.com/',
    star: '99',
  },
  {
    name: 'Discord Glass Theme',
    type: 'Discord Theme',
    description: 'Glassmorphism design theme for Discord app',
    icon: 'download',
    link: 'https://github.com/Jirayu-ninl/T6i-Discord-Glass-Theme',
    star: '99',
  },
  {
    name: 'ProFantasy',
    type: 'AI Generated Art',
    description: 'Stable Diffusion Model for fantasy art purposes',
    icon: 'download',
    link: 'https://civitai.com/models/52298',
    star: '99',
  },
  {
    name: 'ProPortrait',
    type: 'AI Generated Art',
    description: 'Stable Diffusion Model for portrait photography purposes',
    icon: 'download',
    link: 'https://civitai.com/models/72093',
    star: '99',
  },
  {
    name: 'AXIE ONE',
    type: 'Web-App',
    description: 'Scholar and account management for Axie Infinity.',
    icon: 'website',
    link: 'https://axieone.com/',
    star: '99',
  },
]

enum SkillLevel {
  LEVEL_1 = 'Beginner',
  LEVEL_2 = 'Intermediate',
  LEVEL_3 = 'Advanced',
  LEVEL_4 = 'Professional',
  LEVEL_5 = 'Master',
}

export const DevSkills = [
  {
    name: ['HTML', 'CSS, SCSS', 'Tailwind'],
    type: ['Front-end'],
    level: SkillLevel.LEVEL_5,
  },
  {
    name: ['NextJs', 'NestJs', 'T3 Stack'],
    type: ['Framework'],
    level: SkillLevel.LEVEL_4,
  },
  {
    name: ['Prisma', 'MongoDB', 'Firebase'],
    type: ['Database'],
    level: SkillLevel.LEVEL_3,
  },
  {
    name: ['GSAP', 'Framer Motion'],
    type: ['Animation'],
    level: SkillLevel.LEVEL_3,
  },
  {
    name: ['GLSL', 'ThreeJS', 'React-three'],
    type: ['WebGL'],
    level: SkillLevel.LEVEL_3,
  },
  {
    name: ['tRPC', 'Express', 'GraphQL'],
    type: ['Back-end'],
    level: SkillLevel.LEVEL_3,
  },
  {
    name: ['GCP', 'Amazon', 'Docker'],
    type: ['Infra-S'],
    level: SkillLevel.LEVEL_2,
  },
  {
    name: ['NGINX', 'LiteSpeed', 'Cloud Native'],
    type: ['Server'],
    level: SkillLevel.LEVEL_2,
  },
  {
    name: ['Web3', 'AR/VR', 'WebSocket'],
    type: ['Others'],
    level: SkillLevel.LEVEL_1,
  },
]

export const Expertises = [
  {
    name: ['Website', 'WebApp', 'Wordpress'],
    category: ['developer'],
    level: SkillLevel.LEVEL_5,
  },
  {
    name: ['V. Editing', 'Motion Graphics', 'Visual Effects'],
    category: ['Video & Motion'],
    level: SkillLevel.LEVEL_5,
  },
  {
    name: ['S. Editing', 'Mixing', 'Mastering'],
    category: ['Sound & Music'],
    level: SkillLevel.LEVEL_4,
  },
  {
    name: ['Adobe XD', 'Illustrator', 'Photoshop'],
    category: ['Graphics Design'],
    level: SkillLevel.LEVEL_3,
  },
  {
    name: ['MAYA', 'vRay, Arnold', 'Sub. Painter'],
    category: ['3D & LookDev'],
    level: SkillLevel.LEVEL_2,
  },
]

export const Certificates = [
  {
    name: ['Front-end Web UI', 'Framework and', 'Tools'],
    academy: ['HONGKONG University of', 'science and technology'],
    date: 'Jun 26, 2021',
  },
  {
    name: ['React', 'Development'],
    academy: ['Google Developer'],
    date: 'Jun 17, 2021',
  },
  {
    name: ['Production-Grade', 'NextJS'],
    academy: ['Frontend Masters'],
    date: 'July 20, 2021',
  },
  {
    name: ['Ruby Certification', 'Course'],
    academy: ['SOLOLEARN'],
    date: 'Jun 19, 2021',
  },
  {
    name: ['Building an im-', 'mersive creative', 'website from'],
    academy: ['Awwwards'],
    date: 'Aug 3, 2021',
  },
  {
    name: ['Merging WebGL', 'and HTML Worlds'],
    academy: ['Awwwards'],
    date: 'Aug 25, 2021',
  },
  {
    name: ['JavaScript:', 'Advanced Concepts'],
    academy: ['ZeroToMastery'],
    date: 'Aug 25, 2021',
  },
  {
    name: ['Understanding ', 'TypeScript'],
    academy: ['Udemy'],
    date: 'Nov 3, 2022',
  },
  {
    name: ['Three.js', 'journey'],
    academy: ['Bruno Simon'],
    date: 'Apr 21, 2023',
  },
  {
    name: ['Microservices', 'with NodeJs', 'and React'],
    academy: ['Udemy'],
    date: 'June 16, 2023',
  },
]

export const Teams = [
  {
    name: 'WA Interactive Dev Team',
    location: 'Texas, usa',
    description:
      'We are an Interactive Web Developer Team that specializes in GSAP, WebGL, and Web Animation to create user-friendly website designs.',
  },
  {
    name: 'WAX Community Developer',
    location: 'Australia',
    description:
      'We are a blockchain-based NFT game developer using WAX-Chain.',
  },
]

export const Works = [
  {
    company: '27 JUNE STUDIO',
    position: 'Full-Stack Developer',
    description: 'Building an Interactive application for events',
    date: '2023 / Currently working',
  },
  {
    company: 'ArtScape, team project',
    position: 'Full-Stack Developer',
    description:
      'Building an Artist Community with T3-Stack and integrating Web3',
    date: '2023 / Dec-2023',
  },
  {
    company: 'Insight Technology Co., Ltd.',
    position: 'Post-Production Artist',
    description:
      'Control the post-production workflow, produce VFX, CGI, and film sound',
    date: '2022 / June-2023',
  },
  {
    company: 'Infinity One Co., Ltd.',
    position: 'React Developer',
    description: 'I create interactive and front-end NextJS websites.',
    date: '2021 / Jul-2022',
  },
  {
    company: 'Posxible Lab Co., Ltd.',
    position: 'Full-Stack Developer',
    description: 'Developing a Wednesday CMS, using on PHP, and MySQL',
    date: '2021 / Aug-2021',
  },
  {
    company: 'Freelancer',
    position: 'WordPress DeveLoper',
    description: 'Building an online store and a landing page',
    date: '2018 / Sept-2019',
  },
  {
    company: 'Agital Advertise Co., Ltd.',
    position: 'WordPress DeveLoper',
    description: 'Making a WordPress sales page for a client of the business',
    date: '2017 / Jun-2018',
  },
]
