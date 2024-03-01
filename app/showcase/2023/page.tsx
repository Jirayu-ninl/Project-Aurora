import Canvas from './components'

export const metadata = {
  title: 'WebGL Showcase 2023',
  description: 'WebGL, ThreeJs, Immersive Web Design',
  openGraph: {
    title: 'WebGL Showcase 2023',
    images: ['/page/launcher/bg_showcase_2023.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebGL Showcase 2023',
    description: 'WebGL, ThreeJs, Immersive Web Design',
    images: ['/page/launcher/bg_showcase_2023.png'],
  },
}

function Page() {
  return (
    <>
      <main className='m-container relative w-svw overflow-hidden bg-white dark:bg-[#101010]'>
        <Canvas />
        <h1 className='absolute opacity-0'>
          TheIceJi | IceJiVerse | Jirayu Ninlapun | 3D Creative Website Showcase
        </h1>
      </main>
    </>
  )
}

export default Page
