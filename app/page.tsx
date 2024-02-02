'use client'

import { useEffect } from 'react'
import { UI } from '@global/store'

const Page = () => {
  const _setShowNav = UI((state) => state.setShowNav)
  const _setShowFooter = UI((state) => state.setShowFooter)

  useEffect(() => {
    _setShowNav(false)
    _setShowFooter(false)
  }, [_setShowNav, _setShowFooter])

  return (
    <>
      <div className='flex h-dvh w-dvw items-center justify-center bg-black'>
        <p>Maintenance</p>
      </div>
    </>
  )
}

export default Page
