import { initTRPC, TRPCError } from '@trpc/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@server/auth'
import { type Session } from 'next-auth'
import superjson from 'superjson'
import { ZodError } from 'zod'
import prisma from '@aurora/libs/database/prisma'
import minio from '@aurora/libs/storage'

type CreateContextOptions = {
  session: Session | null
}

const createInnerTRPCContext = (opts: CreateContextOptions) => {
  return {
    session: opts.session,
    prisma,
    minio,
  }
}

export const createTRPCContext =
  async (/*opts: FetchCreateContextFnOptions*/) => {
    const session = await getServerSession(authOptions)

    return createInnerTRPCContext({
      session,
    })
  }

const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    }
  },
})

export const createTRPCRouter = t.router

export const publicProcedure = t.procedure

const enforceUserIsAuthed = t.middleware(({ ctx, next }) => {
  if (!ctx.session || !ctx.session.user) {
    throw new TRPCError({ code: 'UNAUTHORIZED' })
  }
  return next({
    ctx: {
      // infers the `session` as non-nullable
      session: { ...ctx.session, user: ctx.session.user },
    },
  })
})

export const protectedProcedure = t.procedure.use(enforceUserIsAuthed)

const enforceUserIsAdmin = t.middleware(({ ctx, next }) => {
  if (!ctx.session || !ctx.session.user) {
    throw new TRPCError({ code: 'UNAUTHORIZED' })
  }

  if (
    ctx.session.user.role !== 'ADMIN' &&
    ctx.session.user.role !== 'SUPER_ADMIN'
  ) {
    throw new TRPCError({ code: 'UNAUTHORIZED' })
  }
  return next({
    ctx: {
      // infers the `session` as non-nullable
      session: { ...ctx.session, user: ctx.session.user },
    },
  })
})

export const adminProcedure = t.procedure.use(enforceUserIsAdmin)
