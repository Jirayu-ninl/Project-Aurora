import { css } from '@emotion/css'
import App from 'pages/test/three/glass'

export default function index() {
  const CSS = css`
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background: #000;
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      /* background-image: url('/view.svg'); */
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      pointer-events: none;
    }
  `
  return (
    <div className={CSS}>
      <App />
    </div>
  )
}
