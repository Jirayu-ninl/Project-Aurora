import { eNavDropdownState } from '@global/store/ui'
import * as Icon from '../../assets'

import { UserBanner } from './banner.user'
import { WalletBanner } from './banner.wallet'

const Banner = ({
  _setNavDropdown,
  _navDropdown,
  session,
  notificationCount,
}: {
  _setNavDropdown: (dropdown: eNavDropdownState) => void
  _navDropdown: eNavDropdownState
  session: any
  notificationCount: number
}) => {
  return (
    <>
      <div className='mr-4 flex h-4 fill-black dark:fill-white'>
        <Icon.SeparatorLine />
      </div>
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
        <WalletBanner session={session} />
        <UserBanner session={session} notificationCount={notificationCount} />
      </div>
    </>
  )
}

export { Banner }
