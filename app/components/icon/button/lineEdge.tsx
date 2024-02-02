import Link from 'next/link'
import { css } from '@emotion/css'
import clsx from 'clsx'

import { theme } from '@global/config/defineConfig'

const LineEdge = ({
  href,
  text,
  _dark = true,
  classParent,
  classChild,
  isPrimary = false,
}: {
  href: string
  text: string
  _dark?: boolean
  classParent?: string
  classChild?: string
  isPrimary?: boolean
}) => {
  const Color = _dark
    ? {
        text: '#ffffff99',
        primary: theme.color.primary[0],
        base: '#ffffff',
        background: '#ffffff11',
      }
    : {
        text: '#1a1a1a99',
        primary: theme.color.quaternary[2],
        base: '#1a1a1a',
        background: '#1a1a1a11',
      }

  const BtnCSS = css`
    // border: 1px solid #ffffff88;
    color: #fff;
    padding: 0;
    background: ${Color.background};
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    & > span {
      color: ${isPrimary ? Color.primary : Color.base};
      // padding: 8px 16px;
      position: relative;
      display: block;
      width: 100%;
      height: 100%;
    }
    &:before,
    &:after {
      position: absolute;
      content: '';
      right: 0;
      bottom: 0;
      background: ${isPrimary ? Color.primary : Color.base};
      transition: all 0.3s ease;
    }
    &:before {
      height: 30%;
      width: 2px;
    }
    &:after {
      width: 10%;
      height: 2px;
    }
    &:hover:before {
      height: 100%;
    }
    &:hover:after {
      width: 100%;
    }
    &:hover {
      background: transparent;
    }
    & > span:hover {
      color: ${isPrimary ? Color.primary : Color.base};
    }
    & > span:before,
    & > span:after {
      position: absolute;
      content: '';
      left: 0;
      top: 0;
      background: ${isPrimary ? Color.primary : Color.base};
      transition: all 0.3s ease;
    }
    & > span:before {
      width: 2px;
      height: 30%;
    }
    & > span:after {
      height: 2px;
      width: 10%;
    }
    & > span:hover:before {
      height: 100%;
    }
    & > span:hover:after {
      width: 100%;
    }
  `
  return (
    <>
      <Link href={href} className={clsx(BtnCSS, classParent)}>
        <span
          className={clsx(
            classChild,
            'px-3 py-2 text-xs md:px-4 md:py-2 md:text-base',
          )}
        >
          {text}
        </span>
      </Link>
    </>
  )
}

export default LineEdge
