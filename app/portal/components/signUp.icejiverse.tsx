/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { toast } from 'react-toastify'
import {
  email as emailValidator,
  password as passwordValidator,
} from '@aurora/utils/validator'
import { SignUp } from '@server/auth/icejiverse'
import { clientLog } from '@/aurora/libs/log'
import { formHandler } from '../functions'

const SignUpIceJiVerse = () => {
  const router = useRouter()
  const log = clientLog()
  const [confirmPassword, setConfirmPassword] = useState(null)

  const { handleChange, executeForm } = formHandler({
    email: '',
    password: '',
  })
  const handleSubmit = async (e: any) =>
    executeForm(
      e,
      async (f: { email: string; password: string }, t: typeof toast) => {
        try {
          if (emailValidator(f.email) === null) {
            t.warn('Please enter a valid E-mail')
            return
          }

          if (f.password !== confirmPassword) {
            t.warn('Passwords need to match!')
            return
          }

          const IsValidPassword = passwordValidator.Func(f.password)

          if (IsValidPassword.error) {
            t.warn(IsValidPassword.msg)
            return
          }

          const res = await SignUp(f)
          if (res?.error) {
            t.error(`Error: ${res?.error}`)
            return
          }
          if (res?.warn) {
            t.warn(`${res?.warn}`)
            return
          }

          t.success('Sign up successfully, please login')
          router.refresh()
          router.push('/portal')
        } catch (e) {
          t.error("Error: Can't sign up")
          log.error('AUTH Error', { message: "Can't sign up" })
          throw new Error('AUTH: Sign up failed')
        }
      },
    )

  return (
    <div className='Card-white-20 Border-white-40 relative ml-2 h-full rounded-lg p-8'>
      <h3 className='text-3xl font-semibold uppercase'>Sign up</h3>
      <form className='Form-white flex flex-col pt-6' onSubmit={handleSubmit}>
        <input
          className='Border-white-40 rounded-md'
          type='text'
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

        <input
          className='Border-white-40 mt-2 rounded-md'
          type='password'
          name='confirm_password'
          placeholder='Confirm Password'
          required={true}
          onChange={(e: any) => setConfirmPassword(e.target.value)}
        />

        <button className='Btn-white-40 Anim AnimOpacity-60 mt-5' type='submit'>
          Submit
        </button>
        <div className='my-3 flex text-xs'>
          <p className='mr-1 opacity-60'>Have an Account?</p>
          <Link
            className='Anim cursor-pointer font-bold uppercase opacity-80 hover:opacity-100'
            href='/portal'
          >
            Sign In
          </Link>
        </div>
      </form>
    </div>
  )
}

export { SignUpIceJiVerse }
