import bcrypt from 'bcrypt'
import Prisma from '@aurora/libs/database/prisma'
import { ErrorHandler } from '@aurora/utils/server/error'

const CredentialsSignUp: (c: { email: string; password: string }) => Promise<{
  session?: string
  warn?: string
  error?: string
} | void> = async (credential) => {
  try {
    if (!Prisma) {
      throw new Error('DB: Connection failed')
    }

    const { email, password } = credential
    const existingEmail = await Prisma.user.findUnique({
      where: { email },
    })
    if (existingEmail) {
      return {
        warn: 'This email was signup, Please login with your email or your social account',
      }
    }

    const user = await Prisma.user.create({
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
    const cred = await Prisma.credential.create({
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

    await Prisma.user.update({
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
    const message = ErrorHandler(e)
    return { error: message }
  }
}

export { CredentialsSignUp }
