import { useState } from 'react'
import { UI } from '@global/store'
import { SetNavState } from 'aurora/views/state'
import { tFreeTimeItem } from './Type'
import { PageAboutAnimation as animConf } from '@global/config/defineAnimationConfig'

import Hero from './hero'
import CTA from './cta'
import Facts from './facts'
import FreeTime from './freeTime'
import Nav from './components/nav'

export default function About({
  FreeTimeItems,
}: {
  FreeTimeItems: tFreeTimeItem[]
}) {
  const _dark = UI((state) => state.dark)
  const [Page, setPage] = useState(0)

  const InPageRoute = [
    'About | Introduction',
    'About | Facts of me',
    'About | My hobbies',
    'About | More',
  ]

  return (
    <>
      <SetNavState Page={Page} Pages={4} id={0} Routes={InPageRoute} />
      {Page === 2 && <FreeTime data={FreeTimeItems} animConf={animConf} />}
      {!(Page === 2) && (
        <div className='mx-auto h-screen w-screen items-start overflow-hidden px-4 sm:container sm:px-0 xxl:w-[1440px]'>
          {Page === 0 && <Hero />}
          {Page === 1 && <Facts animConf={animConf} _dark={_dark} />}
          {Page === 3 && <CTA animConf={animConf} _dark={_dark} />}
        </div>
      )}
      <Nav Page={Page} setPage={setPage} animConf={animConf} />
    </>
  )
}
