'use client'

import { Card } from './card'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export const Cards = () => {
  const routerOn = useSearchParams().get('routerOn')
  return (
    <>
      <div className='grid h-[calc(100vh-320px)] w-full grid-cols-2 grid-rows-3 gap-1 md:gap-3 xl:h-[450px] xl:grid-cols-3 xl:grid-rows-2 xxl:h-[600px]'>
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
            title='Home (3D)'
            description='ThreeJs & GLSL showcase page'
          />
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
            title='App'
            description='Launch TheIceJi app'
          />
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
            title='About'
            description='Overview about myself'
          />
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
            title='My Skills'
            description='What I can do, come and see'
          />
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
            title='Services'
            description="Let's build your dream project"
          />
        </Link>
      </div>
    </>
  )
}
