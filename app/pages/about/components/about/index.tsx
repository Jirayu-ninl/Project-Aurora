import { useState, useEffect } from 'react'

import { FreeTimeItemsType } from './Type'
import { config as animConf } from 'views/animations'
import { State } from '@store'

import Hero from './hero'
import CTA from './cta'
import Facts from './facts'
import FreeTime from './freeTime'
import Nav from './components/nav'

export default function About({ FreeTimeItems }: FreeTimeItemsType) {
  const [Page, setPage] = useState(0)
  const _setPage = State((state) => state.setPage)
  useEffect(() => {
    switch (Page) {
      case 0:
        _setPage('About - Introduction')
        break
      case 1:
        _setPage('About - Facts of me')
        break
      case 2:
        _setPage('About - My hobbies')
        break
      case 3:
        _setPage('About - More')
        break
      default:
        break
    }
  }, [Page, _setPage])

  return (
    <>
      {Page === 2 && <FreeTime data={FreeTimeItems} animConf={animConf} />}
      {!(Page === 2) && (
        <div className='mx-auto h-screen w-screen items-start overflow-hidden px-4 sm:container sm:px-0 xxl:w-[1440px]'>
          {Page === 0 && <Hero />}
          {Page === 1 && <Facts animConf={animConf} />}
          {Page === 3 && <CTA animConf={animConf} />}
        </div>
      )}
      <Nav Page={Page} setPage={setPage} animConf={animConf} />
    </>
  )
}
