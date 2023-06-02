import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import CreateProgress from '@aurora/modules/nprogress'

import { Audio, Setup } from './components/setup'

// IJN Components
import Cursor from './components/cursor'
import { NavBar, NavCanvas } from './components/nav'
import { Footer } from './components/footer'
import AppInfo from './components/appInfo'

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <CreateProgress />
      <AppInfo />
      <Setup />
      <NavBar />
      <NavCanvas />
      {children}
      <Footer />
      <Cursor />
      <Audio />
    </>
  )
}

export default Wrapper
