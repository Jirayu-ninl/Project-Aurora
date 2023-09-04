import { AnimatePresence } from 'framer-motion'
import { eNavDropdownState } from '@global/store/ui.store'

import { UserBanner } from './user.banner'
import { UserDropdown } from './user.dropdown'

const User = ({
  _setNavDropdown,
  _navDropdown,
  session,
  notifications,
  notificationCount,
}: {
  _setNavDropdown: (dropdown: eNavDropdownState) => void
  _navDropdown: eNavDropdownState
  session: any
  notifications: any[] | []
  notificationCount: number
}) => {
  return (
    <>
      <div
        className='relative flex h-full cursor-pointer items-center'
        onClick={() => {
          _setNavDropdown(
            _navDropdown !== eNavDropdownState.USER
              ? eNavDropdownState.USER
              : eNavDropdownState.NONE,
          )
        }}
      >
        <UserBanner session={session} notificationCount={notificationCount} />
        <AnimatePresence>
          {_navDropdown === eNavDropdownState.USER && (
            <UserDropdown
              key='NAV_User'
              session={session}
              notifications={notifications}
              notificationCount={notificationCount}
              _setNavDropdown={_setNavDropdown}
            />
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

export { User }
