import Link from 'next/link'
import { getProviders } from 'next-auth/react'
import SignInProviders from './signIn.providers'
import { getServerSession } from 'next-auth'
import { authOptions } from '@server/auth'

const SignInPage = async ({ csrfToken }: { csrfToken: any }) => {
  const providers = await getProviders()
  const session = await getServerSession(authOptions)

  return (
    <>
      <div className='Card-white-20 Border-white-40 relative ml-2 h-full rounded-lg p-8'>
        <h3 className='text-2xl font-semibold uppercase'>Signin</h3>
        <form
          className='Form-white flex flex-col pt-6'
          method='post'
          action='/api/auth/callback/icejiverse'
        >
          <input
            name='csrfToken'
            type='hidden'
            defaultValue={csrfToken}
            value={csrfToken}
          />
          <input
            className='Border-white-40 rounded-md'
            type='email'
            name='email'
            placeholder='Email'
            required={true}
          />
          <input
            className='Border-white-40 mt-2 rounded-md'
            type='password'
            name='password'
            placeholder='Password'
            required={true}
          />
          <button
            className='Btn-white-40 Anim AnimOpacity-60 mt-5'
            type='submit'
          >
            Submit
          </button>
          <div className='my-3'>
            <input type='checkbox' className='Form-white-checkbox mr-2' />
            <label className='flex'>
              <p className='-mt-px text-xs'>Remember me</p>
            </label>
          </div>
        </form>
        <div className='my-8 flex w-full justify-center'>
          <div className=' my-auto h-px w-12 bg-white/30' />
          <p className='px-3 text-xs'>or Continue with</p>
          <div className=' my-auto h-px w-12 bg-white/30' />
        </div>
        <SignInProviders providers={providers} session={session} />
      </div>
      <Link href='/app/portal/signup'>
        <p className='Anim AnimOpacity-40 mt-1 cursor-pointer text-right text-xs'>
          Not have an Account?
        </p>
      </Link>
    </>
  )
}

export default SignInPage
