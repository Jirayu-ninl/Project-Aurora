'use server'

import { CredentialsSignUp } from '@aurora/libs/auth/credentials'
import { ErrorHandler } from '@aurora/utils/server/error'

const SignUp: (c: { email: string; password: string }) => Promise<{
  session?: string
  error?: string
} | void> = async (credential) => {
  try {
    const res = await CredentialsSignUp(credential)
    if (res?.error) {
      throw new Error(res.error)
    }
    return { data: res }
  } catch (e) {
    const message = ErrorHandler(e)
    return { error: message }
  }
}
export { SignUp }
