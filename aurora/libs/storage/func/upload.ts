type tUploadOptions = {
  bucketSuffix?: string | undefined
  fileName?: string | undefined
  flag?: string | undefined
  metadata?: any
}

const uploadFile = async (
  file: File,
  urlEndpoint = '/api/upload',
  option: tUploadOptions = {
    bucketSuffix: '',
    fileName: '',
    flag: '',
    metadata: {},
  },
) => {
  const xhr = new XMLHttpRequest()
  const url = `${urlEndpoint}?name=${option.fileName ?? ''}&bucketSuffix=${
    option.bucketSuffix ?? ''
  }&flag=${option.flag ?? ''}`

  const res = await new Promise((resolve) => {
    xhr.addEventListener('loadend', () => {
      const success = xhr.readyState === 4 && xhr.status === 200
      if (!success) resolve(false)
      resolve(JSON.parse(xhr.response))
    })
    xhr.addEventListener('error', () => {
      resolve(false)
    })
    xhr.addEventListener('abort', () => {
      resolve(false)
    })
    xhr.open('PUT', url)
    xhr.setRequestHeader(
      'Content-Type',
      file?.type ?? 'application/octet-stream',
    )
    xhr.setRequestHeader('Content-Size', file.size.toString())
    xhr.send(file)
  })

  return res
}

export { uploadFile }
