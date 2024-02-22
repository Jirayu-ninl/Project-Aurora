import { Client } from './page.client'

export const metadata = {
  title: 'WebGL Showcase 2022',
  description: 'WebGL, ThreeJs, Immersive Web Design',
  openGraph: {
    title: 'WebGL Showcase 2022',
    images: ['/page/launcher/bg_showcase_2022.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebGL Showcase 2022',
    description: 'WebGL, ThreeJs, Immersive Web Design',
    images: ['/page/launcher/bg_showcase_2022.png'],
  },
}

export default function Page() {
  return (
    <>
      <Client />
    </>
  )
}
