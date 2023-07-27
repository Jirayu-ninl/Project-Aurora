import Background from './background'
import HeroText from './heroText'
import Fade from './fade'
import { Overlay } from './overlay'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      abstractShader: any
      backgroundShader: any
      textTitleShader: any
    }
  }
}

export default function App({ _dark }: { _dark: boolean }) {
  return (
    <>
      <HeroText _dark={_dark} />
      <Background _dark={_dark} />
      <Fade _dark={_dark} />
      <Overlay _dark={_dark} />
    </>
  )
}
