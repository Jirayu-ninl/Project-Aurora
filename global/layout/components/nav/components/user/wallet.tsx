import { AnimatePresence } from 'framer-motion'
import { eNavDropdownState } from '@global/store/ui.store'
import { app as appConfig } from '@global/config/defineConfig'
import { formatNumber } from '@aurora/utils/math'

import { WalletBanner } from './wallet.banner'
import { WalletDropdown } from './wallet.dropdown'

const Wallet = ({
  _setNavDropdown,
  _navDropdown,
  session,
}: {
  _setNavDropdown: (dropdown: eNavDropdownState) => void
  _navDropdown: eNavDropdownState
  session: any
}) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  const wallet = session.user && {
    Address: '0x' + session.user.id,
    Balance: {
      formatted: formatNumber.letter(session.user.balance, 2),
      raw: session.user.balance,
      value: formatter.format(session.user.balance * appConfig.user.rateSwap),
    },
  }

  return (
    <>
      <div
        className='relative hidden h-6 items-center rounded-sm border border-black/10 bg-white/30 pl-2 dark:border-white/20 dark:bg-black xxl:flex el:h-8 el:rounded-md el:pl-3'
        onClick={() => {
          _setNavDropdown(
            _navDropdown !== eNavDropdownState.WALLET
              ? eNavDropdownState.WALLET
              : eNavDropdownState.NONE,
          )
        }}
      >
        <WalletBanner wallet={wallet} />
        <AnimatePresence>
          {_navDropdown === eNavDropdownState.WALLET && (
            <WalletDropdown key='NAV_User' wallet={wallet} />
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

export { Wallet }
