import type {
  signinInput,
  signupInput,
} from '@server/schema/user.portal.schema'
import type { Context } from '@server/trpc/trpc.context'

import { compare, hash } from 'bcryptjs'
import { getErrorMessage } from '@aurora/utils/server/error'

export const signin = async ({
  ctx,
  input,
}: {
  ctx: Context
  input: signinInput
}) => {
  try {
    const reqCredential = await ctx.prisma.credential.findUnique({
      where: {
        email: input.email,
      },
    })
    if (!reqCredential) {
      return { success: false, message: 'No credential that requested' }
    }
    if (
      reqCredential.password &&
      !(await compare(input.password, reqCredential.password))
    ) {
      return { success: false, message: 'Password not matched' }
    }

    const user = await ctx.prisma.user.findUnique({
      where: { email: input.email },
    })
    return {
      success: true,
      user,
    }
  } catch (e) {
    const message = getErrorMessage(e)
    throw new Error(message)
  }
}

export const signup = async ({
  ctx,
  input,
}: {
  ctx: Context
  input: signupInput
}) => {
  try {
    const existingEmail = await ctx.prisma.user.findUnique({
      where: { email: input.email },
    })
    if (existingEmail) {
      return {
        success: false,
        message:
          'This email was signup, Please login with your email or your social account',
      }
    }

    const user = await ctx.prisma.user.create({
      data: {
        username: input.email.split('@')[0],
        name: input.email.split('@')[0],
        email: input.email,
        image: '/user/default/profile.png',
      },
    })
    if (!user) {
      return {
        success: false,
        message: 'Create user data failed',
      }
    }

    const hashedPassword = await hash(input.password, 10)
    const cred = await ctx.prisma.credential.create({
      data: {
        id: user.id,
        email: input.email,
        password: hashedPassword,
      },
    })
    if (!cred) {
      return {
        success: false,
        message: 'Create login info failed',
      }
    }

    await ctx.prisma.user.update({
      where: { email: input.email },
      data: {
        credential: {
          connect: { email: input.email },
        },
      },
      include: { credential: true },
    })

    return {
      success: true,
      user,
    }
  } catch (e) {
    const message = getErrorMessage(e)
    throw new Error(message)
  }
}
