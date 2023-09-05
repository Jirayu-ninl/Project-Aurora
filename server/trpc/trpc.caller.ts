import { getSession } from '@server/auth'
import { appRouter } from '@server/routers'
import { prisma } from '@aurora/libs/database/prisma'
import { MinioClient as minio } from '@aurora/libs/storage'

const trpcCaller = async () => {
  const session = await getSession()
  return appRouter.createCaller({ session, prisma, minio })
}

export { trpcCaller }
