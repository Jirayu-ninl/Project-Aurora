'use server'

import { v4 as uuidv4 } from 'uuid'
import { prisma } from '@aurora/libs/database/prisma'
import { CredentialsSignIn } from '@aurora/libs/auth/credentials'
import { getErrorMessage } from '@aurora/utils/server/error'
import { ErrorHandler } from '@server/services/monitoring'

const SignIn: (c: { email: string; password: string }) => Promise<{
  session?: string
  warn?: string
  error?: string
} | void> = async (credential) => {
  try {
    const res = await CredentialsSignIn(credential)
    if (res?.error) {
      return { error: res.error }
    }
    if (res?.warn) {
      return { warn: res.warn }
    }

    const sessionToken = uuidv4()
    const sessionExpiry = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30)

    if (!res?.user.id) {
      return { error: 'No user found' }
    }

    const session = await prisma.session.create({
      data: {
        sessionToken: sessionToken,
        userId: res?.user.id,
        expires: sessionExpiry,
      },
    })
    if (!session) {
      return { error: 'Create session failed' }
    }

    return { session: session.sessionToken }
  } catch (e) {
    ErrorHandler(e)
    const message = getErrorMessage(e)
    return { error: message }
  }
}
export { SignIn }
