import { motion } from 'framer-motion'
import { UI } from '@app/store'
import { aFooter } from '@app/config/defineAnimationConfig'

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
        <a
          className='Anim AnimOpacity-60 cursor-pointer pr-2'
          onClick={() => {
            _setModalAppInfo(!_modalAppInfo)
          }}
        >
          TheIceJI Aurora
        </a>
        <span className='opacity-40'>
          | Copyright©{new Date().getFullYear()} by{' '}
        </span>
        <a href='http://TheIceJI.com/home' className='Anim AnimOpacity-60'>
          Jirayu Ninlapun
        </a>
      </motion.p>
    </div>
  )
}
