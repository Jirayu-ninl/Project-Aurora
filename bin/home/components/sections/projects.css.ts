import { css } from '@emotion/css'
import { theme } from '@global/config/defineConfig'

export const setupCSS = (_dark: boolean) => {
  const Color = _dark
    ? {
        text: '#ffffff',
        primary: theme.color.primary[0],
        base: '#ffffff',
        background: '#ffffff11',
      }
    : {
        text: '#1a1a1a',
        primary: theme.color.quaternary[2],
        base: '#1a1a1a',
        background: '#1a1a1a11',
      }

  return {
    project: css`
      cursor: pointer;
      transition-duration: 500ms;
      & > h3 {
        -webkit-text-stroke: 2px ${Color.text};
        // color: transparent;
      }
      &:hover {
        transition-duration: 250ms;
        & > h3 {
          color: ${Color.text};
          -webkit-text-stroke: 2px transparent;
          transition-duration: 250ms;
          // transform: translateX(3%) scaleX(1.05);
          & > span {
            color: ${Color.primary};
          }
        }
      }
    `,
  }
}
