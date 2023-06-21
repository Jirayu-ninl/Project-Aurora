/* eslint-disable @typescript-eslint/no-explicit-any */
import { env } from '@aurora/env.mjs'
import Prisma from '@aurora/libs/database/prisma'

const SignIn_Provider = async (user: any, account: any) => {
  const isAllowedToSignIn = true
  if (isAllowedToSignIn) {
    try {
      if (user.provider === 'credentials') {
        return true
      } else {
        const isUser = await Prisma.user.findUnique({
          where: {
            email: user.email,
          },
        })

        if (isUser) {
          await addProvider(isUser, account)
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

const addProvider = (isUser: any, account: any) => {
  // isUser.Providers

  // user.accounts = {
  //   ...user.accounts,
  //   [account.provider]: {
  //     email: account.email,
  //     providerAccountId: account.providerAccountId,
  //   },
  // }
  return true
}

// const linkAccount = (user: any, account: any) => {
//   user.accounts = {
//     ...user.accounts,
//     [account.provider]: {
//       email: account.email,
//       providerAccountId: account.providerAccountId,
//     },
//   }
//   return user
// }

export default SignIn_Provider
