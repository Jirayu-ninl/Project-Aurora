import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/legacy/image'

const User = ({ OpenPanel, setNavPopupState, user, signOut }) => {
  const displayUser =
    user.name.length > 10 ? user.name.slice(0, 10) + '..' : user.name

  return (
    <>
      <div
        className='relative flex items-center'
        onClick={() => {
          setNavPopupState('userPanel')
        }}
      >
        <div className='mr-3  cursor-pointer'>
          <h5 className='text-right text-xs font-bold sm:text-base'>
            {displayUser}
          </h5>
          <p className='-mt-1 text-right text-2xs opacity-80 sm:text-xs'>
            {user.userRole}
          </p>
        </div>
        <div className='absolute right-0 bottom-0 z-10 h-3 w-3 rounded-full border-2 border-white bg-green-500' />
        <div className='relative h-9 w-9 cursor-pointer overflow-hidden rounded-full'>
          <Image src={user.image} alt='Profile' layout='fill' />
        </div>
        <AnimatePresence>
          {OpenPanel && <Panel user={user} signOut={signOut} key='NAV_User' />}
        </AnimatePresence>
      </div>
    </>
  )
}

const Panel = ({ user, signOut }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className='Card-back-md-40 absolute top-14 right-0 flex max-h-64 w-48 flex-col p-4 drop-shadow-md'
      >
        <Link href='/app/user' passHref>
          <div className='cursor-pointer text-center'>
            <h5 className='text-base font-semibold'>{user.name}</h5>
            <h6 className='text-xs opacity-80'>{user.email}</h6>
          </div>
        </Link>
        <div className='flex h-24 items-center justify-center'>
          <p className='text-center text-xs font-light opacity-60'>
            Nothing here now
          </p>
        </div>
        <button
          onClick={() => signOut()}
          className='mx-auto cursor-pointer rounded border border-white/40 bg-black/10 py-1 px-2 text-center text-xs backdrop-blur-md'
        >
          LOGOUT
        </button>
      </motion.div>
    </>
  )
}

export default User
