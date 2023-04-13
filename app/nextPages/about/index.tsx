import { GetStaticProps } from 'next'
import { useEffect } from 'react'
import { About } from 'pages/about/components'
import { FreeTimeItems } from 'contents/pages/about.index'
import { State } from '@store'

const AboutPage = () => {
  const _setPage = State((state) => state.setPage)
  useEffect(() => {
    _setPage('About')
  }, [_setPage])

  return (
    <div className='relative flex h-screen w-screen items-center justify-center bg-gradient-to-r from-indigo-900 to-cyan-900'>
      <div className='absolute z-10 flex w-full items-center justify-end'>
        <About FreeTimeItems={FreeTimeItems} />
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: 'TheIceJI | About me',
    },
  }
}

export default AboutPage
