// import { env } from '../env.mjs'

export const app = {
  NAME: 'IceJiVerse',
  VERSION: '2024.1.201',
  UPDATE_DATE: 'Jan 2, 2024',
  Dependencies: {
    Aurora: '1.2',
    React: '18.2.0',
    NextJs: '14.0.4',
    ThreeJs: '160.0',
  },
  Functions: {
    useThree: true,
    useAudio: true,
    useAuth: true,
    useWeb3: true,
  },
  user: {
    rateSwap: 59.2,
  },
  s3: {
    bucketName: process.env.S3_UPLOAD_BUCKET ?? 'icejiverse',
    endpoint: process.env.NEXT_PUBLIC_S3_DOWNLOAD_ENDPOINT,
  },
}

export const metaData = {
  appName: 'IceJiVerse',
  title: 'IceJiVerse | Where the dream begins',
  url: 'https://TheIceJI.com',
  description:
    "I'm Jirayu Ninlapun, a Creative Developer with a passion for pushing the boundaries of web technology. My expertise lies in WebGL, GLSL, and 3D development, and I thrive on creating immersive and visually stunning experiences. With a strong background in front-end development and NextJS, I excel at crafting engaging web animations that captivate users.",
  coverImg: '/og.jpg',
  author: 'Jirayu Ninlapun',
  keywords: [
    'IceJiVerse',
    'TheIceJi',
    'Jirayu Ninlapun',
    'Web Developer',
    'Creative Developer',
    'NextJs Developer',
    'DimensionsAI',
    'Artscape',
    'Graphics Designer',
    'VFX Artist',
    'Sound Engineer',
    'ไอซ์จิ',
    'จิรายุ นิลพันธุ์',
  ],
  twitterID: '@theiceji',
}

export const contacts = {
  facebook: 'jirayunlp',
  messenger: 'jirayunlp',
  instagram: 'the_iceji',
  youtube: '@theiceji',
  mail: 'Jirayu.Ninl@gmail.com',
  github: 'Jirayu-ninl',
  twitter: 'ice14798',
  discord: 'pZ4Rz6BQx2',
}

export const theme = {
  defaultTheme: 'dark',
  color: {
    primary: {
      0: '#FFC900',
    },
    primaryShade: {
      0: '#FFE171',
      1: '#FFD539',
      2: '#FFC900',
      3: '#C69C00',
      4: '#8E7000',
    },
    secondary: {
      0: '#ACFDEF',
      1: '#75FCE5',
      2: '#51FBDE',
      3: '#04C2A2',
      4: '#038A73',
    },
    tertiary: {
      0: '#C0AAFF',
      1: '#9771FF',
      2: '#7341FF',
      3: '#4300FF',
      4: '#3400C6',
    },
    quaternary: {
      0: '#FFB3B3',
      1: '#FF8080',
      2: '#ff3b3b',
      3: '#E60000',
      4: '#B30000',
    },
    background: {
      0: '#101010',
      1: '#1A1A1A',
      2: '#03131a',
      3: '#072c3b',
    },
    backgroundLight: {
      0: '#fffefa',
      1: '#fffdf5',
      2: '#fefbea',
      3: '#fef9e2',
    },
  },
}

const defineConfig = {
  metaData: metaData,
  contacts: contacts,
  app: app,
  theme: theme,
}

export default defineConfig
