import { about as CSS } from '../../styles'

export default function Marquee() {
  return (
    <div className={CSS.MarqueeContainer}>
      <div className={CSS.Marquee}>
        <div className={CSS.MarqueeInnerWrap}>
          <div className={CSS.MarqueeInner} aria-hidden='true'>
            <span>Writing</span>
            <span style={{ fontWeight: 200 }}>Coffee</span>
            <span>Travel</span>
            <span style={{ fontWeight: 200 }}>Learning</span>
            <span>Writing</span>
            <span style={{ fontWeight: 200 }}>Coffee</span>
            <span>Travel</span>
            <span style={{ fontWeight: 200 }}>Learning</span>
          </div>
        </div>
      </div>
      <div className={CSS.Marquee}>
        <div className={CSS.MarqueeInnerWrap}>
          <div
            className={CSS.MarqueeInner}
            aria-hidden='true'
            style={{ transform: 'translateX(-5%)' }}
          >
            <span style={{ fontWeight: 200 }}>Movie</span>
            <span>Singing</span>
            <span style={{ fontWeight: 200 }}>Coding</span>
            <span>Talking</span>
            <span style={{ fontWeight: 200 }}>Movie</span>
            <span>Singing</span>
            <span style={{ fontWeight: 200 }}>Coding</span>
            <span>Talking</span>
          </div>
        </div>
      </div>
    </div>
  )
}
