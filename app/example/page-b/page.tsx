// 'use client'

// import { useEffect } from 'react'
// import { State } from '@global/store'

function Page() {
  // const _setNavRouteActiveState = State((state) => state.setNavRouteActiveState)

  // useEffect(() => {
  //   _setNavRouteActiveState({
  //     id: 1,
  //     scrollProgress: 20,
  //   })
  // }, [_setNavRouteActiveState])

  return (
    <main className='relative flex h-screen w-screen items-center justify-center overflow-hidden'>
      <h1 className='text-xl'>Page B</h1>
    </main>
  )
}

export default Page
