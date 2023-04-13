import { useEffect, useState } from 'react'
import Image from 'next/legacy/image'
import { useRouter } from 'next/router'
import { SignIn, SignUp } from 'views/app/portal'
import { getProviders, getCsrfToken } from 'next-auth/react'
import { toast } from 'react-toastify'
import { State } from '@store'

const Portal = ({ providers, csrfToken }) => {
  const _setPage = State((state) => state.setPage)
  const [IsSignIn, setIsSignIn] = useState(true)
  const router = useRouter()
  useEffect(() => {
    _setPage('Login')
  }, [_setPage])
  useEffect(() => {
    if (router.query.error === undefined) {
      return
    }

    switch (router.query.error) {
      case 'CredentialsSignin':
        toast.error('Invalid username or password')
        break
      case 'OAuthAccountNotLinked':
        toast.error('This email already signup with different social account')
        break
      default:
        toast.error('Error: ' + router.query.error)
    }
  }, [router.query.error])
  return (
    <div className='flex h-screen w-screen items-center justify-center bg-gradient-to-tl from-indigo-600 to-indigo-400'>
      <div className='flex md:h-[410px]'>
        <div className='relative hidden h-full w-96 overflow-hidden rounded-lg md:block'>
          <Image
            src='/cover.jpg'
            layout='fill'
            alt='TheIceJI'
            objectFit='cover'
            quality={100}
          />
        </div>
        <div className='h-full'>
          {IsSignIn ? (
            <SignIn
              setIsSignIn={setIsSignIn}
              providers={providers}
              csrfToken={csrfToken}
            />
          ) : (
            <SignUp setIsSignIn={setIsSignIn} csrfToken={csrfToken} />
          )}
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const providers = await getProviders()
  const csrfToken = await getCsrfToken(context)
  return {
    props: { providers, csrfToken },
  }
}

export default Portal
