import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { randomUUID } from 'crypto'
import { MinioClient } from '@aurora/libs/storage'
import Config from '@global/config'
import { getSession } from '@server/auth/aurora'
import { convertFromReadableStream } from '@aurora/utils/data'
import { setResponse } from '@aurora/utils/server/response.status'

export const PUT = async (
  req: Request,
  { params }: { params: { suffix: string } },
) => {
  const session = await getSession()

  if (!session || !session.user) {
    return setResponse.unauthorized()
  }

  try {
    const _id = session.user.id
    const _suffix = params.suffix
    const headersList = headers()
    // const _flag = headersList.get('content-flag')
    const _fileSize = parseInt(headersList.get('content-size') ?? '0')
    const _fileType = headersList.get('content-Type')

    const { searchParams } = new URL(req.url)
    // const name = searchParams.get('name')
    const bucketSuffix = searchParams.get('bucketSuffix')
    const _flag = searchParams.get('flag')

    // if (!name) throw new Error('File name not provided')
    const imageKey = randomUUID()

    const data = await convertFromReadableStream.toBuffer(
      req.body as ReadableStream,
    )
    if (_fileSize !== data.length) throw new Error('Lost data while uploading')
    const name = `${_id}-img${_suffix && `-${_suffix}`}${
      _flag && `-${_flag}`
    }.${_fileType === 'image/jpeg' ? 'jpg' : 'png'}`

    const bucketName = bucketSuffix
      ? Config.app.s3.bucketName + '-' + bucketSuffix
      : Config.app.s3.bucketName

    const upload = await MinioClient.putObject(
      bucketName,
      name,
      data,
      data.length,
      {
        'Content-Type': _fileType ? 'image/jpeg' : 'application/octet-stream',
        'Image-Key': imageKey,
        'User-Id': _id,
      },
    )
    return NextResponse.json({ success: true, upload, id: imageKey, name })
  } catch (e) {
    if (
      typeof e === 'object' &&
      e &&
      'message' in e &&
      typeof e.message === 'string'
    ) {
      throw new Error(e.message)
    } else {
      throw new Error('Error while uploading')
    }
  }
}
