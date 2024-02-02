import { cookies } from 'next/headers'
import bcrypt from 'bcryptjs'
import { prisma } from '@aurora/libs/database/prisma'
import { setResponse as setRes } from '@aurora/utils/server/response.status'

const CredentialsSignUp = async (request: Request) => {
  const req = await request.json()
  try {
    const cookieHeader = cookies()
    const headerTempToken = cookieHeader.get('tempToken')

    if (!headerTempToken) {
      return setRes.unauthorized('Invalid Token')
    }

    if (
      headerTempToken.value.length === 32 &&
      req.token === headerTempToken.value
    ) {
      try {
        const { email, password } = req
        const existingEmail = await prisma.user.findUnique({
          where: { email },
        })
        if (existingEmail) {
          return setRes.success(
            'This email was signup, Please login with your social account',
          )
        }

        const userData = {
          username: email.split('@')[0],
          name: email.split('@')[0],
          email,
          image: '/user/default/profile.png',
        }
        const user = await prisma.user.create({
          data: userData,
        })

        const hashedPassword = await bcrypt.hash(password, 10)
        const credentialData = {
          id: user.id,
          email,
          password: hashedPassword,
        }

        await prisma.credential.create({ data: credentialData })
        await prisma.user.update({
          where: { email },
          data: {
            credential: {
              connect: { email },
            },
          },
          include: { credential: true },
        })

        return setRes.created('Sign up successfully')
      } catch (error) {
        return setRes.internalError('Database error, please try later')
      }
    }
  } catch (error) {
    return setRes.invalidHeader('Invalid Header')
  }
}

export { CredentialsSignUp }
