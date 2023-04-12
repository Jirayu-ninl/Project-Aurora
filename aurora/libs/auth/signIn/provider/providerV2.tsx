/* eslint-disable @typescript-eslint/no-explicit-any */
import { v4 as uuidv4 } from 'uuid'
import { User, Profile } from '../../../database/mongo/models'
// import axios from 'axios'

const SignIn_Provider = async (user, account) => {
  const isAllowedToSignIn = true
  if (isAllowedToSignIn) {
    try {
      const email = user.email
      const Req_User = await User.findOne({
        email: email,
      })
      if (Req_User) {
        const updateAccount = await linkAccount(Req_User, account)
        await User.findOneAndUpdate(
          {
            email: email,
          },
          { account: updateAccount.account }
        )
        return Req_User
      } else {
        const generatedUserId = uuidv4()
        account.email = email
        user.userID = generatedUserId
        user.userRole = 'standard'
        user.active = 1
        user.date = Date.now()
        const userProfile = {
          userID: generatedUserId,
        }
        await linkAccount(user, account)
        await User.create(user)
        await Profile.create(userProfile)
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
    [account.provider]: { ...account },
  }
  return user
}

export default SignIn_Provider
