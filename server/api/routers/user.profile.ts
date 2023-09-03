import { z } from 'zod'
import {
  createTRPCRouter,
  // publicProcedure,
  protectedProcedure,
} from '@server/api/trpc'
// import Config from '@global/config'

export const userProfileRouter = createTRPCRouter({
  update: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        username: z.string(),
        bio: z.string(),
        image: z.object({
          avatar: z.object({
            name: z.string(),
            imageId: z.string(),
          }),
          cover: z.object({
            name: z.string(),
            imageId: z.string(),
          }),
        }),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const existingUsername = await ctx.prisma.user.findUnique({
        where: {
          username: input.username,
        },
      })

      const _id = ctx.session.user.id

      if (existingUsername && existingUsername.id !== _id) {
        return { success: false, message: 'This user already exists' }
      }

      try {
        await ctx.prisma.user.update({
          where: {
            id: _id,
          },
          data: {
            name: input.name,
            username: input.username.toLowerCase(),
            metadata: {
              profile: {
                bio: input.bio,
                image: {
                  avatar: {
                    name: input.image.avatar.name,
                    imageId: input.image.avatar.imageId,
                  },
                  cover: {
                    name: input.image.cover.name,
                    imageId: input.image.cover.imageId,
                  },
                },
              },
            },
          },
        })
        return {
          success: true,
          message: 'Profile update completed',
        }
      } catch {
        throw new Error('Update user failed')
      }
    }),
})
