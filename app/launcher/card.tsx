'use client'

import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'
import Image from 'next/image'

export const Card = ({
  children,
  className,
  imageBg,
  routerOn,
  transition,
}: {
  children: React.ReactNode
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
              'h-full w-full overflow-hidden rounded-lg bg-[#1a1a1a] shadow-md shadow-black ',
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
            <div className='relative h-full w-full hover:[&>img]:opacity-100 hover:[&>img]:saturate-100'>
              <div className='pointer-events-none absolute bottom-6 left-6 z-10 rounded-md bg-black/20 px-6 py-2 text-white backdrop-blur-lg'>
                {children}
              </div>
              {imageBg && (
                <Image
                  className='Anim overflow-hidden rounded-lg opacity-10 saturate-0'
                  src={imageBg.src}
                  alt={imageBg.alt}
                  fill
                  style={{ ObjectFit: 'cover' }}
                />
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
