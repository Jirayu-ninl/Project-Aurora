import Image from 'next/image'
import { eNavDropdownState } from '@global/store/ui'
import * as Icon from '../../assets'

const WalletBanner = ({ session }: { session: any }) => {
  const wallet = {
    Address: '0x09C9aF72F196b6Ca7fD733DdAd4feb8C03e48b6b',
    Balance: 151.22645787,
  }
  return (
    <>
      <div className='flex h-8 items-center rounded-md border border-white/20 bg-black pl-3'>
        <p className='text-sm'>
          {wallet.Balance.toFixed(2)}{' '}
          <span className='mr-2 font-bold uppercase'>ijn</span>
        </p>
        <p className='rounded-md px-2 py-1 text-sm dark:bg-[#363636]'>
          {wallet.Address.slice(0, 5) + '...' + wallet.Address.slice(-4)}
        </p>
      </div>
    </>
  )
}

export { WalletBanner }
