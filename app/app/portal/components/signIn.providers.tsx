/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faGoogle,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import { signIn } from 'next-auth/react'

function SignInProviders({ providers }: any) {
  return (
    <>
      <div className='flex justify-center'>
        <div className=' cursor-pointer rounded-full bg-blue-500 p-2'>
          <FontAwesomeIcon
            icon={faFacebook}
            size='xs'
            className='h-4 w-4'
            onClick={() => signIn(providers.facebook.id)}
          />
        </div>
        <div className='ml-3 cursor-pointer rounded-full bg-red-500 p-2'>
          <FontAwesomeIcon
            icon={faGoogle}
            size='xs'
            className='h-4 w-4'
            onClick={() => signIn(providers.google.id)}
          />
        </div>
        <div className='ml-3 cursor-pointer rounded-full bg-slate-800 p-2'>
          <FontAwesomeIcon
            icon={faGithub}
            size='xs'
            className='h-4 w-4'
            onClick={() => signIn(providers.github.id)}
          />
        </div>
      </div>
    </>
  )
}

export default SignInProviders
