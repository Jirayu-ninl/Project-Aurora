import { getSession } from '@server/auth'
import { appRouter } from '@server/routers'
import { t } from '@server/trpc/trpc.init'
import { prisma } from '@aurora/libs/database/prisma'
import { MinioClient as minio } from '@aurora/libs/storage'

const trpcCaller = async () => {
  const session = await getSession()
  const createCaller = t.createCallerFactory(appRouter)
  const caller = createCaller({ session, prisma, minio })
  return caller
}

export { trpcCaller }
