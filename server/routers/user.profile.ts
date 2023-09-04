import { createTRPCRouter, p } from '@server/trpc'
import { updateUserProfileSchema } from '@server/schema/user.schema'
import { updateUserProfileHandler } from '@server/controller/user.update'

export const userProfileRouter = createTRPCRouter({
  update: p.protectedProcedure
    .input(updateUserProfileSchema)
    .mutation(updateUserProfileHandler),
})
