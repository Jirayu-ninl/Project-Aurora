'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

export const SetErrorToast = () => {
  const error = useSearchParams().get('error')

  useEffect(() => {
    if (error) {
      switch (error) {
        case 'CredentialsSignin':
          toast.error('Invalid username or password')
          break
        case 'OAuthAccountNotLinked':
          toast.error('This email already signup with different social account')
          break
        default:
          toast.error('Error: ' + error)
      }
    }
    return
  }, [error])
  return null
}
