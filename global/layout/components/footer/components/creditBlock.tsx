import { motion } from 'framer-motion'
import { UI } from '@global/store'
import { aFooter } from '@global/config/defineAnimationConfig'

export default function CreditText() {
  const _modalAppInfo = UI((state) => state.modalAppInfo)
  const _setModalAppInfo = UI((state) => state.setModalAppInfo)

  return (
    <div className='mt-2 flex items-center text-xs md:mt-0 md:text-base'>
      <motion.p
        initial={aFooter.initial}
        animate={aFooter.animate}
        transition={aFooter.transition(0.2)}
      >
        <button
          className='Anim AnimOpacity-60 cursor-pointer pr-2'
          onClick={() => {
            _setModalAppInfo(!_modalAppInfo)
          }}
        >
          TheIceJI Aurora
        </button>
        <span className='hidden opacity-40 md:inline-flex'>
          | Copyright©{new Date().getFullYear()} by{' '}
        </span>
        <a
          href='http://TheIceJI.com/home'
          className='Anim AnimOpacity-60 hidden md:inline-flex'
        >
          Jirayu Ninlapun
        </a>
      </motion.p>
    </div>
  )
}
