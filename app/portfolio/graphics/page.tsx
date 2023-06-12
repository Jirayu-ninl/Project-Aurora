'use client'

import { useEffect } from 'react'
import { State } from '@global/store'
import Header from './components/header'
import {
  SmoothScroll,
  tCallbackReturnValue,
} from '@aurora/libs/hooks/animations'
import TableOfContents from './components/tableOfContents'
import Content from './contents'

function Page() {
  const _setNavRouteActiveState = State((state) => state.setNavRouteActiveState)

  useEffect(() => {
    _setNavRouteActiveState({
      id: 0,
      scrollProgress: 0,
    })
  }, [_setNavRouteActiveState])

  const handleProgress = ({ motionValue }: tCallbackReturnValue) => {
    _setNavRouteActiveState({
      id: 0,
      scrollable: true,
      motionValue: motionValue,
    })
  }

  return (
    <>
      <SmoothScroll
        Callback={handleProgress}
        physics={{ damping: 1, mass: 0.01, stiffness: 5 }}
      >
        <Header
          Title='Portfolio (Post-production)'
          Img='/page/portfolio/header.jpg'
          Tags={[]}
          lang='th'
        />
        <div className='flex w-screen'>
          <div className='container px-4 py-12 sm:px-8 sm:py-24 md:px-12 lg:py-48 xl:w-[1024px]'>
            <TableOfContents />
            <Content />
          </div>
        </div>
      </SmoothScroll>
    </>
  )
}

export default Page
