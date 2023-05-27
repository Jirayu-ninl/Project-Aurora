import { AnimatePresence } from 'framer-motion'
import type { tUser, tUI } from '@app/store'

import DropdownPopup from './dropdownPopup'

const ListPopupDropdown = ({
  _setNavDropdown,
  _navDropdown,
  navDropdownState,
  state,
  icon,
  items,
  buttonText,
  buttonCallback,
}: {
  _setNavDropdown: (dropdown: string) => void
  _navDropdown: string
  navDropdownState: tUI.tNavDropdownState
  state: 'notifications' | 'cart'
  icon: React.ReactNode
  items: tUser.tNotification[] | tUser.tCart[] | []
  buttonText: string
  buttonCallback: () => void
}) => {
  const itemsCount = items.length

  return (
    <span className='relative flex h-full cursor-pointer items-center'>
      <div
        className='h-[18px]'
        onClick={() => {
          _setNavDropdown(state)
        }}
      >
        {icon}
        {itemsCount !== 0 && (
          <span className='NotiBadge-primary-sm '>{itemsCount}</span>
        )}
      </div>
      <AnimatePresence>
        {_navDropdown === state && (
          <DropdownPopup
            key='NAV_Noti'
            items={items}
            itemsCount={itemsCount}
            _setNavDropdown={_setNavDropdown}
            navDropdownState={navDropdownState}
            state={state}
            buttonText={buttonText}
            buttonCallback={buttonCallback}
          />
        )}
      </AnimatePresence>
    </span>
  )
}

export default ListPopupDropdown
