import { motion, AnimatePresence } from 'framer-motion'
import { eNavDropdownState } from '@global/store/ui.store'
import { aNavChildren } from '@global/config/defineAnimationConfig'

import DropdownPopup from './dropdownPopup'

const ListPopupDropdown = ({
  _setNavDropdown,
  _navDropdown,
  state,
  icon,
  items,
  buttonText,
  buttonCallback,
}: {
  _setNavDropdown: (dropdown: eNavDropdownState) => void
  _navDropdown: eNavDropdownState
  state: eNavDropdownState
  icon: React.ReactNode
  items: any[] | []
  buttonText: string
  buttonCallback: () => void
}) => {
  const itemsCount = items.length

  return (
    <motion.span
      className='relative flex h-full cursor-pointer items-center'
      initial={aNavChildren.initial}
      exit={aNavChildren.exit}
      animate={aNavChildren.animate}
      transition={aNavChildren.transition(
        state === eNavDropdownState.CART ? 0.7 : 0.8,
      )}
    >
      <div
        className='h-[18px]'
        onClick={() => {
          _setNavDropdown(
            _navDropdown !== state ? state : eNavDropdownState.NONE,
          )
        }}
      >
        {icon}
        {itemsCount !== 0 && (
          <span className='NotiBadge-primary-sm'>{itemsCount}</span>
        )}
      </div>
      <AnimatePresence>
        {_navDropdown === state && (
          <DropdownPopup
            key='NAV_Noti'
            items={items}
            itemsCount={itemsCount}
            _setNavDropdown={_setNavDropdown}
            state={state}
            buttonText={buttonText}
            buttonCallback={buttonCallback}
          />
        )}
      </AnimatePresence>
    </motion.span>
  )
}

export default ListPopupDropdown
