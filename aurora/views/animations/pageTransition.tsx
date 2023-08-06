'use client'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const Variants = {
    pageInitial: { opacity: 0 },
    pageAnimate: { opacity: 1 },
  }

  const Transition = {
    duration: 0.3,
    ease: [0.43, 0.13, 0.23, 0.96],
  }

  const pathname = usePathname()

  return (
    <>
      <motion.div
        key={pathname}
        initial='pageInitial'
        animate='pageAnimate'
        transition={Transition}
        variants={Variants}
      >
        {children}
      </motion.div>
    </>
  )
}

export { PageTransition }
