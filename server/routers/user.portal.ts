import { createTRPCRouter, p } from '@server/trpc'
import { signinSchema, signupSchema } from '../schema/user.portal.schema'
import { signin, signup } from '../controller/user.portal.controller'

export const userPortalRouter = createTRPCRouter({
  signin: p.publicProcedure.input(signinSchema).mutation(signin),
  signup: p.publicProcedure.input(signupSchema).mutation(signup),
})
