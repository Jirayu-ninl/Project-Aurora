/* eslint-disable @typescript-eslint/no-explicit-any */
import { compare } from 'bcrypt'
import Prisma from '@aurora/libs/database/prisma'
import { ErrorHandler } from '@aurora/utils/server/error'

const CredentialsSignIn: (c: { email: string; password: string }) => Promise<{
  user?: any
  error?: string
} | void> = async (credentials) => {
  if (!credentials.email || !credentials.password) {
    throw new Error('Invalid credential')
  }

  try {
    const { email, password } = credentials
    const reqCredential = await Prisma.credential.findUnique({
      where: {
        email,
      },
    })
    if (!reqCredential) {
      throw new Error('No credential that requested')
    }
    if (
      reqCredential.password &&
      !(await compare(password, reqCredential.password))
    ) {
      throw new Error('Password not matched')
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
