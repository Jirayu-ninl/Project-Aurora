import { css } from '@emotion/css'
import Color from 'views/theme/color'

export const Container = css`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Form = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  & input {
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-style: none none solid none !important;
    padding: 2px 6px;
    margin-bottom: 12px;
    transition-duration: 250ms;
  }
  & input::placeholder {
    color: rgba(255, 255, 255, 0.2);
    font-weight: 300;
  }
  & input:focus,
  input:hover,
  input:active {
    border: 1px solid rgba(255, 255, 255, 1);
    outline: none;
    transition-duration: 100ms;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px ${Color.Background} inset !important;
    -webkit-text-fill-color: white !important;
  }
  & button {
    border: 1px solid #fff;
    opacity: 0.6;
    font-weight: 300;
    padding: 2px 6px;
    margin-top: 24px;
    transition-duration: 250ms;
  }
  & button:hover {
    background-color: ${Color.Primary};
    border: 1px solid ${Color.Primary};
    opacity: 1;
    color: black;
    font-weight: 500;
    transition-duration: 100ms;
  }
`
