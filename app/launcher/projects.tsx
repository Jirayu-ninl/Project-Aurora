'use client'

import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

import { ProjectList } from './project.list'

export const Project = () => {
  const routerOn = useSearchParams().get('routerOn')
  const initialDelay = 0.8
  return (
    <>
      <AnimatePresence>
        {!routerOn && (
          <>
            <motion.div
              exit={{ y: 100, opacity: 0 }}
              transition={{
                duration: 0.3,
                delay: 0.6,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
              className='w-full'
            >
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 0.8,
                  ease: [0.43, 0.13, 0.23, 0.96],
                }}
                className='pb-4 pt-12 text-center text-xs font-bold uppercase tracking-wide text-primary-0 md:text-left'
              >
                Currently Projects
              </motion.h1>
              <div className='grid h-10 w-full grid-cols-3 gap-x-12 gap-y-6 md:flex md:space-x-8 xl:space-x-12'>
                {ProjectList.map((V, i) => (
                  <>
                    <Link
                      href={V.href}
                      className='Anim AnimOpacity-20'
                      aria-label={V.title}
                    >
                      <AnimatedLogo
                        transitionDelay={0.1 * i + initialDelay}
                        className='h-8 fill-black hover:cursor-pointer dark:fill-white md:h-full'
                      >
                        <V.logo brandColor />
                      </AnimatedLogo>
                    </Link>
                  </>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

const AnimatedLogo = ({
  children,
  className,
  transitionDelay,
}: {
  children: React.ReactNode
  className: string
  transitionDelay: number
}) => {
  return (
    <motion.div
      className={clsx(className)}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      transition={{
        duration: 0.3,
        delay: transitionDelay,
        ease: [0.43, 0.13, 0.23, 0.96],
      }}
    >
      {children}
    </motion.div>
  )
}
