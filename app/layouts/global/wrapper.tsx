import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

import CreateProgress from '@aurora/modules/nprogress'

import { Audio, Theme } from './components/setup'

// IJN Components
import Cursor from './components/cursor'
import { NavBar } from './components/nav'
import { Footer } from './components/footer'
import AppInfo from './components/appInfo'

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <CreateProgress />
      <AppInfo />
      <Theme />
      <NavBar />
      {children}
      <Footer />
      <Cursor />
      <Audio />
    </>
  )
}

export default Wrapper
