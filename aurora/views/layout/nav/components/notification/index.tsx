import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { toast } from 'react-toastify'
import { User } from '@store'
import { NotiIcon } from '../../assets'

const NotificationBlock = ({
  OpenNotification,
  setNavPopupState,
  _Notification,
}) => (
  <span
    className='relative flex h-full cursor-pointer items-center'
    onClick={() => {
      setNavPopupState('notification')
    }}
  >
    <div className='Anim AnimScale h-6 w-6'>
      <NotiIcon />
      {_Notification !== 0 && _Notification && (
        <span className='NotiBadge-primary '>{_Notification}</span>
      )}
    </div>
    <AnimatePresence>
      {OpenNotification && <Notification key='NAV_Noti' />}
    </AnimatePresence>
  </span>
)

const Notification = ({ ref }) => {
  const _setNotification = User((state) => state.setNotification)
  const _NotificationItems = User((state) => state.notificationItems)

  const Amount =
    typeof _NotificationItems === 'boolean' ? 0 : _NotificationItems.length

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className='Card-back-md-60 absolute top-14 flex max-h-64 w-48 flex-col py-4  drop-shadow-md md:right-0 '
    >
      <h5 className='mb-2 text-center text-base font-semibold'>Notification</h5>
      {Amount === 0 || !_NotificationItems ? (
        <div className='flex h-24 items-center justify-center'>
          <p className='text-center text-xs font-light opacity-60'>
            notification is empty
          </p>
        </div>
      ) : (
        <>
          <NotificationItems list={_NotificationItems} />
          <p
            className='cursor-pointer pt-2 text-center text-xs font-light opacity-60'
            onClick={() => {
              _setNotification(0)
              toast.success('Mark notification as read')
            }}
          >
            mark as read
          </p>
        </>
      )}
    </motion.div>
  )
}

const NotificationItems = ({ list }) => (
  <div className='h-full overflow-scroll'>
    {list.map((v, i) => (
      <Link href={v.link} passHref key={i}>
        <div className='Anim AnimOpacity-80 mt-1 w-full cursor-pointer border-2 border-transparent border-l-primary-0 bg-black/20 p-2'>
          <h6 className='text-xs'>{v.title}</h6>
          <p className='mt-1 text-xs font-light opacity-80'>{v.description}</p>
          <p className='mt-1 -mb-1 text-right text-2xs font-light opacity-80'>
            {v.time}
          </p>
        </div>
      </Link>
    ))}
  </div>
)

export default NotificationBlock
