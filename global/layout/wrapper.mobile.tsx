'use client'

import { UI } from '@global/store'
import { NavMobile } from './components/nav'

const WrapperMobile = ({ children }: { children: React.ReactNode }) => {
  const _gpuTier = UI((state) => state.gpuTier)

  if (_gpuTier && _gpuTier.isMobile) {
    return (
      <main className='relative block md:hidden'>
        <NavMobile>{children}</NavMobile>
      </main>
    )
  } else {
    return <>{children}</>
  }
}

export default WrapperMobile
