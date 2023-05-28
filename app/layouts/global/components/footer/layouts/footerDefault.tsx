'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { contacts as contactsRaw } from '@app/config'
import { SocialLinkIcon } from '../components'
import { UI } from '@app/store'

export default function Footer() {
  const _setCursor = UI((state) => state.setCursor)
  const _showFooter = UI((state) => state.showFooter)
  const _setModalAppInfo = UI((state) => state.setModalAppInfo)
  const _modalAppInfo = UI((state) => state.modalAppInfo)

  const footerAnimation: any = {
    Init: { visibility: 'hidden', y: 100 },
    Animated: { visibility: 'visible', y: 0 },
    transition: (delay: number) => ({ delay: delay }),
  }
  const { Init, Animated, transition } = footerAnimation

  const contacts = [
    contactsRaw.facebook,
    contactsRaw.instagram,
    contactsRaw.youtube,
    contactsRaw.mail,
    contactsRaw.discord,
  ]

  return (
    <>
      <AnimatePresence>
        {_showFooter && (
          <motion.div
            // initial={{ y: '100%' }}
            // exit={{ y: '100%' }}
            // animate={{ y: !toggleMenu ? 0 : '100%' }}
            // transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
            className='fixed bottom-0 left-0 z-10 flex w-screen flex-col items-center justify-between px-5 py-3 md:flex-row'
          >
            <div
              className='flex items-center space-x-4 md:space-x-7'
              onMouseEnter={() => {
                _setCursor('logo')
              }}
              onMouseLeave={() => {
                _setCursor(false)
              }}
              onClick={() => {
                _setCursor(false)
              }}
            >
              {contacts.map((v, i) => (
                <SocialLinkIcon
                  name={v.name}
                  icon={v.icon}
                  link={v.link}
                  animationDelay={i === 0 ? 0 : i / 10}
                  // animationDelay={0.3}
                  key={i}
                />
              ))}
            </div>
            <div className='mt-2 flex items-center text-xs md:mt-0 md:text-base'>
              <motion.p
                initial={Init}
                animate={Animated}
                transition={transition(0.2)}
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
                <a
                  href='http://TheIceJI.com/home'
                  className='Anim AnimOpacity-60'
                >
                  Jirayu Ninlapun
                </a>
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
