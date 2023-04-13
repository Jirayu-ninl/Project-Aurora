import { css } from '@emotion/css'
import { keyframes } from '@emotion/react'

export default function testMarquee() {
  const Var_ColorBorder = '#FFF'
  const Var_ColorMenuFocus = '#aaa'
  const Var_ColorLink = '#ccc'
  const Var_MarqueeBG = '#0a0a0a'
  const Var_MarqueeText = '#FFF'

  const Menu = css`
    height: 96vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `

  const menu__item = css`
    cursor: default;
    position: relative;
    overflow: hidden;
    text-align: center;
    box-shadow: 0 -1px ${Var_ColorBorder};
    &:last-child {
      box-shadow: 0 1px ${Var_ColorBorder}, 0 -1px ${Var_ColorBorder};
    }
  `

  const menu__itemLink = css`
    display: block;
    position: relative;
    cursor: pointer;
    text-decoration: none;
    white-space: nowrap;
    font-size: 6vw;
    line-height: 1.2;
    font-weight: 600;
    padding: 1vh 1vw 0;
    text-transform: uppercase;
    &:focus,
    &:focus-visible {
      color: ${Var_ColorMenuFocus};
    }
    &:focus:not(:focus-visible) {
      color: ${Var_ColorLink};
    }
  `

  const marquee = css`
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background: ${Var_MarqueeBG};
    /* //*! Container */
    /* transform: translate3d(0, 101%, 0); */
    & span {
      text-align: center;
      color: ${Var_MarqueeText};
      font-weight: 400;
      white-space: nowrap;
      font-size: 6vw;
      line-height: 1.2;
      font-weight: 600;
      padding: 1vh 1vw 0;
      text-transform: uppercase;
    }
  `

  const marquee__innerWrap = css`
    height: 100%;
    width: 100%;
    /* //*! Text */
    /* transform: translate3d(0, -101%, 0); */
  `

  const marqueeAnim = keyframes`
    100% {
      transform: translate3d(-50%, 0, 0);
    }
  `

  const marquee__inner = css`
    height: 100%;
    width: fit-content;
    align-items: center;
    display: flex;
    position: relative;
    animation: ${marqueeAnim} 15s linear infinite;
    will-change: transform;
  `

  const marquee__img = css`
    width: 15vw;
    height: 70%;
    margin: 0 2vw;
    border-radius: 5vw;
    background-size: cover;
    background-position: 50% 50%;
  `

  return (
    <div>
      <nav className={Menu}>
        <div className={menu__item}>
          <a className={menu__itemLink}>Guayaquil</a>
          <div className={marquee}>
            <div className={marquee__innerWrap}>
              <div className={marquee__inner} aria-hidden='true'>
                <span>Frank Tower</span>
                <div
                  className={marquee__img}
                  style={{ backgroundImage: 'url(img/1.jpg)' }}
                ></div>
                <span>Dom Dom</span>
                <div
                  className={marquee__img}
                  style={{ backgroundImage: 'url(img/2.jpg)' }}
                ></div>
                <span>Santa Maria</span>
                <div
                  className={marquee__img}
                  style={{ backgroundImage: 'url(img/3.jpg)' }}
                ></div>
                <span>Big Molly</span>
                <div
                  className={marquee__img}
                  style={{ backgroundImage: 'url(img/4.jpg)' }}
                ></div>
                <span>Frank Tower</span>
                <div
                  className={marquee__img}
                  style={{ backgroundImage: 'url(img/1.jpg)' }}
                ></div>
                <span>Dom Dom</span>
                <div
                  className={marquee__img}
                  style={{ backgroundImage: 'url(img/2.jpg)' }}
                ></div>
                <span>Santa Maria</span>
                <div
                  className={marquee__img}
                  style={{ backgroundImage: 'url(img/3.jpg)' }}
                ></div>
                <span>Big Molly</span>
                <div
                  className={marquee__img}
                  style={{ backgroundImage: 'url(img/4.jpg)' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
