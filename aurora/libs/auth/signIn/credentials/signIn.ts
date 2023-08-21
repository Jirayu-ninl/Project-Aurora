/* eslint-disable @typescript-eslint/no-explicit-any */
import { compare } from 'bcrypt'
import Prisma from '@aurora/libs/database/prisma'
import { env } from '@aurora/env.mjs'

const CredentialsSignIn = async (credentials: any) => {
  console.log('start')
  if (!credentials?.email || !credentials.password) {
    console.log('invalid credentials')
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
      console.log('no user')
      return null
    }
    if (
      reqCredential.password &&
      !(await compare(password, reqCredential.password))
    ) {
      console.log('invalid password')
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
