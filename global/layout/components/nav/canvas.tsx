'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'
// Components
import { UI } from '@global/store'
import { navPrimaryRoutes } from '@global/config/routes'
// CSS
import { navCanvas as CSS } from './styles'
// Footer
import { FooterMobile } from '../footer'

const NavCanvas = () => {
  const _setCursor = UI((state) => state.setCursor)
  const _dark = UI((state) => state.dark)
  const _navShowCanvas = UI((state) => state.navShowCanvas)
  const _setNavShowCanvas = UI((state) => state.setNavShowCanvas)
  const [MenuHover, setMenuHover] = useState('')

  const Router = useRouter()

  const handleLink = (url: string) => {
    _setNavShowCanvas(false)
    _setCursor(false)
    setTimeout(() => {
      setMenuHover('')
      Router.push(url)
    }, 1000)
  }

  // Motion
  const parent = {
    animate: { transition: { staggerChildren: 0.3, delayChildren: 0 } },
  }

  const titleSlideUp = {
    initial: { y: 1000 },
    animate: { y: 0 },
  }

  const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] }

  return (
    <>
      <AnimatePresence>
        {_navShowCanvas && (
          <div className='m-nav-canvas fixed left-0 top-4 z-[350] w-screen overflow-hidden px-5 pb-8 md:h-screen'>
            <motion.div
              initial={{ y: '-100%' }}
              exit={{ y: '-100%' }}
              animate={{ y: _navShowCanvas ? 0 : '-100%' }}
              key='Nav_Canvas'
              transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
              className='relative h-full overflow-hidden rounded-md bg-white/20 shadow-xl backdrop-blur-lg dark:bg-black/20'
            >
              <div className='absolute flex h-full w-full items-center justify-center'>
                <motion.div
                  variants={parent}
                  initial='initial'
                  animate='animate'
                  exit='exit'
                >
                  {navPrimaryRoutes.map(
                    (route: (typeof navPrimaryRoutes)[0], id: number) => (
                      <motion.a
                        className={clsx(
                          CSS.CanvasMenuItem,
                          _dark && CSS.CanvasMenuItem_dark,
                        )}
                        key={id}
                        onClick={() => handleLink(`${route.path}`)}
                        onMouseEnter={() => {
                          _setCursor('go'), setMenuHover(route.title)
                        }}
                        onMouseLeave={() => {
                          _setCursor(false), setMenuHover('')
                        }}
                        variants={titleSlideUp}
                        transition={transition}
                      >
                        <motion.h6>0{id + 1}</motion.h6>
                        <motion.h1>{route.title}</motion.h1>
                      </motion.a>
                    ),
                  )}
                </motion.div>
              </div>
              <FooterMobile />
              <div className={clsx(CSS.bgText, _dark && CSS.bgText_dark)}>
                <AnimatePresence>
                  {MenuHover && (
                    <>
                      <motion.h1
                        initial={{ x: '-20%', opacity: 0 }}
                        exit={{ x: '-20%', opacity: 0 }}
                        animate={{ x: MenuHover ? 0 : '-20%', opacity: 0.03 }}
                        transition={{
                          duration: 0.8,
                          ease: [0.6, 0.05, 0.01, 0.9],
                        }}
                      >
                        {MenuHover} {MenuHover}
                      </motion.h1>
                      <motion.h1
                        initial={{ x: '-40%', opacity: 0 }}
                        exit={{ x: '-40%', opacity: 0 }}
                        animate={{
                          x: MenuHover ? '40%' : '-40%',
                          opacity: 0.03,
                        }}
                        transition={{
                          duration: 0.8,
                          delay: 0.1,
                          ease: [0.6, 0.05, 0.01, 0.9],
                        }}
                      >
                        {MenuHover} {MenuHover}
                      </motion.h1>
                    </>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

export { NavCanvas }
