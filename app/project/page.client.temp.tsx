/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SmoothScroll } from '@aurora/views/animations'
import { useScrollState } from '@aurora/libs/hooks/animations'
import { TypeA as Card } from '@components/post/card'

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
            <Card
              cardData={v}
              i={i}
              key={i}
              options={{ showTags: true }}
              baseUrl='/project/'
            />
          </>
        ))}
      </div>
    </>
  )
}

export default Client
