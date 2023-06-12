/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

// import { useEffect } from 'react'
import { BlogContentRaw, Header } from './components'
import { State, UI } from '@global/store'
// import { Footer } from '@global/layout/components/footer'
import {
  SmoothScroll,
  tCallbackReturnValue,
} from '@aurora/libs/hooks/animations/index'
import { /* ScrollProgress, */ FloatingShare } from './func'

export default function Blog({ content }: { content: any }) {
  const basePath = 'https://theiceji.com/post/'
  const shareMedia = content.title + '|' + content.tagline

  const _setNavRouteActiveState = State((state) => state.setNavRouteActiveState)
  // const _setFooterOption = UI((state) => state.setFooterOption)
  // const _setShowFooter = UI((state) => state.setShowFooter)
  const _gpuTier = UI((state) => state.gpuTier)

  // useEffect(() => {
  //   _setFooterOption({ fixed: false })
  //   _setShowFooter(false)
  // }, [_setFooterOption, _setShowFooter])

  const handleScroll = ({ motionValue }: tCallbackReturnValue) => {
    _setNavRouteActiveState({
      id: 2,
      scrollable: true,
      motionValue: motionValue,
    })
  }

  return (
    <>
      {/* <ScrollProgress /> */}
      <FloatingShare
        slug={content.slug}
        basePath={basePath}
        shareMedia={shareMedia}
      />
      <MobileLayout isMobile={_gpuTier?.isMobile} handleScroll={handleScroll}>
        <Header
          Title={content.title}
          Img={content.coverImage.url}
          Tags={content.tag}
          lang='th'
        />
        <div className='flex w-screen'>
          <div className='container px-4 py-48 xl:w-[1024px]'>
            <BlogContentRaw RAW={content.content.raw.children} />
          </div>
        </div>
        {/* <Footer /> */}
      </MobileLayout>
    </>
  )
}

const MobileLayout = ({
  children,
  isMobile,
  handleScroll,
}: {
  children: React.ReactNode
  isMobile?: boolean
  handleScroll: (v: tCallbackReturnValue) => void
}) => {
  if (!isMobile) {
    return <SmoothScroll Callback={handleScroll}>{children}</SmoothScroll>
  } else {
    return <>{children}</>
  }
}
