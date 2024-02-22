import React from 'react'
import { motion } from 'framer-motion'
import { UI } from '@global/store'
import { aFooter } from '@global/config/defineAnimationConfig'

export function Footer() {
  const { initial, animate, transition } = aFooter
  const _modalAppInfo = UI((state) => state.modalAppInfo)
  const _setModalAppInfo = UI((state) => state.setModalAppInfo)

  return (
    <div className='fixed bottom-0 left-0 flex flex-col items-center justify-center px-5 py-3'>
      <div className='mt-2 flex items-center text-xs md:mt-0 md:text-base'>
        <motion.p
          initial={initial}
          animate={animate}
          transition={transition(1)}
        >
          <a
            className='Anim AnimOpacity-60 cursor-pointer pr-2'
            onClick={() => {
              _setModalAppInfo(!_modalAppInfo)
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
