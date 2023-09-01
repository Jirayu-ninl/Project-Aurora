'use client'

import { useState } from 'react'
import { UI } from '@global/store'
import { SetNavStateWithRoutes } from '@aurora/views/state'
import { FreeTimeItems } from '@contents/pages/about'
import { PageAboutAnimation as animConf } from '@global/config/defineAnimationConfig'
import { about } from './components'

const Client = () => {
  const _dark = UI((state) => state.dark)
  const [Page, setPage] = useState(0)

  const { Hero, CTA, Facts, FreeTime, Nav } = about

  const InPageRoute = [
    'About | Introduction',
    'About | Facts of me',
    'About | My hobbies',
    'About | More',
  ]

  return (
    <>
      <SetNavStateWithRoutes
        Page={Page}
        Pages={4}
        id={0}
        Routes={InPageRoute}
      />
      {Page === 2 && <FreeTime data={FreeTimeItems} animConf={animConf} />}
      {!(Page === 2) && (
        <div className='m-container mx-auto w-screen items-start overflow-hidden px-4 sm:container sm:px-0 xxl:w-[1440px]'>
          {Page === 0 && <Hero />}
          {Page === 1 && <Facts animConf={animConf} _dark={_dark} />}
          {Page === 3 && <CTA animConf={animConf} _dark={_dark} />}
        </div>
      )}
      <Nav Page={Page} setPage={setPage} animConf={animConf} />
    </>
  )
}

export default Client
