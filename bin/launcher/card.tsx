'use client'

import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'
import Image from 'next/image'

export const Card = ({
  title,
  description,
  className,
  imageBg,
  routerOn,
  transition,
}: {
  title: string
  description: string
  className?: string
  imageBg?: {
    src: string
    alt: string
  }
  routerOn: string | null
  transition: {
    delay: number
  }
}) => {
  return (
    <AnimatePresence>
      {!routerOn && (
        <>
          <motion.div
            className={clsx(
              'h-full w-full overflow-hidden rounded-sm bg-[#1a1a1a] shadow-md shadow-black md:rounded-lg ',
              className,
            )}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{
              duration: 0.3,
              delay: transition.delay,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
          >
            <div className='relative h-full w-full xl:hover:[&>img]:opacity-100 xl:hover:[&>img]:saturate-100'>
              <div className='pointer-events-none absolute bottom-2 left-2 z-10 rounded-sm bg-black/20 px-2 py-1 text-white backdrop-blur-lg md:bottom-4 md:left-4 md:rounded-md md:px-6 md:py-2 xl:bottom-6 xl:left-6'>
                <h1 className='font-bold uppercase md:text-xl'>{title}</h1>
                <h2 className='text-2xs md:text-xs'>{description}</h2>
              </div>
              {imageBg && (
                <Image
                  className='Anim overflow-hidden rounded-sm md:rounded-lg xl:opacity-10 xl:saturate-0'
                  src={imageBg.src}
                  alt={imageBg.alt}
                  fill
                  objectFit='cover'
                />
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
