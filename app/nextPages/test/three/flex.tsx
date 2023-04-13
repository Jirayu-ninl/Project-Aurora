import { css } from '@emotion/css'
import { App } from 'pages/test/three/flex'

export default function index() {
  const CSS = css`
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI',
      'Helvetica Neue', Helvetica, Arial, Roboto, Ubuntu, sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    & .loading {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      background: #171717;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }

    & .loading-bar-container {
      width: 100px;
      height: 3px;
      background: #272727;
    }

    & .loading-bar {
      height: 3px;
      background: white;
    }

    & .loading-data {
      display: inline-block;
      position: relative;
      font-variant-numeric: tabular-nums;
      margin-top: 0.8em;
      color: #f0f0f0;
      font-size: 0.6em;
    }
  `
  return (
    <div className={CSS}>
      <App />
    </div>
  )
}
