import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { app } from '@config'
import IceJIlogo from 'views/assets/logo/IceJIlogoS'
import RealMotionS from 'views/assets/logo/RealMotionS'

export default function about({
  toggleAbout,
  setToggleAbout,
}: {
  toggleAbout: boolean
  setToggleAbout: any
}) {
  return (
    <>
      <AnimatePresence>
        {toggleAbout && (
          <motion.div
            initial={{ y: '80%', opacity: 0 }}
            exit={{ y: '80%', opacity: 0 }}
            animate={{
              y: toggleAbout ? 0 : '80%',
              opacity: toggleAbout ? 1 : 0,
            }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
            className='fixed z-90 flex h-screen w-screen items-center justify-center'
            onClick={() => setToggleAbout(false)}
          >
            <div className="h-[182px] w-[339px] overflow-hidden rounded-md bg-[url('/gui/SplashBG.png')] bg-cover drop-shadow-xl md:h-[363px] md:w-[677px]">
              <div className='h-full w-[150px] bg-[#BC3539]/30 text-white backdrop-blur-md md:w-1/3'>
                <div className='flex h-full flex-col justify-between p-5 md:py-10 md:pl-10'>
                  <div className='hidden md:block'>
                    <IceJIlogo fill='#FFF' />
                  </div>
                  <div>
                    <h4 className='text-1xs md:text-xs'>
                      TheIceJI {app.VERSION}
                    </h4>
                    <h6 className='text-1xs font-light opacity-90 md:text-xs'>
                      {app.UPDATE_DATE}
                    </h6>
                  </div>
                  <p className='text-2xs font-light opacity-60 md:text-1xs'>
                    Engine:
                    <br />
                    DyedIn UI 1.2 | IJN App 3.2
                    <br />
                    React 18.2.0 | NextJs 13.1.0
                    <br />
                    Copyright&#169;TheIceJI.com <br />
                    All rights reserved
                    <Link passHref href='/changelog'>
                      <p className='text-2xs font-light opacity-80 hover:opacity-100 md:text-1xs cursor-pointer'>
                        changelog
                      </p>
                    </Link>
                  </p>

                  <div className='hidden md:block'>
                    <RealMotionS fill='#FFF' />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
