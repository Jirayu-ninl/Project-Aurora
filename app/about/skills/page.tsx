/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useState } from 'react'
import { UI } from '@global/store'
import { SetNavState } from '@aurora/views/state'
import { skills as Section } from '../components'
import * as mySkills from '@resources/content/pages/about.skills'

const MySkill = () => {
  const _dark = UI((state) => state.dark)
  const [MenuSection, setMenuSection] = useState(0)
  const InPageRoute = [
    'Skills | Projects',
    'Skills | Dev Skills',
    'Skills | Expertises',
    'Skills | Certificates',
    'Skills | Team & Members',
    'Skills | Works',
  ]

  return (
    <>
      <SetNavState Page={MenuSection} Pages={6} id={1} Routes={InPageRoute} />
      <div className='mx-auto flex h-screen flex-col items-start overflow-hidden px-4 sm:container sm:px-0 md:flex-row xxl:w-[1440px]'>
        <div className='Card-back-md-40 mx-0 mt-28 w-full md:mx-5 md:w-1/2'>
          <Section.Header
            MenuSection={MenuSection}
            setMenuSection={setMenuSection}
            _dark={_dark}
          />
        </div>
        <div className='NSB z-10 mx-0 h-full w-full overflow-auto pt-6 md:w-1/2 md:px-5 md:pt-28'>
          <Section.SkillSection
            MenuSection={MenuSection}
            data={mySkills}
            _dark={_dark}
          />
          <div className='h-[60px] w-full'></div>
        </div>
      </div>
      {/* <div className='Card-back-md-40 fixed bottom-0 z-10 h-12 w-screen'></div> */}
    </>
  )
}

export default MySkill
