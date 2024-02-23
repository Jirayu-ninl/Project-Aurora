'use client'

import { css } from '@emotion/css'
import clsx from 'clsx'
import { keyframes } from '@emotion/react'

export const Marquee = () => {
  const marqueeAnim = keyframes`
  100% {
    transform: translate3d(-10%, 0, 0);
  }
`

  const marquee = css`
    // padding: 37vh 0;
    & span {
      opacity: 0.25;
    }
    & > div {
      height: 100%;
      width: fit-content;
      align-items: center;
      display: flex;
      position: relative;
      animation: ${marqueeAnim} 15s linear infinite;
      will-change: transform;
    }
  `

  return (
    <>
      <div
        className={clsx(
          marquee,
          'pointer-events-none absolute top-1/2 z-20 h-48 w-full -translate-y-1/2 -rotate-[15deg]',
        )}
      >
        <div className='border border-white/0 border-y-quaternary-2 bg-black/[0.02] text-[6vh] font-bold uppercase backdrop-blur-lg dark:border-y-primary-0 dark:bg-white/[0.02] xl:text-[6vw] [&>span]:px-6 md:[&>span]:px-8 xl:[&>span]:px-12 el:[&>span]:px-16'>
          404
          <span>OOPS</span>
          404
          <span>AWKWARD</span>
          404
          <span>ERROR</span>
          404
          <span>OOPS</span>
          404
          <span>AWKWARD</span>
          404
          <span>ERROR</span>
          404
          <span>OOPS</span>
          404
          <span>AWKWARD</span>
          404
          <span>ERROR</span>
          404
          <span>OOPS</span>
          404
          <span>AWKWARD</span>
          404
          <span>ERROR</span>
          404
          <span>OOPS</span>
          404
          <span>AWKWARD</span>
          404
          <span>ERROR</span>
          404
          <span>OOPS</span>
          404
          <span>AWKWARD</span>
          404
          <span>ERROR</span>
          404
          <span>OOPS</span>
          404
          <span>AWKWARD</span>
          404
          <span>ERROR</span>
          404
          <span>OOPS</span>
          404
          <span>AWKWARD</span>
          404
          <span>ERROR</span>
          404
          <span>OOPS</span>
          404
          <span>AWKWARD</span>
          404
          <span>ERROR</span>
        </div>
      </div>
    </>
  )
}
