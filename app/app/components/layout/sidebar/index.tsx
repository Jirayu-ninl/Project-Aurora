'use client'

import Link from 'next/link'
import { Icon } from '@aurora/assets'
import clsx from 'clsx'
import { motion, AnimatePresence } from 'framer-motion'
import {
  aSideLeft,
  aSideChildrenLeft,
} from '@global/config/defineAnimationConfig'

const SideBar = ({
  Routes,
  pageIndex,
  session,
}: {
  Routes: any[]
  pageIndex: number
  session: any
}) => {
  type tIconList =
    | 'Graph'
    | 'Activity'
    | 'Wallet'
    | 'Work'
    | 'Chat'
    | 'Folder'
    | 'Cart'

  return (
    <>
      <div className='fixed top-12 z-[300] pr-5 sm:relative sm:top-0 sm:h-full'>
        <motion.div
          className='bg-back/[0.05] flex h-16 w-[calc(100vw-7.5rem)] flex-col justify-between rounded-md border border-black/[0.07] shadow-md backdrop-blur-md dark:border-white/[0.07] dark:shadow-xl sm:h-full sm:w-12 el:w-16'
          initial={aSideLeft(true).initial}
          exit={aSideLeft(true).exit}
          animate={aSideLeft(true).animate}
          transition={aSideLeft(true).transition(0.2)}
        >
          <div className='flex w-full space-x-4 overflow-hidden rounded-t-md bg-black/[0.07] p-3 dark:bg-white/[0.07] dark:fill-white sm:flex-col sm:space-x-0 sm:space-y-8 sm:p-3 sm:pb-8 sm:pt-5 el:p-5 el:pt-5'>
            {Routes.map((v, i) => {
              const I = Icon[v.icon as tIconList]
              return (
                <>
                  <motion.div
                    className={clsx(
                      'Anim h-4 w-4 cursor-pointer sm:w-full',
                      i === pageIndex
                        ? 'opacity-100'
                        : 'opacity-20 xl:hover:opacity-100',
                    )}
                    initial={aSideChildrenLeft.initial}
                    exit={aSideChildrenLeft.exit}
                    animate={aSideChildrenLeft.animate}
                    transition={aSideChildrenLeft.transition(0.9 + i * 0.1)}
                  >
                    <Link href={'/app/' + v.path}>
                      <I />
                    </Link>
                  </motion.div>
                </>
              )
            })}
          </div>
          <div className='flex justify-between p-1 px-2 dark:fill-white sm:block sm:w-full sm:p-3 el:p-5'>
            <p className='text-2xs font-bold uppercase sm:hidden'>
              {session && session.user.email.split('@')[0]}
            </p>
            <motion.div
              className={clsx(
                'Anim w-3 cursor-pointer sm:w-full',
                pageIndex === 80
                  ? 'opacity-100'
                  : 'opacity-20 xl:hover:opacity-100',
              )}
              initial={aSideChildrenLeft.initial}
              exit={aSideChildrenLeft.exit}
              animate={aSideChildrenLeft.animate}
              transition={aSideChildrenLeft.transition(1.8)}
            >
              <Link href='/app/settings'>
                <Icon.Settings />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export { SideBar }
