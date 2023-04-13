import React from 'react'
import { css } from '@emotion/css'

function bg() {
  const Color = css`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
        115deg,
        rgb(211, 255, 215) 0%,
        rgb(0, 0, 0) 100%
      ),
      radial-gradient(
        90% 100% at 50% 0%,
        rgb(200, 200, 200) 0%,
        rgb(22, 0, 45) 100%
      ),
      radial-gradient(
        100% 100% at 80% 0%,
        rgb(250, 255, 0) 0%,
        rgb(36, 0, 0) 100%
      ),
      radial-gradient(
        150% 210% at 100% 0%,
        rgb(255, 0, 13) 0%,
        rgb(20, 139, 175) 0%,
        rgb(225, 0, 255) 100%
      ),
      radial-gradient(
        100% 100% at 100% 30%,
        rgb(255, 77, 0) 0%,
        rgba(0, 200, 255, 1) 100%
      ),
      linear-gradient(60deg, rgb(51, 255, 0) 0%, rgb(151, 86, 255) 100%);
    background-blend-mode: overlay, overlay, difference, difference, difference,
      normal;
  `
  return (
    <div className={Color}>
      <h1 className='text-10xl font-bold'>Test BG Color</h1>
    </div>
  )
}

export default bg
