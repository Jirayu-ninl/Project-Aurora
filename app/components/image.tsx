'use client'

import { motion } from 'framer-motion'
import NextImage from 'next/image'
import clsx from 'clsx'

type tImgProps = {
  src: string
  className: string
  absolute?: boolean
  alt?: string
  objectFit: 'contain' | 'cover'
  objectPosition?: string
  events?: any
  motion?: boolean
  delay?: number
}

const Image = (p: tImgProps) => {
  if (p.motion) {
    return (
      <motion.div
        className={clsx(p.className, p.absolute ? 'absolute' : 'relative')}
        {...p.events}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: 'easeIn', delay: p.delay ?? 0 }}
      >
        <NextImage
          src={p.src}
          alt={p.alt ?? 'Collective Blooms'}
          fill
          style={{
            objectFit: p.objectFit ?? 'cover',
            objectPosition: p.objectPosition ?? '50% 50%',
          }}
        />
      </motion.div>
    )
  }
  return (
    <div
      className={clsx(p.className, p.absolute ? 'absolute' : 'relative')}
      {...p.events}
    >
      <NextImage
        src={p.src}
        alt={p.alt ?? 'Collective Blooms'}
        fill
        style={{
          objectFit: p.objectFit ?? 'cover',
          objectPosition: p.objectPosition ?? '50% 50%',
        }}
      />
    </div>
  )
}

export { Image }
