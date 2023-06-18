/* eslint-disable @typescript-eslint/no-explicit-any */
import { compare } from 'bcrypt'
import Prisma from '@aurora/libs/database/prisma'
import { env } from '@aurora/env.mjs'

const SignIn_Credentials = async (credentials: any) => {
  if (!credentials?.email || !credentials.password) {
    return null
  }

  try {
    const { email, password } = credentials

    const thisUser = await Prisma.user.findUnique({
      where: {
        email: email,
      },
    })

    if (!thisUser) {
      return null
    }

    if (thisUser.password && !(await compare(password, thisUser.password))) {
      return null
    }

    return {
      id: thisUser.id,
      email: thisUser.email,
      name: thisUser.name,
    }
  } catch (error) {
    if (env.NODE_ENV !== 'production') console.log(error)
    return null
  }
}

export default SignIn_Credentials
