import { css } from '@emotion/css'
import { App } from 'pages/test/three/blob'

export default function Index() {
  const CSS = css`
    background-color: #000;
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir,
      helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial,
      sans-serif;
    color: white;
    font-size: 14px;
    &:focus {
      outline: none;
    }
  `

  return (
    <div className={CSS}>
      <App />
    </div>
  )
}
