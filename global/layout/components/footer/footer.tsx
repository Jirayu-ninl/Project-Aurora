'use client'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'
import { UI } from '@global/store'

import { aFooter } from '@global/config/defineAnimationConfig'
import { ContactBlock, CreditBlock } from './components'

export default function Footer() {
  const _showFooter = UI((state) => state.showFooter)
  const _footerOption = UI((state) => state.footerOption)

  return (
    <>
      <AnimatePresence>
        {_showFooter && (
          <motion.div
            initial={aFooter.initial}
            exit={aFooter.exit}
            animate={aFooter.animate}
            transition={aFooter.transition(0)}
            className={clsx(
              _footerOption.fixed && 'fixed',
              'bottom-0 left-0 z-10 hidden w-screen flex-col items-center px-5 py-3 sm:flex sm:flex-row',
              _footerOption.showContact && _footerOption.showCredit
                ? 'justify-between'
                : 'justify-center',
              _footerOption.background && _footerOption.background + 'blur-md',
            )}
          >
            {_footerOption.showContact && <ContactBlock />}
            {_footerOption.showCredit && <CreditBlock />}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
