/* eslint-disable @typescript-eslint/no-explicit-any */
import { v4 as uuidv4 } from 'uuid'
import { env } from '@aurora/env.mjs'
import Prisma from '@aurora/libs/database/prisma'

const SignIn_Provider = async (user: any, account: any) => {
  const isAllowedToSignIn = true
  if (isAllowedToSignIn) {
    try {
      if (user.provider === 'credentials') {
        user.email = user.credential.email
        return user
      } else {
        const email = user.email
        const Req_User = await Prisma.user.findUnique({
          where: {
            email: email,
          },
        })
        if (Req_User) {
          return true
        } else {
          const generatedUserId = uuidv4()
          account.userId = generatedUserId
          account.email = email
          user.id = generatedUserId
          await linkAccount(user, account)
          return true
        }
      }
    } catch (error) {
      if (env.NODE_ENV !== 'production') console.log(error)
      return false
    }
  } else {
    return false
  }
}

const linkAccount = (user: any, account: any) => {
  user.accounts = {
    ...user.accounts,
    [account.provider]: {
      email: account.email,
      providerAccountId: account.providerAccountId,
    },
  }
  return user
}

export default SignIn_Provider
