import { motion } from 'framer-motion'
import { toast } from 'react-toastify'
import { eNavDropdownState } from '@global/store/ui.store'
import Items from './items'

const DropdownPopup = ({
  items,
  itemsCount,
  _setNavDropdown,
  state,
  buttonText,
  buttonCallback,
}: {
  items: any[] | []
  itemsCount: number
  _setNavDropdown: (dropdown: eNavDropdownState) => void
  state: eNavDropdownState
  buttonText: string
  buttonCallback: () => void
}) => {
  const title = state === eNavDropdownState.CART ? 'Cart' : 'Notifications'

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className='Card-back-md-60 absolute -right-14 top-14 flex max-h-64 w-48 flex-col px-2 py-4 drop-shadow-md sm:right-0'
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
              _setNavDropdown(eNavDropdownState.NONE)
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
