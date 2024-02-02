import bcrypt from 'bcryptjs'
import { prisma } from '@aurora/libs/database/prisma'
import { getErrorMessage } from '@aurora/utils/server/error'
import { ErrorHandler } from '@server/services/monitoring'

const CredentialsSignUp: (c: { email: string; password: string }) => Promise<{
  session?: string
  warn?: string
  error?: string
} | void> = async (credential) => {
  try {
    if (!prisma) {
      throw new Error('DB: Connection failed')
    }

    const { email, password } = credential
    const existingEmail = await prisma.user.findUnique({
      where: { email },
    })
    if (existingEmail) {
      return {
        warn: 'This email was signup, Please login with your email or your social account',
      }
    }

    const user = await prisma.user.create({
      data: {
        username: email.split('@')[0],
        name: email.split('@')[0],
        email,
        image: '/user/default/profile.png',
      },
    })
    if (!user) {
      return {
        error: 'Create user data failed',
      }
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const cred = await prisma.credential.create({
      data: {
        id: user.id,
        email,
        password: hashedPassword,
      },
    })
    if (!cred) {
      return {
        error: 'Create login info failed',
      }
    }

    await prisma.user.update({
      where: { email },
      data: {
        credential: {
          connect: { email },
        },
      },
      include: { credential: true },
    })

    return { data: 'success' }
  } catch (e) {
    ErrorHandler(e)
    const message = getErrorMessage(e)
    return { error: message }
  }
}

export { CredentialsSignUp }
