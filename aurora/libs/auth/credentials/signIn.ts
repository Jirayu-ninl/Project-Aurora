/* eslint-disable @typescript-eslint/no-explicit-any */
import { compare } from 'bcrypt'
import Prisma from '@aurora/libs/database/prisma'
import { ErrorHandler } from '@aurora/utils/server/error'

const CredentialsSignIn: (c: { email: string; password: string }) => Promise<{
  user?: any
  warn?: string
  error?: string
} | void> = async (credentials) => {
  if (!Prisma) {
    throw new Error('DB: Connection failed')
  }

  if (!credentials.email || !credentials.password) {
    return { error: 'Invalid credential' }
  }

  try {
    const { email, password } = credentials
    const reqCredential = await Prisma.credential.findUnique({
      where: {
        email,
      },
    })
    if (!reqCredential) {
      return { error: 'No credential that requested' }
    }
    if (
      reqCredential.password &&
      !(await compare(password, reqCredential.password))
    ) {
      return { warn: 'Password not matched' }
    }
    const user = await Prisma.user.findUnique({
      where: { email },
    })
    return { user }
  } catch (e) {
    const message = ErrorHandler(e)
    return { error: message }
  }
}

export { CredentialsSignIn }
