export const BlobToBase64 = (data: any[] | []) => {
  const blob = new Blob(data, { type: 'mime/type' })
  const reader = new FileReader()

  let base64String

  reader.onload = () => {
    base64String =
      reader.result &&
      typeof reader.result === 'string' &&
      reader.result.split(',')[1]
    // Use base64String
  }
  reader.readAsDataURL(blob)
  return base64String
}

export const BufferToBlob = (binaryData: any) => {
  const buffer = Buffer.from(binaryData)
  const blob = new Blob([buffer])
  return blob
}

export const BufferToBase64 = (binaryData: any) => {
  const buffer = Buffer.from(binaryData)
  return buffer.toString('base64')
}

export const Base64ToBlob = (base64String: string) => {
  const blob = new Blob([
    Uint8Array.from(atob(base64String), (c) => c.charCodeAt(0)),
  ])
  return blob
}

export const Base64ToBuffer = (base64String: string) =>
  Buffer.from(base64String, 'base64')
