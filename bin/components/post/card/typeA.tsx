'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { motion, AnimatePresence } from 'framer-motion'

type tCard = {
  title: string
  slug: string
  featured?: boolean
  tagline?: string
  tag: string[]
  coverImage: {
    url: string
    width: number
    height: number
  }
}

type tOptions = {
  showTags?: boolean
}

const Card = ({
  cardData,
  i,
  baseUrl,
  options = {
    showTags: false,
  },
}: {
  cardData: tCard
  i: number
  baseUrl: string
  options?: tOptions
}) => {
  const [hover, setHover] = useState(false)
  return (
    <>
      <Link
        href={baseUrl + cardData.slug}
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
                  className='absolute bottom-0 z-10 m-4 hidden w-[calc(100%-32px)] rounded-lg bg-black/20 p-4 backdrop-blur-lg xl:block'
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className='text-2xl text-white'>{cardData.title}</h3>
                </motion.div>
                {options.showTags && (
                  <>
                    <div className='absolute right-4 top-4 z-10 flex space-x-2'>
                      {cardData.tag.map((v) => (
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
              </>
            )}
          </AnimatePresence>
          <>
            <motion.div
              className='absolute bottom-0 z-10 m-1 w-[calc(100%-8px)] rounded-md bg-black/20 p-1 backdrop-blur-lg lg:m-2 lg:w-[calc(100%-16px)] lg:p-2 xl:hidden'
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className='md:text-xl lg:text-2xl'>{cardData.title}</h3>
            </motion.div>
            {options.showTags && (
              <>
                <div className='absolute right-1 top-1 z-10 flex space-x-1 xl:hidden'>
                  {cardData.tag.map((v) => (
                    <motion.button
                      key={v}
                      className='rounded-sm bg-quaternary-2 px-1 py-px text-2xs text-white dark:bg-primary-0 dark:text-black md:px-2 md:py-1 md:text-xs'
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
          </>
          <Image
            src={cardData.coverImage.url}
            alt={cardData.title}
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

export { Card }
