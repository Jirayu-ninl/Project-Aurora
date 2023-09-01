import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { MinioClient } from '@aurora/libs/storage'
import Config from '@global/config'
import { getSession } from '@server/auth/aurora'
import { setResponse } from '@aurora/utils/server/response.status'

const readableStreamToBuffer = async (readableStream: ReadableStream) => {
  const chunks = []

  const reader = readableStream.getReader()
  while (true as boolean) {
    const { done, value } = await reader.read()
    if (done) break
    chunks.push(value)
  }

  return Buffer.concat(chunks)
}

export const PUT = async (req: Request) => {
  const session = await getSession()

  if (!session || !session.user) {
    return setResponse.unauthorized()
  }

  const headersList = headers()
  const _id = headersList.get('content-id')
  const _fileType = headersList.get('content-type')
  const _fileFlag = headersList.get('content-flag')
  const _fileSize = parseInt(headersList.get('content-size') ?? '0')

  const data = await readableStreamToBuffer(req.body as ReadableStream)

  if (_fileSize !== data.length) throw new Error('Lost data while uploading')

  const upload = await MinioClient.putObject(
    Config.app.objectStorage.bucketName,
    `${_id}-img-profile-${_fileFlag}.${
      _fileType === 'image/jpeg' ? 'jpg' : 'png'
    }`,
    Buffer.from(data),
    data.length,
    {
      'Content-Type': _fileType,
    },
  )

  return NextResponse.json({ success: true, upload })
}
