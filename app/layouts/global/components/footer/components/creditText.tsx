import { motion } from 'framer-motion'

export default function CreditText({ delay }: { delay: number }) {
  const footerAnimation: any = {
    Init: { visibility: 'hidden', y: 100 },
    Animated: { visibility: 'visible', y: 0 },
    transition: (delay: number) => ({ delay: delay }),
  }

  const { Init, Animated, transition } = footerAnimation

  return (
    <motion.p initial={Init} animate={Animated} transition={transition(delay)}>
      <span>Copyright©{new Date().getFullYear()} by </span>
      <a href='http://TheIceJI.com/home'>Jirayu Ninlapun</a>
      <span>. All rights reserved</span>
    </motion.p>
  )
}
