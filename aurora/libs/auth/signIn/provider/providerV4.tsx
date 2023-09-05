/* eslint-disable @typescript-eslint/no-explicit-any */
import { env } from '@global/env.mjs'
import { prisma } from '@aurora/libs/database/prisma'

const SignIn_Provider = async (user: any, account: any) => {
  const isAllowedToSignIn = true
  // console.log(user, account)

  if (isAllowedToSignIn) {
    try {
      if (user.provider === 'credentials') {
        return true
      } else {
        const isUser = await prisma.user.findUnique({
          where: {
            email: user.email,
          },
        })

        if (isUser) {
          return true
        }

        return true
      }
    } catch (error) {
      if (env.NODE_ENV !== 'production') console.log(error)
      return false
    }
  } else {
    return false
  }
}

export default SignIn_Provider
