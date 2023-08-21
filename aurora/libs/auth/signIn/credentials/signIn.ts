/* eslint-disable @typescript-eslint/no-explicit-any */
import { compare } from 'bcrypt'
import Prisma from '@aurora/libs/database/prisma'
import { env } from '@aurora/env.mjs'

const CredentialsSignIn = async (credentials: any) => {
  if (!credentials.email || !credentials.password) {
    return null
  }

  try {
    const { email, password } = credentials
    const reqCredential = await Prisma.credential.findUnique({
      where: {
        email,
      },
    })
    if (!reqCredential) {
      return null
    }
    if (
      reqCredential.password &&
      !(await compare(password, reqCredential.password))
    ) {
      return null
    }
    const user = await Prisma.user.findUnique({
      where: { email },
    })
    return user
  } catch (error) {
    if (env.NODE_ENV !== 'production') console.log(error)
    return null
  }
}

export { CredentialsSignIn }
