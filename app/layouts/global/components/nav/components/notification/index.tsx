import { User } from '@app/store'
import type { tUI } from '@app/store'
import { Notification as NotiIcon } from '../../assets'

import ListPopupDropdown from '../listPopupDropdown'

const NotificationBlock = ({
  _setNavDropdown,
  _navDropdown,
  NavDropdownState,
}: {
  _setNavDropdown: (dropdown: string) => void
  _navDropdown: string
  NavDropdownState: tUI.tNavDropdownState
}) => {
  const _notifications = User((state) => state.notifications)
  const _setNotification = User((state) => state.setNotifications)

  return (
    <ListPopupDropdown
      _setNavDropdown={_setNavDropdown}
      _navDropdown={_navDropdown}
      navDropdownState={NavDropdownState}
      state='notifications'
      icon={<NotiIcon />}
      items={_notifications}
      buttonText='clear all'
      buttonCallback={() => _setNotification([])}
    />
  )
}

export default NotificationBlock
