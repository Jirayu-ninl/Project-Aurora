import { NextResponse } from 'next/server'
import { randomUUID } from 'crypto'
import { MinioClient } from '@aurora/libs/storage'
import Config from '@global/config'
import { getSession } from '@server/auth/aurora'
import { setResponse } from '@aurora/utils/server/response.status'

export const GET = async (req: Request) => {
  const session = await getSession()

  if (!session || !session.user) {
    return setResponse.unauthorized()
  }

  const { searchParams } = new URL(req.url)
  const name = searchParams.get('name')
  const bucketSuffix = searchParams.get('bucketSuffix')

  if (!name) throw new Error('File name not provided')
  const imageKey = randomUUID()

  const bucketName = bucketSuffix
    ? Config.app.s3.bucketName + '-' + bucketSuffix
    : Config.app.s3.bucketName

  try {
    const url = await MinioClient.presignedPutObject(
      bucketName,
      name as string,
      15 /* 15 sec */,
    )
    return NextResponse.json({ success: true, url, id: imageKey })
  } catch {
    throw new Error('Get presigned url failed')
  }
}
