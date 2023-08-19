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
      <div className='flex h-4 fill-black dark:fill-white xxl:mr-4'>
        <Icon.SeparatorLine />
      </div>

      <WalletBanner session={session} />
      <UserBanner
        session={session}
        notificationCount={notificationCount}
        _setNavDropdown={_setNavDropdown}
        _navDropdown={_navDropdown}
      />
    </>
  )
}

export { Banner }
