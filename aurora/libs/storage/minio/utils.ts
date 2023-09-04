import { MinioClient } from './minioClient'
import { convertFromDataStream } from '@aurora/utils/data'

const getImageBlob: (
  bucketName: string,
  objectName: string,
  option?: {
    type: string
  },
) => Promise<Blob | MediaSource> = async (bucketName, objectName, option) => {
  return new Promise((resolve, reject) => {
    MinioClient.getObject(bucketName, objectName, (err, dataStream) => {
      if (err) {
        reject(err)
        return
      }
      convertFromDataStream.toBlob(dataStream, resolve, reject, option)
    })
  })
}

const getImageBase64: (
  bucketName: string,
  objectName: string,
  option?: {
    type: string
  },
) => Promise<string> = async (bucketName, objectName, option) => {
  return new Promise((resolve, reject) => {
    MinioClient.getObject(bucketName, objectName, (err, dataStream) => {
      if (err) {
        reject(err)
        return
      }
      convertFromDataStream.toBase64(dataStream, resolve, reject, option)
    })
  })
}

const getImageBlobUrl = async (
  bucketName: string,
  objectName: string,
  option?: {
    type: string
  },
) => {
  const imageBlob: Blob | MediaSource = await getImageBlob(
    bucketName,
    objectName,
    option,
  )
  return URL.createObjectURL(imageBlob)
}

const getImageStream = async (bucketName: string, objectName: string) => {
  return new Promise((resolve, reject) => {
    MinioClient.getObject(bucketName, objectName, (err, dataStream) => {
      if (err) {
        reject(err)
        return
      }
      const dataChunks: BlobPart[] | Uint8Array[] | [] = []
      dataStream.on('data', (chunk) => dataChunks.push(chunk as never))
      dataStream.on('end', () => {
        resolve(dataChunks)
      })
      dataStream.on('error', (error: Error) => reject(error))
    })
  })
}

export { getImageBlob, getImageBlobUrl, getImageBase64, getImageStream }
