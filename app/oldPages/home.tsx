import { GetStaticProps } from 'next'
import { useEffect } from 'react'
import { State } from '@store'

import { home as HomePage, Sidebar, Footer } from 'pages/home'
import SceneLayout from 'views/layouts/sceneLogoLayout'

export default function Main() {
  const _setPage = State((state) => state.setPage)

  useEffect(() => {
    _setPage('Home')
  }, [_setPage])

  return (
    <>
      <SceneLayout>
        <HomePage />
      </SceneLayout>
      <Sidebar />
      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: 'TheIceJI | Home',
    },
  }
}

Main.disableFooter = true
