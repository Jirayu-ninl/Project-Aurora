import React from 'react'
import { motion } from 'framer-motion'
import { UI } from '@store'
import { config as animationConfig } from 'views/animations'

export function Footer() {
  const { Init, Animated, transition } = animationConfig.footerAnimation
  const _appInfo = UI((state) => state.appInfo)
  const _setAppInfo = UI((state) => state.setAppInfo)

  return (
    <div className='fixed bottom-0 left-0 flex flex-col items-center justify-center py-3 px-5'>
      <div className='mt-2 flex items-center text-xs md:mt-0 md:text-base'>
        <motion.p initial={Init} animate={Animated} transition={transition(1)}>
          <a
            className='Anim AnimOpacity-60 cursor-pointer pr-2'
            onClick={() => {
              _setAppInfo(!_appInfo)
            }}
          >
            TheIceJI Next
          </a>
          <span className='opacity-40'>
            | Copyright©{new Date().getFullYear()} by{' '}
          </span>
          <a href='http://TheIceJI.com/home' className='Anim AnimOpacity-60'>
            Jirayu Ninlapun
          </a>
        </motion.p>
      </div>
    </div>
  )
}
