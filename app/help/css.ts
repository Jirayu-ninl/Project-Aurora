import { css } from '@emotion/css'
import { theme } from '@global/config/defineConfig'

const CSS = css`
  p {
    padding: 12px 0;
    font-size: 0.75rem;
    opacity: 0.8;
    @media (min-width: 768px) {
      padding: 20px 0;
      font-size: 1.25rem;
    }
  }
  strong {
    font-weight: bold;
    color: ${theme.color.primary[0]};
  }
  b {
    font-weight: bold;
  }
  h2 {
    padding-top: 3rem;
    font-size: 1.25rem;
    @media (min-width: 768px) {
      font-size: 2rem;
    }
  }
  ul {
    padding-left: 3rem;
  }
  li {
    position: relative;
    font-size: 0.75rem;
    opacity: 0.8;
    @media (min-width: 768px) {
      font-size: 1.25rem;
    }
  }
  li:before {
    content: '';
    position: absolute;
    height: 4px;
    width: 4px;
    border-radius: 6px;
    background-color: white;
    top: 7px;
    left: -12px;
    @media (min-width: 768px) {
      height: 6px;
      width: 6px;
      top: 12px;
      left: -14px;
    }
  }
`

export { CSS }
