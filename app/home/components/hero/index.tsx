import Background from './background'
import HeroText from './heroText'
import Fade from './fade'
import { Overlay } from './overlay'

export default function App({
  _dark,
  isMobile,
}: {
  _dark: boolean
  isMobile: boolean
}) {
  return (
    <>
      <HeroText _dark={_dark} isMobile={isMobile} />
      <Background _dark={_dark} />
      <Fade _dark={_dark} />
      <Overlay _dark={_dark} isMobile={isMobile} />
    </>
  )
}
