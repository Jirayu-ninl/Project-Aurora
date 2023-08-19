'use client'

import { UI } from '@global/store'
import { NavMobile } from './components/nav'

const WrapperMobile = ({
  children,
  session,
}: {
  children: React.ReactNode
  session: any
}) => {
  const _gpuTier = UI((state) => state.gpuTier)

  if (_gpuTier && _gpuTier.isMobile) {
    return (
      <main className='relative block md:hidden'>
        <NavMobile session={session}>{children}</NavMobile>
      </main>
    )
  } else {
    return <>{children}</>
  }
}

export default WrapperMobile
