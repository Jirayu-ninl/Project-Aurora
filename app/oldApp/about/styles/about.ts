import { css, keyframes } from '@emotion/css'
import Color from 'views/theme/color'

// **! Facts About Me

export const FactsContent = css`
  & > div:before {
    content: '';
    position: absolute;
    background-color: ${Color.primary[0]};
    width: 10px;
    height: 10px;
    top: 4px;
    left: -25px;
  }
  & > div {
    position: relative;
    font-size: 16px;
    display: flex;
    align-items: flex-start;
    & > p {
      opacity: 0.6;
      line-height: 18px;
      font-size: inherit;
    }
    & > h6 {
      padding: 0 4px;
      font-weight: 600;
      line-height: 18px;
      font-size: inherit;
    }
    & > h5 {
      color: ${Color.Primary};
      padding: 0 4px;
      font-weight: 600;
      font-size: 18px;
      line-height: 14px;
    }
  }
  & > div:nth-child(n):not(:last-child) {
    padding-bottom: 18px;
  }
  @media (max-width: 1339.98px) {
    & > div:before {
      top: 5px;
      left: -22px;
      width: 8px;
      height: 8px;
    }
  }
  @media (max-width: 1199.98px) {
    & > div:before {
      top: 5px;
      left: -22px;
      width: 8px;
      height: 8px;
    }
    & > div {
      font-size: 14px;
      & > h5 {
        font-size: 16px;
        line-height: 14px;
      }
    }
  }
  @media (max-width: 991.98px) {
    & > div:before {
      top: 6px;
      left: -15px;
      width: 5px;
      height: 5px;
    }
    & > div {
      font-size: 10px;
      & > h5 {
        font-size: 12px;
        line-height: 14px;
      }
    }
    & > div:nth-child(n):not(:last-child) {
      padding-bottom: 6px;
    }
  }
  @media (max-width: 767.98px) {
    & > div:before {
      top: 7px;
      left: -12px;
      width: 4px;
      height: 4px;
    }
    & > div {
      font-size: 8px;
      & > h5 {
        font-size: 10px;
        line-height: 16px;
      }
    }
    & > div:nth-child(n):not(:last-child) {
      padding-bottom: 3px;
    }
  }
  @media (max-width: 479.98px) {
    width: 120vw;
  }
`

// **! Marquee

const Var_ColorBorder = '#FFF'
const Var_MarqueeBG = '#0a0a0a2a'
const Var_MarqueeText = '#FFF'

export const MarqueeContainer = css`
  padding: 250px 0;
  @media (max-width: 991.98px) {
    padding: 160px 0;
  }
  @media (max-width: 767.98px) {
    padding: 24px 0;
  }
  @media (max-width: 479.98px) {
    padding: 50px 0;
  }
`

export const Marquee = css`
  overflow: hidden;
  pointer-events: none;
  background: ${Var_MarqueeBG};
  box-shadow: 0 -1px ${Var_ColorBorder};
  &:last-child {
    box-shadow: 0 1px ${Var_ColorBorder}, 0 -1px ${Var_ColorBorder};
  }
  & span {
    text-align: center;
    color: ${Var_MarqueeText};
    font-weight: 400;
    white-space: nowrap;
    font-size: 112px;
    line-height: 1.2;
    font-weight: 600;
    padding: 16px 8px;
    text-transform: uppercase;
    @media (max-width: 1339.98px) {
      font-size: 70px;
    }
    @media (max-width: 991.98px) {
      padding: 10px 4px;
      font-size: 50px;
    }
    @media (max-width: 767.98px) {
      padding: 8px;
      font-size: 32px;
    }
    @media (max-width: 479.98px) {
      font-size: 48px;
    }
  }
`
export const MarqueeInnerWrap = css`
  height: 100%;
  width: 100%;
`

const marqueeAnim = keyframes`
100% {
  transform: translate3d(-50%, 0, 0);
}
`
export const MarqueeInner = css`
  height: 100%;
  width: fit-content;
  align-items: center;
  display: flex;
  position: relative;
  animation: ${marqueeAnim} 15s linear infinite;
  will-change: transform;
`
