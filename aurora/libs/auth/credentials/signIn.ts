/* eslint-disable @typescript-eslint/no-explicit-any */
import { compare } from 'bcryptjs'
import { prisma } from '@aurora/libs/database/prisma'
import { getErrorMessage } from '@aurora/utils/server/error'
import { ErrorHandler } from '@server/services/monitoring'

const CredentialsSignIn: (c: { email: string; password: string }) => Promise<{
  user?: any
  warn?: string
  error?: string
} | void> = async (credentials) => {
  if (!prisma) {
    throw new Error('DB: Connection failed')
  }

  if (!credentials.email || !credentials.password) {
    return { error: 'Invalid credential' }
  }

  try {
    const { email, password } = credentials
    const reqCredential = await prisma.credential.findUnique({
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
    const user = await prisma.user.findUnique({
      where: { email },
    })
    return { user }
  } catch (e) {
    ErrorHandler(e)
    const message = getErrorMessage(e)
    return { error: message }
  }
}

export { CredentialsSignIn }
