import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import {
  FacebookShareButton,
  TwitterShareButton,
  PinterestShareButton,
} from 'next-share'

const FloatingShare = ({ slug, basePath, shareMedia }) => {
  const [Show, setShow] = useState(false)
  const projectURL = basePath + slug

  const animList = {
    initial: { x: 100 },
    animate: {
      x: 0,
      transition: {
        when: 'beforeChildren',
        delay: 0.3,
        staggerChildren: 0.3,
      },
    },
    exit: { opacity: 0 },
  }

  const animItem = {
    initial: { y: 30, opacity: 0, scale: 0 },
    animate: { y: 0, opacity: 1, scale: 1 },
    exit: { y: 30, opacity: 0, scale: 0 },
    transition: { type: 'tween' },
  }

  return (
    <motion.div
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      initial='initial'
      animate='animate'
      exit='exit'
      variants={animList}
      className='fixed right-6 bottom-6 z-10 flex flex-col items-center'
    >
      <AnimatePresence>
        {Show && (
          <>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 0.6 }}
              className='fixed right-20 bottom-9'
            >
              Click to Scroll top
            </motion.p>
            <FacebookShareButton url={projectURL} hashtag={'theiceji'}>
              <motion.button
                variants={animItem}
                className='Anim-2 z-30 mb-4 flex h-8 w-8 rounded-full bg-black drop-shadow-lg hover:bg-blue-600'
                key='Fs_facebook'
              >
                <FontAwesomeIcon
                  icon={brands('facebook-f')}
                  size='xs'
                  className='m-auto h-4'
                />
              </motion.button>
            </FacebookShareButton>
            <TwitterShareButton
              url={projectURL}
              title={shareMedia}
              hashtags={['theiceji']}
            >
              <motion.button
                variants={animItem}
                className='Anim AnimScale-2 z-20 mb-4 flex h-8 w-8 rounded-full bg-black drop-shadow-lg hover:bg-sky-500'
                key='Fs_twitter'
              >
                <FontAwesomeIcon
                  icon={brands('twitter')}
                  size='xs'
                  className='m-auto h-4'
                />
              </motion.button>
            </TwitterShareButton>
            <PinterestShareButton url={projectURL} media={shareMedia}>
              <motion.button
                variants={animItem}
                className='Anim AnimScale-2 z-10 mb-4 flex h-8 w-8 rounded-full bg-black drop-shadow-lg hover:bg-red-500'
                key='Fs_google'
              >
                <FontAwesomeIcon
                  icon={brands('pinterest-p')}
                  size='xs'
                  className='m-auto h-4'
                />
              </motion.button>
            </PinterestShareButton>
          </>
        )}
      </AnimatePresence>
      <button
        className='Anim z-40 flex h-12 w-12 rounded-full bg-black drop-shadow-lg hover:bg-indigo-500 focus:border-0'
        onClick={() => window.scrollTo(0, 0)}
      >
        {!Show ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='10'
            height='12'
            viewBox='0 0 10 12'
            className='m-auto scale-150'
          >
            <g data-name='Arrow - Right 2' transform='translate(-1 1)'>
              <path
                d='M9.086,7.062a.435.435,0,0,1-.026.493,13.057,13.057,0,0,1-1.436,1.62,5.369,5.369,0,0,1-.559.479A1.723,1.723,0,0,1,6.006,10a1.855,1.855,0,0,1-1.14-.368c-.057-.056-.308-.268-.513-.468A21.777,21.777,0,0,1,.33,3.341,4.49,4.49,0,0,1,0,2.161a1.938,1.938,0,0,1,.217-.9,1.866,1.866,0,0,1,.9-.79A9.271,9.271,0,0,1,2.188.213,17.671,17.671,0,0,1,4.457,0a.463.463,0,0,1,.41.214Z'
                transform='translate(1 11) rotate(-90)'
                fill='#fff'
              />
              <path
                d='M.476,0C1.318.037,2.06.1,2.612.175A7.427,7.427,0,0,1,3.934.521,1.778,1.778,0,0,1,4.926,2.1v.055a4.5,4.5,0,0,1-.41,1.326,13.808,13.808,0,0,1-.894,1.685.459.459,0,0,1-.778.007L.065.668A.443.443,0,0,1,.476,0Z'
                transform='translate(1.005 3.925) rotate(-90)'
                fill='#fff'
                opacity='0.4'
              />
            </g>
          </svg>
        ) : (
          <FontAwesomeIcon icon={solid('angle-up')} className='m-auto h-6' />
        )}
      </button>
    </motion.div>
  )
}

export default FloatingShare
