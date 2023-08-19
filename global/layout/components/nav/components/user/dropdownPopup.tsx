import Link from 'next/link'
import { signIn, signOut } from 'next-auth/react'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'
import { eNavDropdownState } from '@global/store/ui'
import Items from '../listPopupDropdown/items'

const DropdownPopup = ({
  notifications,
  notificationCount,
  session,
  _setNavDropdown,
}: {
  notifications: any[] | []
  notificationCount: number
  session: any
  _setNavDropdown: (dropdown: eNavDropdownState) => void
}) => {
  const user = session ? session.user : null

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className='Card-back-md-60 absolute -right-14 top-14 flex max-h-64 w-48 flex-col px-2 py-4 drop-shadow-md sm:right-0'
    >
      <Link href='/app/dashboard'>
        <div className='cursor-pointer text-center'>
          <h5 className='text-base font-semibold'>{user.name}</h5>
          <h6 className='text-xs opacity-80'>{user.email}</h6>
        </div>
      </Link>
      {notificationCount === 0 ? (
        <div className='flex h-24 items-center justify-center'>
          <p className='text-center text-xs font-light opacity-60'>
            No notification
          </p>
        </div>
      ) : (
        <>
          <Items list={notifications} />
          <p
            className='cursor-pointer pt-2 text-center text-xs font-light opacity-60'
            onClick={() => {
              _setNavDropdown(eNavDropdownState.NONE)
              toast.success('Clear all')
            }}
          >
            mark as read
          </p>
        </>
      )}
      <button
        onClick={() => signOut()}
        className='mx-auto cursor-pointer rounded border border-white/40 bg-black/10 px-2 py-1 text-center text-xs backdrop-blur-md'
      >
        LOG OUT
      </button>
    </motion.div>
  )
}

export { DropdownPopup }
