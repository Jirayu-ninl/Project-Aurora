import { motion } from 'framer-motion'
import { toast } from 'react-toastify'
import type { tUser, tUI } from '@global/store'
import Items from './items'

const DropdownPopup = ({
  items,
  itemsCount,
  _setNavDropdown,
  navDropdownState,
  state,
  buttonText,
  buttonCallback,
}: {
  items: tUser.tNotification[] | tUser.tCart[] | []
  itemsCount: number
  _setNavDropdown: (dropdown: string) => void
  navDropdownState: tUI.tNavDropdownState
  state: 'notifications' | 'cart'
  buttonText: string
  buttonCallback: () => void
}) => {
  const title = state.charAt(0).toUpperCase() + state.slice(1)

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className='Card-back-md-60 absolute -right-14 top-14 flex max-h-64 w-48 flex-col py-4 drop-shadow-md sm:right-0 px-2'
    >
      <h5 className='mb-2 text-center text-base font-semibold'>{title}</h5>
      {itemsCount === 0 ? (
        <div className='flex h-24 items-center justify-center'>
          <p className='text-center text-xs font-light opacity-60'>
            {title} is empty
          </p>
        </div>
      ) : (
        <>
          <Items list={items} />
          <p
            className='cursor-pointer pt-2 text-center text-xs font-light opacity-60'
            onClick={() => {
              buttonCallback()
              _setNavDropdown(navDropdownState.NONE)
              toast.success('Clear all')
            }}
          >
            {buttonText}
          </p>
        </>
      )}
    </motion.div>
  )
}

export default DropdownPopup
