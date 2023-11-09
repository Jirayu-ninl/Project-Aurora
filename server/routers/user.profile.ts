import { createTRPCRouter, p } from '@server/trpc'
import {
  usernameSchema,
  updateUserProfileSchema,
} from '../schema/user.profile.schema'
import {
  getProfileByUsername,
  updateUserProfile,
} from '../controller/user.profile.controller'

export const userProfileRouter = createTRPCRouter({
  getProfileByUsername: p.publicProcedure
    .input(usernameSchema)
    .query(getProfileByUsername),
  updateUserProfile: p.protectedProcedure
    .input(updateUserProfileSchema)
    .mutation(updateUserProfile),
})
