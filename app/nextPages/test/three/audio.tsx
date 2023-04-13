import { css } from '@emotion/css'
import App from 'pages/test/three/audio'

export default function Index() {
  const CSS = css`
    width: 100vw;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
    font-family: 'Inter var', sans-serif;
    color: white;
    user-select: none;
    cursor: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSIxMCIgZmlsbD0id2hpdGUiLz48L3N2Zz4='),
      auto;
    & .fullscreen {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 1s;
    }

    & .bg {
      /* background: #101010; */
    }

    & .fullscreen.notready {
      color: #606060;
    }

    & .menu {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      color: #808080;
      padding: 40px;
      pointer-events: none;
      justify-content: center;
      align-items: flex-end;
      flex-direction: row;
      font-size: 10px;
      line-height: 1.5em;
    }

    & .menu.left {
      justify-content: flex-start;
    }

    & .menu.right {
      justify-content: flex-end;
    }

    & .menu > div {
      word-wrap: none;
      word-break: none;
      white-space: pre;
      padding-left: 25px;
      padding-right: 25px;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
    }

    & .menu > div b {
      font-weight: 600;
      color: #b0b0b0;
    }

    & .fullscreen.ready > div {
      cursor: pointer;
    }

    & .fullscreen.clicked {
      pointer-events: none;
      opacity: 0;
    }

    & .menu a {
      pointer-events: all;
      cursor: pointer;
      color: inherit;
      text-decoration: none;
    }

    & .menu a:hover {
      text-decoration: underline;
      color: inherit;
    }
  `

  return (
    <div className={CSS}>
      <App />
    </div>
  )
}
