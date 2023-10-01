'use client'

import { Card } from './card'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export const Cards = () => {
  const routerOn = useSearchParams().get('routerOn')
  return (
    <>
      <div className='grid h-[600px] w-full grid-cols-3 grid-rows-2 gap-3'>
        <Link
          href='/?routerOn=true&target=/home'
          className='Anim AnimTranslate-4 col-span-2'
        >
          <Card
            routerOn={routerOn}
            transition={{ delay: 0 }}
            imageBg={{
              src: '/page/launcher/bg_home.png',
              alt: 'ThreeJs showcase',
            }}
          >
            <h1 className='text-xl font-bold uppercase'>Home (3D)</h1>
            <h2 className='text-xs'>ThreeJs & GLSL showcase page</h2>
          </Card>
        </Link>
        <Link
          href='/?routerOn=true&target=/app'
          className='Anim AnimTranslate-4'
        >
          <Card
            routerOn={routerOn}
            transition={{ delay: 0.1 }}
            imageBg={{
              src: '/page/launcher/bg_app.jpg',
              alt: 'Aurora App',
            }}
          >
            <h1 className='text-xl font-bold uppercase'>App</h1>
            <p className='text-xs'>Launch TheIceJi app</p>
          </Card>
        </Link>
        <Link
          href='/?routerOn=true&target=/about'
          className='Anim AnimTranslate-4'
        >
          <Card
            routerOn={routerOn}
            transition={{ delay: 0.2 }}
            imageBg={{
              src: '/page/launcher/bg_about.jpg',
              alt: 'About Me',
            }}
          >
            <h1 className='text-xl font-bold uppercase'>About</h1>
            <p className='text-xs'>Overview about myself</p>
          </Card>
        </Link>
        <Link
          href='/?routerOn=true&target=/about/skills'
          className='Anim AnimTranslate-4'
        >
          <Card
            routerOn={routerOn}
            transition={{ delay: 0.3 }}
            imageBg={{
              src: '/page/launcher/bg_projects.jpg',
              alt: 'Projects',
            }}
          >
            <h1 className='text-xl font-bold uppercase'>My Skills</h1>
            <p className='text-xs'>What I can do, come and see</p>
          </Card>
        </Link>
        <Link
          href='/?routerOn=true&target=/services'
          className='Anim AnimTranslate-4'
        >
          <Card
            routerOn={routerOn}
            transition={{ delay: 0.4 }}
            imageBg={{
              src: '/page/launcher/bg_services.jpg',
              alt: 'Services',
            }}
          >
            <h1 className='text-xl font-bold uppercase'>Services</h1>
            <h2 className='text-xs'>Let's build your dream project</h2>
          </Card>
        </Link>
      </div>
    </>
  )
}
