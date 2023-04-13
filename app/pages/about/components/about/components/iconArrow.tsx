const Arrow = ({ left = false }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='22.831'
    height='15.962'
    viewBox='0 0 22.831 15.962'
    className={left ? 'rotate-180' : undefined}
  >
    <path
      d='M21,7.219,14.843.315a.891.891,0,0,0-1.36,0,1.172,1.172,0,0,0,0,1.526L18,6.9l-18.584.01a1.025,1.025,0,0,0-.962,1.079A1.025,1.025,0,0,0-.587,9.069L18,9.059l-4.515,5.062a1.172,1.172,0,0,0,0,1.526.892.892,0,0,0,1.361,0L21,8.744A1.173,1.173,0,0,0,21,7.219Z'
      transform='translate(1.548)'
      fill='#fff'
    />
  </svg>
)

export default Arrow
