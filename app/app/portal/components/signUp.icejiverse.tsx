/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import Cookies from 'js-cookie'
import type { toast } from 'react-toastify'
import {
  email as emailValidator,
  password as passwordValidator,
} from '@aurora/utils/validator'
import { ResponseCode as RES } from '@aurora/utils/server/response.code'
import { formHandler } from '../functions'

const SignUpIceJiVerse = () => {
  const router = useRouter()
  const [confirmPassword, setConfirmPassword] = useState(null)

  const { handleChange, executeForm } = formHandler({
    type: 'signup',
    email: '',
    password: '',
  })
  const handleSubmit = async (e: any) =>
    executeForm(
      e,
      async (
        f: { email: string; password: string; type: string },
        t: typeof toast,
      ) => {
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

          try {
            const getToken = await axios.post('/api/auth/token', {
              setHeader: true,
            })

            try {
              const body = { token: getToken.data, ...f }
              await axios
                .post('/api/auth/credentials', body)
                .then((res) => {
                  if (res.status === RES.created) {
                    Cookies.remove('tempToken')
                    t.success(res.data)
                    router.push('/app/portal')
                  } else if (res.status === RES.success) {
                    t.warn(res.data)
                  }
                })
                .catch((error) => {
                  if (error.response.data) {
                    error.response.status === 404
                      ? t.error(`Error 404: Not Found (API Request)`)
                      : t.error(
                          `Error ${error.response.status}: ${error.response.data}`,
                        )
                  } else if (error.request) {
                    t.error(
                      `Error ${error.request.status}: ${error.request.statusText}`,
                    )
                  } else {
                    t.error(`Error: ${error.message.toString()}`)
                  }
                })
            } catch (error) {
              t.error("Can't connect to server")
            }
          } catch (error) {
            t.error('Server connection denied')
          }
        } catch (error) {
          t.error(error?.toString())
        }
      },
    )

  return (
    <div className='Card-white-20 Border-white-40 relative ml-2 h-full rounded-lg p-8'>
      <h3 className='text-3xl font-semibold uppercase'>Signup</h3>
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
            href='/app/portal'
          >
            SignIn
          </Link>
        </div>
      </form>
    </div>
  )
}

export { SignUpIceJiVerse }
