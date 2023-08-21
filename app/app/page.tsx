import {
  LoginButton,
  LogoutButton,
  ProfileButton,
  RegisterButton,
} from '@components/button/app'

function Page() {
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
