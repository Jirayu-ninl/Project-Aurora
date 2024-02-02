'use client'

import { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { useRouter } from 'next/navigation'
import { motion, animate, AnimatePresence } from 'framer-motion'
import { useGLTF } from '@react-three/drei'

import { UI, State } from '@global/store'

import IceJiLoadingLogo from '@components/logo/IceJiLoading'
import { IceJiLogo } from '@components/logo/IceJi'

export default function Home() {
  const _setShowNav = UI((state) => state.setShowNav)
  const _setShowFooter = UI((state) => state.setShowFooter)
  const _setAudio = UI((state) => state.setAudio)
  const _setCursor = UI((state) => state.setCursor)
  const _setNavRouteActiveState = State((state) => state.setNavRouteActiveState)

  const router = useRouter()
  const [progress, setProgress] = useState('0')
  const [isLoaded, setIsLoaded] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [isPush, setIsPush] = useState(false)

  useGLTF.preload('/three/model/desCube/model.glb')

  useEffect(() => {
    _setShowNav(false)
    _setShowFooter(false)
    router.prefetch('/home')

    if (isClicked) {
      _setShowNav(true)
      _setShowFooter(true)
      _setAudio(true)
      _setNavRouteActiveState({
        id: 0,
        scrollProgress: 0,
        pages: 1,
        scrollable: false,
      })
      const Go = () => {
        setTimeout(() => setIsPush(true), 100)
        setTimeout(() => {
          _setCursor(false)
          router.push('/home')
        }, 600)
      }
      Go()
    }
  }, [
    _setShowNav,
    _setShowFooter,
    _setAudio,
    _setCursor,
    router,
    isClicked,
    _setNavRouteActiveState,
  ])

  useEffect(() => {
    const controls = animate(0, 100, {
      duration: 1.5,
      ease: [0.33, 1, 0.68, 1],
      onUpdate(value: number) {
        setProgress(value.toFixed(0))
      },
    })
    return () => controls.stop()
  }, [])

  setTimeout(() => setIsLoaded(true), 1500)

  return (
    <AnimatePresence>
      {!isPush ? (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.33, 1, 0.68, 1],
            delay: 0,
          }}
          className='relative flex h-screen w-screen items-center justify-center overflow-hidden bg-white dark:bg-black'
        >
          <div className='flex h-[330px] flex-col justify-between'>
            <LogoBlock isLoaded={isLoaded} />
            <ProgressBlock
              isLoaded={isLoaded}
              progress={progress}
              setIsClicked={setIsClicked}
              _setCursor={_setCursor}
            />
          </div>
        </motion.main>
      ) : (
        <main></main>
      )}
    </AnimatePresence>
  )
}

const LogoBlock = ({ isLoaded }: { isLoaded: boolean }) => (
  <div className='mb-8 h-48 w-48 overflow-visible'>
    <div className='relative w-full'>
      <motion.div
        className='absolute'
        animate={{ opacity: 0.1 }}
        initial={{ opacity: 0 }}
        transition={{
          duration: 1.5,
          ease: [0.33, 1, 0.68, 1],
          delay: 2.5,
        }}
      >
        <IceJiLogo dark={true} />
      </motion.div>
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            className='absolute'
            animate={{ strokeDasharray: 1000 }}
            initial={{ strokeDasharray: 50 }}
            transition={{
              duration: 15,
              ease: [0.33, 1, 0.68, 1],
            }}
          >
            <IceJiLoadingLogo
              dark={true}
              style={{ gap: 20 }}
              fillInner={false}
              pathClassName='stroke-primary-0'
            />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isLoaded && (
          <motion.div
            className='absolute'
            animate={{ strokeDasharray: 50 }}
            initial={{ strokeDasharray: 100 }}
            transition={{
              duration: 1,
              ease: [0.33, 1, 0.68, 1],
              repeat: Infinity,
            }}
          >
            <IceJiLoadingLogo
              dark={true}
              style={{ gap: 40 }}
              fillInner={false}
              glow={true}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </div>
)

const ProgressBlock = ({
  isLoaded,
  progress,
  setIsClicked,
  _setCursor,
}: {
  isLoaded: boolean
  progress: string
  setIsClicked: Dispatch<SetStateAction<boolean>>
  _setCursor: (c: boolean | string) => void
}) => (
  <>
    <AnimatePresence>
      {isLoaded ? (
        <motion.a
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.1 }}
          className='Btn-white-40 Anim AnimOpacity-60 mx-auto mb-auto cursor-pointer uppercase hover:bg-primary-0 hover:text-black hover:shadow-lg hover:shadow-primary-0'
          onClick={() => setIsClicked(true)}
          // onMouseEnter={() => _setCursor('logo')}
          // onMouseLeave={() => _setCursor(false)}
        >
          Start journey
        </motion.a>
      ) : (
        <motion.div
          className='w-full'
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ duration: 0.1 }}
        >
          <h6 className='w-full text-center text-4xl font-semibold'>
            {progress}%
          </h6>
          <div className='mb-3 mt-5 h-[10px] w-full rounded-md'>
            <motion.div
              className='m-0.5 h-[4px] rounded-md bg-primary-0'
              animate={{ width: '100%' }}
              initial={{ width: 0 }}
              transition={{
                duration: 1.5,
                ease: [0.33, 1, 0.68, 1],
              }}
            ></motion.div>
          </div>
          <p className='w-full text-center text-xs'>Loading your experience</p>
        </motion.div>
      )}
    </AnimatePresence>
  </>
)
