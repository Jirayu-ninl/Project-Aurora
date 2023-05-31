import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Store from './store'

const Overlay = () => {
  const projects = Store((state) => state.projects)
  const clicked = Store((state) => state.clicked)
  const contentInit = {
    title: '',
    tag: [''],
    tagline: '',
    slug: '',
  }
  const content = clicked === null ? contentInit : projects[clicked]

  return (
    <>
      <div className='flex flex-col items-center pt-24 sm:pt-32 md:pt-36 lg:pt-40 xl:pt-20 xxl:pt-24'>
        <AnimatePresence>
          {clicked !== null && (
            <>
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.3,
                }}
                className='text-sm uppercase md:text-lg lg:text-xl'
                key='Title_tagline'
              >
                {content.tagline}
              </motion.h2>
              <motion.h1
                initial={{ scaleX: 0.8, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                exit={{ scaleX: 0.8, opacity: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className='x;:text-8xl text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-7xl xxl:text-9xl'
                key='Title_title'
              >
                {content.title}
              </motion.h1>
            </>
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {clicked !== null && (
          <div
            className='pointer-events-auto cursor-pointer pb-32 md:pb-24 xl:pb-12 xxl:pb-24'
            key='Btn_view'
          >
            <Link href={'/project/' + content.slug} passHref>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.5,
                }}
                className='Btn-white-40 overflow-hidden'
              >
                <motion.p
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  exit={{ y: 100 }}
                  transition={{
                    delay: 0.1,
                    duration: 0.5,
                  }}
                >
                  View project
                </motion.p>
              </motion.button>
            </Link>
          </div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {clicked !== null && (
          <div
            className='absolute right-5 bottom-10 hidden flex-col items-end md:flex xxl:right-16 xxl:bottom-16'
            key='Footer_detail'
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='mb-3 flex space-x-6 pr-1'
            >
              <Arrow left />
              <Arrow />
            </motion.div>
            {/* <div className='h-1 w-8 my-2 bg-white' /> */}
            <div className='overflow-hidden'>
              <motion.h3
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                exit={{ y: 100 }}
                transition={{ duration: 0.5 }}
                className='text-xs uppercase tracking-[0.1rem] opacity-60 xxl:text-base'
              >
                {content.tag[0] ? content.tag[0] : ''}
              </motion.h3>
            </div>
            <div className='overflow-hidden'>
              <motion.h4
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                exit={{ y: 100 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='-mt-1 text-xs uppercase tracking-[0.1rem] opacity-80 xxl:text-base'
              >
                {content.title}
              </motion.h4>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

const Arrow = ({ left = false }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='9.195'
      height='16.39'
      viewBox='0 0 9.195 16.39'
      className={left && 'rotate-180'}
    >
      <path
        d='M-11983.253,5011.845l6.781,6.781-6.781,6.781'
        transform='translate(11984.667 -5010.431)'
        fill='none'
        stroke='#fff'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
      />
    </svg>
  )
}

export default Overlay
