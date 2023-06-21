import { getCsrfToken } from 'next-auth/react'
import { SignIn } from './components'
import SetToast from './setToast'

const Page = async ({ ctx }: any) => {
  const csrfToken = await getCsrfToken(ctx)

  return (
    <>
      <SetToast />
      <SignIn csrfToken={csrfToken} />
    </>
  )
}

export default Page
