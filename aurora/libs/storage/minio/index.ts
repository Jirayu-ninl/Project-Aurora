import minio from 'minio'
import { env } from '@aurora/env.mjs'

const Minio = new minio.Client({
  endPoint: env.MINIO_ENDPOINT,
  useSSL: true,
  accessKey: env.MINIO_ACCESS_KEY,
  secretKey: env.MINIO_SECRET_KEY,
})

export { Minio }
