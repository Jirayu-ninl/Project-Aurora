import { motion, AnimatePresence } from 'framer-motion'
import { BtnlineEdge } from '@resources/common/components/button'

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
            className='absolute bottom-0 right-8 flex flex-col items-end'
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
            <h2 className='-mt-12 text-10xl font-bold'>SKILLS</h2>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default SkillsOverlay
