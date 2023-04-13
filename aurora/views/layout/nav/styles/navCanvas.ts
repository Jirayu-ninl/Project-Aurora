import { css } from '@emotion/css'
import Color from 'views/theme/color'

export const CanvasMenuItem = css`
  display: flex;
  color: #fff;
  opacity: 0.4;
  transition-duration: 1500ms;
  text-decoration: none;
  & h1 {
    font-size: 77px;
    font-weight: 700;
    margin-left: 38px;
    color: rgba(0, 0, 0, 0);
    -webkit-text-stroke: 1px #fff;
    transition-duration: 500ms;
    @media (max-width: 1199.98px) {
      font-size: 48px;
    }
    @media (max-width: 478.98px) {
      font-size: 32px;
      margin-left: 12px;
      -webkit-text-stroke: 0.5px #fff;
      font-weight: 800;
    }
  }
  & h1:before {
    content: '';
    position: absolute;
    bottom: 0px;
    left: 10px;
    width: calc(100% - 20px);
    height: 2px;
    background: #fff;
    transform: scaleX(0);
    transform-origin: right;
    transition: 0.5s transform;
    z-index: 50;
  }
  & h6 {
    font-weight: 800;
    color: #fff;
    opacity: 0.5;
    @media (max-width: 478.98px) {
      font-size: 12px;
    }
  }
  &:hover {
    opacity: 1;
    transition-duration: 250ms;
    cursor: none;
    & h1 {
      color: white;
      -webkit-text-stroke: 0px #fff;
      letter-spacing: 5px;
      transition-duration: 250ms;
      transform: translateX(10%);
    }
    & h1:before {
      transform: scaleX(1);
      transform-origin: left;
      transition: 0.5s transform;
    }
    & h6 {
      transition-duration: 250ms;
      opacity: 1;
      color: ${Color.primary[0]};
    }
  }
`

export const bgText = css`
  position: absolute;
  pointer-events: none;
  height: 100%;
  width: 200%;
  transform: translateX(-25%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > h1 {
    color: #fff;
    font-size: 500px;
    font-weight: 800;
    line-height: 400px;
    opacity: 0.05;
  }
`
