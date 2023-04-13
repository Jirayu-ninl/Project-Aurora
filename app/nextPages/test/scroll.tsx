import { useViewportScroll, useTransform, motion } from 'framer-motion'
import SmoothScroll from 'views/animations/hooks/useSmoothScroll'
import Text from 'contents/mock/text'

const Scroll = () => {
  const { scrollY } = useViewportScroll()

  const Color = useTransform(
    scrollY,
    [0, 4000],
    ['rgb(0,0,0)', 'rgb(255,255,255)'],
  )

  const X = useTransform(scrollY, [0, 4000], [0, 500])

  return (
    <>
      <SmoothScroll>
        <motion.div style={{ backgroundColor: Color }}>
          <Text />
        </motion.div>
      </SmoothScroll>
      <motion.h1 style={{ bottom: X }} className='fixed right-6 bottom-6'>
        MOVEABLE
      </motion.h1>
    </>
  )
}

export default Scroll
