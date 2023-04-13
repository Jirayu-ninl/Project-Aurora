import { css } from '@emotion/css'
import App from 'pages/test/three/volume'

export default function index() {
  const CSS = css`
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #101010;
  `
  return (
    <div className={CSS}>
      <App />
    </div>
  )
}
