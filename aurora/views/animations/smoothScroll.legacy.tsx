import { useRef, useLayoutEffect, useEffect } from 'react'
import { useWindowSizeLegacy as useWindowSize } from '@aurora/libs/hooks/layouts'

const SmoothScrollLegacy = ({ children }: { children: React.ReactNode }) => {
  const size = useWindowSize()
  const refApp = useRef(null)
  const refScroll = useRef<any>(null)

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
    if (refScroll.current) {
      document.body.style.height = `${
        refScroll.current.getBoundingClientRect().height
      }px`
    }
  }

  const skewScrolling = () => {
    scrollConfig.current = window.scrollY
    scrollConfig.previous +=
      (scrollConfig.current - scrollConfig.previous) * scrollConfig.ease
    scrollConfig.rounded = Math.round(scrollConfig.previous * 100) / 100
    const difference = scrollConfig.current - scrollConfig.rounded
    const acceleration = size.width
      ? difference / size.width
      : difference / 1000
    const velocity = +acceleration
    const skew = velocity * 7.5
    if (refScroll.current) {
      refScroll.current.style.transform = `translate3d(0, -${scrollConfig.rounded}px, 0) skewY(${skew}deg)`
      requestAnimationFrame(() => skewScrolling())
    }
  }

  console.log(size)
  return (
    <div
      ref={refApp}
      className='fixed left-0 top-0 h-screen w-screen overflow-hidden'
    >
      <div ref={refScroll}>{children}</div>
    </div>
  )
}

export { SmoothScrollLegacy }
