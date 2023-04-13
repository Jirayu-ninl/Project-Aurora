import { useState } from 'react'
import Router from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'
// Components
import { UI } from '@store'
import { navRoutes, navRouteType } from '../routes'
// CSS
import { navCanvas as CSS } from '../styles'

export default function Canvas({
  toggleMenu,
  setToggleMenu,
}: {
  toggleMenu: boolean
  setToggleMenu: any
}) {
  const _setCursor = UI((state) => state.setCursor)
  const [MenuHover, setMenuHover] = useState('')

  const handleLink = (url: string) => {
    setToggleMenu(false)
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
        {toggleMenu && (
          <div className='fixed top-4 left-0 z-70 h-screen w-screen overflow-hidden px-5 pb-8'>
            <motion.div
              initial={{ y: '-100%' }}
              exit={{ y: '-100%' }}
              animate={{ y: toggleMenu ? 0 : '-100%' }}
              key='Nav_Canvas'
              transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
              className='relative h-full overflow-hidden rounded-md bg-black/20 shadow-xl backdrop-blur-lg'
            >
              <div className='absolute flex h-full w-full items-center justify-center'>
                <motion.div
                  variants={parent}
                  initial='initial'
                  animate='animate'
                  exit='exit'
                >
                  {navRoutes.map((route: navRouteType) => (
                    <motion.a
                      className={CSS.CanvasMenuItem}
                      key={route.id}
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
                      <motion.h6>{route.number}</motion.h6>
                      <motion.h1>{route.title}</motion.h1>
                    </motion.a>
                  ))}
                </motion.div>
              </div>
              <div className={CSS.bgText}>
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
