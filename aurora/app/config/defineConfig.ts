const defineConfig = {
  metaData: {
    appName: 'TheIceJi',
    title: 'TheIceJI - Official Website',
    url: 'https://TheIceJI.com',
    description:
      "I'm Jirayu Ninlapun, and I'm a Cinematic Art student at Bangkok University. I've worked as a Web Developer for three years and am an expert in Front-end and Web-animation.",
    coverImg: '/og.jpg',
    author: 'Jirayu Ninlapun',
    keywords: ['TheIceJi', 'Jirayu Ninlapun', 'Web Developer'],
    twitterID: '@theiceji',
  },
  contacts: {
    facebook: 'jirayunlp',
    messenger: 'jirayunlp',
    instagram: 'the_iceji',
    youtube: '@theiceji',
    mail: 'Jirayu.Ninl@gmail.com',
    github: 'Jirayu-ninl',
    twitter: 'ice14798',
    discord: 'pZ4Rz6BQx2',
  },
  app: {
    NAME: 'TheIceJI',
    VERSION: '2023.05.01',
    UPDATE_DATE: 'May 1, 2023',
    Dependencies: {
      Aurora: '1.0b',
      React: '18.2.0',
      NextJs: '13.3.1',
      ThreeJs: '151.3',
    },
    GOOGLE_ANALYTICS: 'UA-102194632-3',
    GOOGLE_TAG_MANAGER: 'GTM-KWRQQVP',
    Theme: {
      Color: {
        primary: '#FFC900',
        secondary: '',
        tertiary: '',
        quaternary: '',
      },
    },
    Functions: {
      useThree: true,
      useAudio: true,
      useAuth: true,
      useWeb3: true,
    },
  },
}

export default defineConfig
