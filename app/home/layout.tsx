'use client'

import { useEffect } from 'react'
import { State } from '@global/store'

function Layout({ children }: { children: React.ReactNode }) {
  const _setPage = State((state) => state.setPage)
  const _setBackRoute = State((state) => state.setBackRoute)

  useEffect(() => {
    _setPage('Home')
    _setBackRoute('/home')
  }, [_setPage, _setBackRoute])

  return (
    <div className='relative h-screen w-screen'>
      {/* <div className='absolute h-full w-full'>
        <h1 className='text-10xl'>BG</h1>
      </div> */}
      <div className='pointer-events-none absolute h-full w-full'>
        {children}
      </div>
    </div>
  )
}

export default Layout
