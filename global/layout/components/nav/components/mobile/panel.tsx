import type { Dispatch, SetStateAction } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import NavigationPanel from './panel.navigation'
import AppPanel from './panel.app'

function Panel({
  session,
  showPanel,
  setShowPanel,
  panelState,
  _dark,
  _setDark,
}: {
  session: any
  showPanel: boolean
  setShowPanel: Dispatch<SetStateAction<boolean>>
  panelState: string
  _dark: boolean
  _setDark: (d: boolean) => void
}) {
  return (
    <AnimatePresence>
      {showPanel && (
        <motion.div
          initial={{ opacity: 0, x: 300, height: 384, width: 256 }}
          animate={{ opacity: 1, x: 0, height: 384, width: 256 }}
          exit={{ opacity: 0, x: 300, height: 0, width: 0 }}
          transition={{ ease: [0.43, 0.13, 0.23, 0.96], duration: 0.5 }}
          className='Anim h-96 w-64 overflow-hidden rounded-lg bg-black/10 backdrop-blur-md dark:bg-white/10'
        >
          <div className='flex justify-between bg-quaternary-2 px-4 py-2 font-black uppercase text-white dark:bg-primary-0 dark:text-black'>
            <h6>{panelState}</h6>
            <p onClick={() => setShowPanel(false)}>x</p>
          </div>
          <div className='h-[calc(100%-2.5rem)] p-3'>
            {panelState === 'app' ? (
              <AppPanel
                session={session}
                _dark={_dark}
                _setDark={_setDark}
                setShowPanel={setShowPanel}
              />
            ) : (
              <NavigationPanel />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Panel
