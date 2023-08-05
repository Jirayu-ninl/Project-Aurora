// 'use client'

// import { useEffect } from 'react'
// import { State } from '@global/store'
import {
  LoginButton,
  LogoutButton,
  ProfileButton,
  RegisterButton,
} from '@components/button/app'

function Page() {
  // const _setNavRouteActiveState = State((state) => state.setNavRouteActiveState)

  // useEffect(() => {
  //   _setNavRouteActiveState({
  //     id: 99,
  //     scrollProgress: 0,
  //   })
  // }, [_setNavRouteActiveState])

  return (
    <main className='relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden'>
      <h1 className='text-xl'>App</h1>
      <div>
        <LoginButton />
        <RegisterButton />
        <LogoutButton />
        <ProfileButton />
      </div>
    </main>
  )
}

export default Page
