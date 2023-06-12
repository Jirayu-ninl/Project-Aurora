import { motion } from 'framer-motion'

const ScrollProgress = () => {
  // const { scrollY } = useViewportScroll()
  // const windowHeight = InnerHeight(-1)
  // const X = useTransform(
  //   scrollY,
  //   [0, pageHeight - windowHeight],
  //   ['-100%', '0%'],
  // )

  return (
    <div className='fixed bottom-0 left-0 z-10 flex'>
      <motion.div
        style={{ x: X }}
        className='h-0.5 w-screen bg-primary-0'
      ></motion.div>
    </div>
  )
}

export default ScrollProgress
