'use client'

import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

import { AuroraLogo } from '@app/components/logo/Aurora'
import { CivitLogo } from '@app/components/logo/Civit'
import { NexelLogo } from '@app/components/logo/Nexel'
import { ArtScapeLogo } from '@app/components/logo/ArtScape'
import { AlorusLogo } from '@app/components/logo/Alorus'
import { RealMotionLogo } from '@app/components/logo/RealMotion'

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
                <Link
                  href='https://aurora.theiceji.com/'
                  className='Anim AnimOpacity-20 '
                >
                  <AnimatedLogo
                    transitionDelay={0 + initialDelay}
                    className='h-8 fill-black hover:cursor-pointer dark:fill-white md:h-full'
                  >
                    <AuroraLogo brandColor />
                  </AnimatedLogo>
                </Link>
                <Link
                  href='https://civitai.com/'
                  className='Anim AnimOpacity-20 '
                >
                  <AnimatedLogo
                    transitionDelay={0.1 + initialDelay}
                    className='h-full fill-black py-1 hover:cursor-pointer dark:fill-white'
                  >
                    <CivitLogo brandColor />
                  </AnimatedLogo>
                </Link>
                <Link
                  href='https://www.nexellab.com/'
                  className='Anim AnimOpacity-20 '
                >
                  <AnimatedLogo
                    transitionDelay={0.2 + initialDelay}
                    className='h-full fill-black py-1 hover:cursor-pointer dark:fill-white'
                  >
                    <NexelLogo brandColor />
                  </AnimatedLogo>
                </Link>
                <Link
                  href='https://www.artscape.day/'
                  className='Anim AnimOpacity-20 '
                >
                  <AnimatedLogo
                    transitionDelay={0.3 + initialDelay}
                    className='my-4 h-4 fill-black hover:cursor-pointer dark:fill-white md:my-0 md:h-full'
                  >
                    <ArtScapeLogo brandColor />
                  </AnimatedLogo>
                </Link>
                <Link
                  href='https://alorus.network/'
                  className='Anim AnimOpacity-20 '
                >
                  <AnimatedLogo
                    transitionDelay={0.4 + initialDelay}
                    className='h-full fill-black hover:cursor-pointer dark:fill-white'
                  >
                    <AlorusLogo brandColor />
                  </AnimatedLogo>
                </Link>
                <Link
                  href='http://realmotion.co/'
                  className='Anim AnimOpacity-20 '
                >
                  <AnimatedLogo
                    transitionDelay={0.5 + initialDelay}
                    className='my-2 h-6 fill-black hover:cursor-pointer dark:fill-white md:my-0 md:h-full'
                  >
                    <RealMotionLogo brandColor />
                  </AnimatedLogo>
                </Link>
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
