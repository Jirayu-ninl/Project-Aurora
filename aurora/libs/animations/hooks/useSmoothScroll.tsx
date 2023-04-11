import {
  useRef,
  useState,
  useCallback,
  useLayoutEffect,
  useEffect,
} from 'react'
import { ResizeObserver } from '@juggle/resize-observer'
import { useScroll, useTransform, useSpring, motion } from 'framer-motion'

const UseSmoothScroll = ({
  children,
  physics = { damping: 13, mass: 0.1, stiffness: 55 },
  Callback,
}) => {
  // const defaultPhysics = { damping: 15, mass: 0.27, stiffness: 55 }
  const scrollRef = useRef(null)
  const [pageHeight, setPageHeight] = useState(0)

  const resizePageHeight = useCallback((entries) => {
    for (const entry of entries) {
      setPageHeight(entry.contentRect.height)
    }
  }, [])

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) =>
      resizePageHeight(entries),
    )
    scrollRef && resizeObserver.observe(scrollRef.current)
    return () => resizeObserver.disconnect()
  }, [scrollRef, resizePageHeight])

  const { scrollY } = useScroll()

  const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight])
  const spring = useSpring(transform, physics)

  if (Callback) {
    Callback(pageHeight)
  }

  return (
    <>
      <motion.div
        ref={scrollRef}
        style={{ y: spring }}
        className='fixed top-0 left-0 w-full overflow-hidden overscroll-y-none will-change-transform'
      >
        {children}
      </motion.div>
      <div style={{ height: pageHeight }} />
    </>
  )
}

export default UseSmoothScroll

import { useWindowSize } from '@libs/hooks'

export function Legacy({ children }) {
  const size = useWindowSize()
  const refApp = useRef(null)
  const refScroll = useRef(null)

  const scrollConfig = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  }

  useEffect(() => {
    requestAnimationFrame(() => skewScrolling())
    return skewScrolling()
  })

  useLayoutEffect(() => {
    setBodyHeight()
  }, [size.height])

  const setBodyHeight = () => {
    document.body.style.height = `${
      refScroll.current.getBoundingClientRect().height
    }px`
  }

  const skewScrolling = () => {
    scrollConfig.current = window.scrollY
    scrollConfig.previous +=
      (scrollConfig.current - scrollConfig.previous) * scrollConfig.ease
    scrollConfig.rounded = Math.round(scrollConfig.previous * 100) / 100
    const difference = scrollConfig.current - scrollConfig.rounded
    const acceleration = difference / size.width
    const velocity = +acceleration
    const skew = velocity * 7.5
    refScroll.current.style.transform = `translate3d(0, -${scrollConfig.rounded}px, 0) skewY(${skew}deg)`
    requestAnimationFrame(() => skewScrolling())
  }

  console.log(size)
  return (
    <div
      ref={refApp}
      className='fixed top-0 left-0 h-screen w-screen overflow-hidden'
    >
      <div ref={refScroll}>{children}</div>
    </div>
  )
}
