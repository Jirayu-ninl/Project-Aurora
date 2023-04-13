import { css } from '@emotion/css'
import { App } from 'pages/test/three/horizontal'

export default function index() {
  const CSS = css`
    overscroll-behavior: none;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #000;
    & h1 {
      font-size: 30vw;
      font-weight: 400;
      letter-spacing: -0.05em;
      line-height: 0.7em;
      margin: 0;
      padding: 0;
    }

    & a {
      pointer-events: all;
      color: #a0a0a0;
      text-decoration: none;
    }

    & svg {
      fill: #a0a0a0;
    }
  `
  return (
    <div className={CSS}>
      <App />
    </div>
  )
}
