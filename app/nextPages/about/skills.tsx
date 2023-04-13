/* eslint-disable @typescript-eslint/no-explicit-any */
import { GetStaticProps } from 'next'
import { useState, useEffect } from 'react'
import { State } from '@store'

import { skills as Section } from 'pages/about/components'
import Layout from 'views/layouts/scenceBubbleLayout'
import * as mySkills from 'contents/pages/about.skills'

const MySkill = () => {
  const _setPage = State((state) => state.setPage)
  useEffect(() => {
    _setPage('My skills')
  }, [_setPage])

  const [MenuSection, setMenuSection] = useState(0)

  return (
    <>
      <Layout>
        <div className='mx-auto flex h-screen flex-col items-start overflow-hidden px-4 sm:container sm:px-0 md:flex-row xxl:w-[1440px]'>
          <div className='Card-back-md-40 mx-0 mt-28 w-full md:mx-5 md:w-1/2'>
            <Section.Header
              MenuSection={MenuSection}
              setMenuSection={setMenuSection}
            />
          </div>
          <div className='z-10 mx-0 h-full w-full overflow-auto pt-6 md:w-1/2 md:px-5 md:pt-28'>
            <Section.SkillSection MenuSection={MenuSection} data={mySkills} />
            <div className='h-[60px] w-full'></div>
          </div>
        </div>
      </Layout>
      <div className='Card-back-md-40 fixed bottom-0 z-10 h-12 w-screen'></div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: 'TheIceJI | About me - Skills',
    },
  }
}

export default MySkill
