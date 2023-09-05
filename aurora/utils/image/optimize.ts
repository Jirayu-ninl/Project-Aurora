'use server'

import sharp from 'sharp'

const andConvertToJpg = async (
  inputArray: ArrayBuffer,
  option: {
    maxWidth: number
    maxHeight: number
    quality: number
  } = {
    maxWidth: 512,
    maxHeight: 512,
    quality: 80,
  },
  quality = 80,
): Promise<ArrayBuffer> => {
  try {
    const jpegBuffer = await sharp(inputArray)
      .toFormat('jpeg')
      .resize(option.maxWidth, option.maxHeight)
      .jpeg({ quality })
      .toBuffer()

    return jpegBuffer
  } catch (error) {
    throw new Error('Error while optimizing and converting to JPEG')
  }
}

export { andConvertToJpg }
