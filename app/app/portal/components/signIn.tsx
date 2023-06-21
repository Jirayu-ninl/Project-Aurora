/* eslint-disable @typescript-eslint/no-explicit-any */
// 'use client'

import Link from 'next/link'
import { getProviders } from 'next-auth/react'
import SignInProviders from './signIn.providers'

const SignInPage = async ({ csrfToken }: { csrfToken: any }) => {
  const providers = await getProviders()
  return (
    <>
      <div className='Card-white-20 Border-white-40 relative ml-2 h-full rounded-lg p-8'>
        <h3 className='text-2xl font-semibold uppercase'>Signin</h3>
        <form
          className='Form-white flex flex-col pt-6'
          method='post'
          action='/api/auth/callback/theiceji'
        >
          <input name='csrfToken' type='hidden' defaultValue={csrfToken} />
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
        <SignInProviders providers={providers} />
      </div>
      <Link
        className='Anim AnimOpacity-40 mr-1 mt-1 cursor-pointer text-right text-xs'
        href='/app/portal/signup'
      >
        Not have an Account?
      </Link>
    </>
  )
}

export default SignInPage
