const WalletBanner = ({
  wallet,
}: {
  wallet: {
    Address: string
    Balance: { formatted: number; raw: number; value: number }
  }
}) => {
  return (
    <>
      <p className='text-sm'>
        {wallet.Balance.formatted}{' '}
        <span className='mr-2 font-bold uppercase'>ijn</span>
      </p>
      <p className='rounded-sm bg-white px-2 py-1 text-xs dark:bg-[#363636] el:rounded-md el:text-sm'>
        {wallet.Address.slice(0, 5) + '...' + wallet.Address.slice(-4)}
      </p>
    </>
  )
}

export { WalletBanner }
