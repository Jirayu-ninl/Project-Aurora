'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import type { toast } from 'react-toastify'
import { formHandler } from '../functions'
import { SignIn } from '@server/auth/icejiverse'
import { clientLog } from '@aurora/libs/log'

const SignInIceJiVerse = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  const log = clientLog()

  const { handleChange, executeForm } = formHandler()
  const handleSubmit = async (e: any) =>
    executeForm(
      e,
      async (f: { email: string; password: string }, t: typeof toast) => {
        try {
          const session = await SignIn(f)
          if (session?.error) {
            t.error(`Error: ${session?.error}`)
            return
          }

          if (session?.warn) {
            t.warn(`${session?.warn}`)
            return
          }

          if (!session?.session) {
            t.error(`Error: Get session failed`)
            return
          }

          const body = {
            do: 'set',
            res: 'set session complete',
            resCode: 201,
            cookies: {
              key: 'next-auth.session-token',
              value: session?.session,
            },
            maxAge: 60 * 60 * 24 * 30,
          }

          await fetch('/api/auth/cookies', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
          })
          t.success('Sign in complete')
          router.refresh()
          router.push('/app/profile')
        } catch (e) {
          t.error("Error: Can't set session")
          log.error('AUTH Error', { message: "Can't set session" })
          throw new Error('AUTH: Set session failed')
        }
      },
    )

  return (
    <>
      <div className='Card-white-20 Border-white-40 relative ml-2 h-full rounded-lg p-8'>
        <h3 className='text-2xl font-semibold uppercase'>Sign in</h3>
        <form className='Form-white flex flex-col pt-6' onSubmit={handleSubmit}>
          <input
            className='Border-white-40 rounded-md'
            type='email'
            name='email'
            placeholder='Email'
            required={true}
            onChange={handleChange}
          />
          <input
            className='Border-white-40 mt-2 rounded-md'
            type='password'
            name='password'
            placeholder='Password'
            required={true}
            onChange={handleChange}
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
        {children}
      </div>
      <Link href='/portal/signup'>
        <p className='Anim AnimOpacity-40 mt-1 cursor-pointer text-right text-xs'>
          Not have an Account?
        </p>
      </Link>
    </>
  )
}

export { SignInIceJiVerse }
