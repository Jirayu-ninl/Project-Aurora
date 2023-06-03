import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import CreateProgress from '@aurora/modules/nprogress'

import { Audio, Setup } from './components/setup'

// IJN Components
import Cursor from './components/cursor'
import { NavBar, NavCanvas, NavMobile } from './components/nav'
import { Footer } from './components/footer'
import AppInfo from './components/appInfo'
import Beta from './components/modal.beta'

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <CreateProgress />
      <Beta />
      <AppInfo />
      <Setup />
      <NavBar />
      <NavCanvas />
      <main className='relative block md:hidden'>
        <NavMobile>{children}</NavMobile>
      </main>
      <main className='hidden md:block'>{children}</main>
      <Footer />
      <Cursor />
      <Audio />
    </>
  )
}
export default Wrapper
