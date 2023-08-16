/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { motion, AnimatePresence } from 'framer-motion'
import { SmoothScroll } from '@aurora/views/animations'
import { useScrollState } from '@aurora/libs/hooks/animations'

type tProject = {
  title: string
  slug: string
  featured: boolean
  tagline: string
  tag: string[]
  coverImage: {
    url: string
    width: number
    height: number
  }
}

const Client = ({ projects }: { projects: any[] }) => {
  projects = [...projects, ...projects, ...projects]
  const { handleScroll } = useScrollState(0)

  return (
    <>
      <SmoothScroll Callback={handleScroll}>
        <div className='w-dvw flex bg-backgroundLight-1 dark:bg-background-1'>
          <div className='container px-2 py-24 lg:px-4 xl:w-full xl:px-8'>
            <h2 className='mb-2 pt-16 text-5xl font-extralight uppercase md:pt-64 md:text-7xl xl:pt-[55vh] xl:text-9xl el:text-10xl'>
              Projects
            </h2>
            <Projects projects={projects} />
          </div>
        </div>
      </SmoothScroll>
    </>
  )
}

const Projects = ({ projects }: { projects: tProject[] }) => {
  return (
    <>
      <div className='grid grid-cols-3 gap-2 xl:grid-cols-4 xl:gap-4'>
        {projects.map((v: any, i: number) => (
          <>
            <Project project={v} i={i} key={v.title} />
          </>
        ))}
      </div>
    </>
  )
}

const Project = ({ project, i }: { project: tProject; i: number }) => {
  const [hover, setHover] = useState(false)
  return (
    <>
      <Link
        href={'/project/' + project.slug}
        className={clsx(
          'Anim-1 AnimOpacity-40 AnimSaturate-0 AnimTranslate-4 AnimShadow-el AnimScale-105 AnimRotate-1 flex min-h-[6rem] w-full overflow-hidden rounded-md sm:min-h-[8rem] md:min-h-[14rem] lg:rounded-xl xl:min-h-[20rem]',
          i % 2 && 'row-span-2',
        )}
        onMouseEnter={() => setHover(true)}
        onMouseMove={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <motion.div
          initial={{ visibility: 'hidden', y: 50, opacity: 0 }}
          animate={{ visibility: 'visible', y: 0, opacity: 1 }}
          transition={{ delay: 0.5 + i * 0.12 }}
          className=' relative h-full w-full'
        >
          <AnimatePresence>
            {hover && (
              <>
                <motion.div
                  className='absolute bottom-0 z-10 m-4 w-[calc(100%-32px)] rounded-lg bg-black/20 p-4 backdrop-blur-lg'
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className='text-2xl'>{project.title}</h3>
                </motion.div>
                <div className='absolute right-4 top-4 z-10 flex space-x-2'>
                  {project.tag.map((v) => (
                    <motion.button
                      key={v}
                      className='rounded-sm bg-quaternary-2 px-2 py-1 text-xs text-white dark:bg-primary-0 dark:text-black'
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {v}
                    </motion.button>
                  ))}
                </div>
              </>
            )}
          </AnimatePresence>
          <Image
            src={project.coverImage.url}
            alt={project.title}
            objectFit='cover'
            fill
            className='relative h-full w-full'
          />
          {/* <div className='relative h-full w-full bg-green-500' /> */}
        </motion.div>
      </Link>
    </>
  )
}

export default Client
