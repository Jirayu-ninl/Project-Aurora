import { NextPage } from 'next'
// import { useEffect } from 'react'
// import * as THREE from 'three'
// import { render, events } from '@react-three/fiber'
import { css } from '@emotion/css'
import App from 'pages/test/three/noise'

const Index: NextPage = () => {
  // useEffect(() => {
  //   window.addEventListener('resize', () =>
  //     render(<App />, document.querySelector('canvas'), {
  //       events,
  //       linear: true,
  //       camera: { fov: 25, position: [0, 0, 6] },
  //       // https://barradeau.com/blog/?p=621
  //       // This examples needs WebGL1 (?)
  //       gl: new THREE.WebGL1Renderer({
  //         canvas: document.querySelector('canvas'),
  //         antialias: true,
  //         alpha: true,
  //       }),
  //     })
  //   )

  //   window.dispatchEvent(new Event('resize'))
  // }, [])

  const CSS = css`
    overscroll-behavior: none;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    & h1 {
      font-size: 30vw;
      font-weight: 400;
      letter-spacing: -0.05em;
      line-height: 0.7em;
      margin: 0;
      padding: 0;
    }
  `
  return (
    <div className={CSS}>
      <App />
    </div>
  )
}

export default Index
