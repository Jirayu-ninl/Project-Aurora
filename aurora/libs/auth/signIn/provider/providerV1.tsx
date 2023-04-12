/* eslint-disable @typescript-eslint/no-explicit-any */
import { v4 as uuidv4 } from 'uuid'
import { User, Account } from '../../../database/mongo/models'

const SignIn_Provider = async (user, account) => {
  const isAllowedToSignIn = true
  if (isAllowedToSignIn) {
    try {
      const email = user.email
      const provider = account.provider
      const Req_Account = await Account.findOne({
        type: 'oauth',
        provider,
        email,
      })
      const Req_User = await User.findOne({
        email,
      })

      if (Req_Account && Req_User) {
        return true
      } else if (Req_Account && !Req_User) {
        const newUser = {
          userID: Req_Account.userID,
          provider: 'credentials',
          email: email.toLowerCase(),
          password: 'useProvider',
          userRole: 'user',
          active: 1,
        }

        await User.create(linkAccount(newUser, Req_Account))
      } else {
        const generatedUserId = uuidv4()
        account.userID = generatedUserId
        account.email = email
        user.userID = generatedUserId
        user.password = 'useProvider'
        user.userRole = 'user'
        user.active = 1
        user.date = Date.now()
        await linkAccount(user, account)
        return true
      }
    } catch (error) {
      console.log(error)
    }
  } else {
    return false
  }
}

const linkAccount = (user, account) => {
  user.account = {
    ...user.account,
    [account.provider]: {
      email: account.email,
      providerAccountId: account.providerAccountId,
    },
  }
  return user
}

export default SignIn_Provider
