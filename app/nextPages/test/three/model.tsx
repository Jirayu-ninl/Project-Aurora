import { css } from '@emotion/css'
import App from 'pages/test/three/model'

export default function index() {
  const CSS = css`
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    /* background: lightblue; */
    font-family: 'Inter var', sans-serif;
    background-color: #000;
  `
  return (
    <div className={CSS}>
      <App />
    </div>
  )
}
