import type { updateUserProfileInput } from '@server/schema/user.schema'
import type { Context } from '@server/trpc/trpc.context'

export const updateUserProfileHandler = async ({
  ctx,
  input,
}: {
  ctx: DeepNonNullable<Context>
  input: updateUserProfileInput
}) => {
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
}
