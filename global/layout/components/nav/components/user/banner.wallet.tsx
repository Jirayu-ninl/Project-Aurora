import { toast } from 'react-toastify'
// import Image from 'next/image'
// import { eNavDropdownState } from '@global/store/ui'
// import * as Icon from '../../assets'

const WalletBanner = ({ session }: { session: any }) => {
  const wallet = session.user && {
    Address: '0x' + session.user.id,
    Balance: session.user.balance,
  }

  return (
    <>
      <div
        className='hidden h-6 items-center rounded-sm border border-black/10 bg-white/30 pl-2 dark:border-white/20 dark:bg-black xxl:flex el:h-8 el:rounded-md el:pl-3'
        onClick={() => {
          navigator.clipboard.writeText(wallet.Address)
          toast('Copy address to clipboard')
        }}
      >
        <p className='text-sm'>
          {wallet.Balance.toFixed(2)}{' '}
          <span className='mr-2 font-bold uppercase'>ijn</span>
        </p>
        <p className='rounded-sm bg-white px-2 py-1 text-xs dark:bg-[#363636] el:rounded-md el:text-sm'>
          {wallet.Address.slice(0, 5) + '...' + wallet.Address.slice(-4)}
        </p>
      </div>
    </>
  )
}

export { WalletBanner }
