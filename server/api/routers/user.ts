import { z } from 'zod'
import { createTRPCRouter, publicProcedure } from '@server/api/trpc'
import { userProfileRouter } from './user.profile'

export const userRouter = createTRPCRouter({
  getUser: publicProcedure
    .input(z.object({ username: z.string() }))
    .query(async ({ ctx: { prisma }, input }) => {
      const user = await prisma.user.findUnique({
        where: {
          username: input.username,
        },
      })
      if (!user)
        return {
          success: false,
          message: 'No username that requested',
        }
      return {
        success: true,
        user,
      }
    }),
  profile: userProfileRouter,
})
