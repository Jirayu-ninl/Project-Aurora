import { motion, AnimatePresence } from 'framer-motion'
import { BtnlineEdge } from '@components/button'

const SkillsOverlay = ({
  _dark,
  visibility = true,
}: {
  _dark: boolean
  visibility?: boolean
}) => {
  return (
    <>
      <AnimatePresence>
        {visibility && (
          <motion.div
            className='absolute bottom-24 right-8 flex flex-col items-end md:bottom-6'
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <BtnlineEdge
              href='/about/skills'
              text='VIEW FULL'
              classParent='pointer-events-auto'
              _dark={_dark}
            />
            <h2 className='text-6xl font-bold md:text-10xl'>SKILLS</h2>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default SkillsOverlay
