import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { toast } from 'react-toastify'
import { Icon } from '@aurora/assets'
import { signOut } from 'next-auth/react'
import { motion, AnimatePresence } from 'framer-motion'
import { app as appConfig } from '@global/config/defineConfig'
// import Items from '../listPopupDropdown/items'

const WalletDropdown = ({
  session,
  wallet,
}: {
  session: any
  wallet: { Address: string; Balance: number }
}) => {
  const user = session ? session.user : null
  const [showTooltip, setShowTooltip] = useState(0)
  const tooltipText = ['Wallet', 'Analytics', 'Transfer', 'Top-up']

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className='Card-back-md-60 absolute -right-14 top-14 flex max-h-64 w-48 flex-col p-2 drop-shadow-md sm:right-0'
    >
      <div>
        <div
          className='relative m-2 cursor-pointer rounded-md bg-black/5 py-6 text-center dark:bg-white/5'
          onClick={() => {
            navigator.clipboard.writeText(wallet.Address)
            toast('Copy address to clipboard')
          }}
        >
          <p className='text-3xl font-semibold'>{wallet.Balance.toFixed(2)}</p>
          <p className='rounded-sm px-2 text-xs opacity-60 el:rounded-md el:text-sm'>
            {wallet.Address.slice(0, 5) + '...' + wallet.Address.slice(-4)}
          </p>
          <p className='rounded-sm px-2 py-1 text-xs el:rounded-md el:text-sm'>
            ~{formatter.format(wallet.Balance * appConfig.user.rateSwap)}
          </p>
          <Image
            className='opacity-[0.07] invert dark:invert-0'
            src='/logo_white.svg'
            fill
            objectFit='contain'
            alt='IJN symbol'
          />
        </div>
      </div>
      {/* <Items list={notifications} /> */}

      <div className='relative mt-4 flex h-8 justify-center space-x-2 fill-black dark:fill-white'>
        <Link
          href='/app/wallet'
          className='Anim AnimTranslate-4 h-8 w-8 rounded-md border border-black/20 p-2 hover:bg-quaternary-2 hover:fill-white dark:border-white/20 hover:dark:bg-primary-0 hover:dark:fill-black'
          onMouseEnter={() => setShowTooltip(1)}
          onMouseMove={() => setShowTooltip(1)}
          onMouseLeave={() => setShowTooltip(0)}
        >
          <Icon.Wallet />
        </Link>
        <Link
          href='/app/wallet?page=analytics'
          className='Anim AnimTranslate-4 h-8 w-8 rounded-md border border-black/20 p-2 hover:bg-quaternary-2 hover:fill-white dark:border-white/20 hover:dark:bg-primary-0 hover:dark:fill-black'
          onMouseEnter={() => setShowTooltip(2)}
          onMouseMove={() => setShowTooltip(2)}
          onMouseLeave={() => setShowTooltip(0)}
        >
          <Icon.Chart />
        </Link>
        <Link
          href='/app/settings'
          className='Anim AnimTranslate-4 h-8 w-8 -rotate-90 rounded-md border border-black/20 p-2 hover:bg-quaternary-2 hover:fill-white dark:border-white/20 hover:dark:bg-primary-0 hover:dark:fill-black'
          onMouseEnter={() => setShowTooltip(3)}
          onMouseMove={() => setShowTooltip(3)}
          onMouseLeave={() => setShowTooltip(0)}
        >
          <Icon.LogOut />
        </Link>
        <div
          className='Anim AnimTranslate-4 h-8 w-8 rotate-90 rounded-md border border-black/20 p-2 hover:bg-quaternary-2 hover:fill-white dark:border-white/20 hover:dark:bg-primary-0 hover:dark:fill-black'
          onMouseEnter={() => setShowTooltip(4)}
          onMouseMove={() => setShowTooltip(4)}
          onMouseLeave={() => setShowTooltip(0)}
          onClick={() => signOut()}
        >
          <Icon.Login />
        </div>
        <AnimatePresence>
          {showTooltip && (
            <>
              <motion.p
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                className='Card-back-md-60 z-200 absolute top-14 w-full rounded-md py-1 text-center text-xs xl:text-xs el:py-2 el:text-base'
              >
                {tooltipText[showTooltip - 1]}
              </motion.p>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export { WalletDropdown }
