/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import {
  useRef,
  useState,
  forwardRef,
  useLayoutEffect,
  useEffect,
  createRef,
} from 'react'
import type { RefObject, ForwardedRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  useScroll,
  useTransform,
  useSpring,
  motion,
  MotionValue,
} from 'framer-motion'
import { InnerHeight } from '@aurora/libs/hooks/layouts'

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
  projects = [...projects, projects[0]]

  const $container = useRef<HTMLDivElement | null>(null)
  const [pageHeight, setPageHeight] = useState(0)

  const instanceHeight = projects.length * (96 + 24)
  useLayoutEffect(() => {
    if ($container.current) {
      $container && setPageHeight(instanceHeight * 4)
    }
  }, [setPageHeight, projects.length, instanceHeight])

  const windowHeight = InnerHeight(-1)
  const diffMargin = windowHeight / 2 - instanceHeight / 2
  const { scrollY } = useScroll()

  const instanceOffset = [-instanceHeight, 0, instanceHeight]

  const setTransformValue = (offset: number) => {
    const transform = useTransform(
      scrollY,
      [0, pageHeight],
      [0 + offset, -pageHeight + offset],
    )
    const spring = useSpring(transform, {
      damping: 13,
      mass: 0.1,
      stiffness: 55,
    })
    return spring
  }

  const spring = [
    setTransformValue(instanceOffset[0]),
    setTransformValue(instanceOffset[1]),
    setTransformValue(instanceOffset[2]),
  ]

  useEffect(() => {
    console.log({ windowHeight, pageHeight })
  }, [windowHeight, pageHeight])

  return (
    <>
      <div className='m-container relative flex w-screen'>
        <div className='m-container fixed w-full overflow-hidden overscroll-y-none will-change-transform'>
          {/* <div className='flex h-full w-full flex-col items-center'> */}
          <div className='block h-full w-full'>
            <Instances
              projects={projects}
              $container={$container}
              spring={spring}
              diffMargin={diffMargin}
              instanceHeight={instanceHeight}
            />
          </div>
        </div>
        <div className='w-full' style={{ height: pageHeight }} />
      </div>
    </>
  )
}

const Instances = ({
  projects,
  $container,
  spring,
  diffMargin,
}: {
  projects: tProject[]
  $container: RefObject<HTMLDivElement>
  spring: MotionValue<any>[]
  diffMargin: number
  instanceHeight: number
}) => {
  const $Ins1 = createRef<any>()
  const $Ins2 = createRef<any>()
  const $Ins3 = createRef<any>()

  return (
    <motion.div
      className='relative w-full'
      ref={$container}
      style={{ /*y: spring,*/ top: diffMargin }}
    >
      <Instance
        projects={projects}
        ref={$Ins1}
        style={{ top: 0, y: spring[0], backgroundColor: '#440000' }}
      />
      {/* <div className='h-1 w-full bg-green-500'>
        <p>Divider</p>
      </div> */}
      <Instance
        projects={projects}
        ref={$Ins2}
        style={{ top: 0, y: spring[1], backgroundColor: '#004400' }}
      />
      {/* <div className='h-1 w-full bg-green-500'>
        <p>Divider</p>
      </div> */}
      <Instance
        projects={projects}
        ref={$Ins3}
        style={{ top: 0, y: spring[2], backgroundColor: '#000044' }}
      />
    </motion.div>
  )
}

const Instance = forwardRef(
  (
    { projects, style }: { projects: tProject[]; style?: any },
    ref: ForwardedRef<unknown> | undefined,
  ) => {
    return (
      <>
        <motion.div
          className='absolute flex w-full flex-col items-center'
          ref={ref as RefObject<HTMLDivElement>}
          // style={{ top: 0 }}
          // style={...style}
        >
          {projects.map((v: any, i: number) => (
            <>
              <Project project={v} i={i} key={v.title} />
              {i === Math.floor(projects.length / 2) && (
                <div className='h-px w-full bg-red-500'>
                  <p>Middle</p>
                </div>
              )}
            </>
          ))}
        </motion.div>
      </>
    )
  },
)

Instance.displayName = 'Instance'

const Project = ({ project, i }: { project: tProject; i: number }) => {
  return (
    <>
      <Link
        href={'/project/' + project.slug}
        className='Anim-1 AnimOpacity-40 AnimSaturate-0 my-3 h-24 w-2/5'
      >
        <motion.div
          initial={{ visibility: 'hidden', y: 50, opacity: 0 }}
          animate={{ visibility: 'visible', y: 0, opacity: 1 }}
          transition={{ delay: 0.5 + i * 0.12 }}
          className=' h-full w-full'
        >
          <div className='relative h-full w-full overflow-hidden rounded-xl'>
            <Image
              src={project.coverImage.url}
              alt={project.title}
              objectFit='cover'
              fill
            />
          </div>
        </motion.div>
      </Link>
    </>
  )
}

export default Client
