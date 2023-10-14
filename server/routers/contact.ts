import { createTRPCRouter, p } from '@server/trpc'
import { dropEmailSchema } from '../schema/contact.schema'
import { dropEmail } from '../controller/contact.controller'

export const contactRouter = createTRPCRouter({
  dropEmail: p.publicProcedure.input(dropEmailSchema).mutation(dropEmail),
})
