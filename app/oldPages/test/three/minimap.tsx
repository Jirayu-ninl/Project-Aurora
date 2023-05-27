import { css } from '@emotion/css'
import { App } from 'pages/test/three/minimap'

export default function Index() {
  const CSS = css`
    background-color: #000;
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    overflow: hidden;
    user-select: none;
    & .scrollArea {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      overflow-x: auto;
      overflow-y: hidden;
    }
  `

  return (
    <div className={CSS}>
      <App />
    </div>
  )
}
