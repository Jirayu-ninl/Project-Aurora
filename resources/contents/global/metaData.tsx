import type { Metadata } from 'next'

const titleDefault = 'TheIceJI - Jirayu Ninlapun Official Website'
const url = 'https://TheIceJI.com'
const descriptionDefault =
  "I'm Jirayu Ninlapun, and I'm a Cinematic Art student at Bangkok University. I've worked as a Web Developer for three years and am an expert in Front-end and Web-animation."
const author = 'Jirayu Ninlapun'
const coverImgDefault = '/og.jpg'

const DefaultMetaData: Metadata = {
  metadataBase: new URL(url),
  title: {
    template: '%s | TheIceJi',
    default: titleDefault,
  },
  description: descriptionDefault,
  applicationName: 'TheIceJi',
  keywords: ['TheIceJi', 'Jirayu Ninlapun', 'Web Developer'],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    viewportFit: 'cover',
  },
  authors: { name: author },
  creator: author,
  publisher: author,
  other: {
    designer: author,
    language: 'english',
    distribution: 'web',
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFC900' },
    { media: '(prefers-color-scheme: dark)', color: '#1A1A1A' },
  ],
  manifest: '/manifest.json',
  openGraph: {
    title: {
      template: '%s | TheIceJi',
      default: titleDefault,
    },
    siteName: 'TheIceJi',
    description: descriptionDefault,
    images: [
      {
        url: coverImgDefault,
        width: 1200,
        height: 627,
      },
    ],
    authors: ['TheIceJi'],
    locale: 'en-US',
    // type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      template: '%s | TheIceJi',
      default: titleDefault,
    },
    description: descriptionDefault,
    // siteId: '1467726470533754880',
    creator: '@theiceji',
    // creatorId: '1467726470533754880',
    images: [coverImgDefault],
  },
  icons: {
    icon: '/logo_white.svg',
    shortcut: '/logo_white.svg',
    apple: '/logo_white.svg',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/logo_white.svg',
    },
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  appleWebApp: {
    title: 'TheIceJi',
    statusBarStyle: 'black-translucent',
    startupImage: [
      '/assets/startup/apple-touch-startup-image-768x1004.png',
      {
        url: '/assets/startup/apple-touch-startup-image-1536x2008.png',
        media: '(device-width: 768px) and (device-height: 1024px)',
      },
    ],
  },
}

export default DefaultMetaData
