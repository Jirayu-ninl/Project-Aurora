import Image from 'next/image'
import { Client } from './page.client'
// import { ObjectStorage } from '@aurora/libs/storage'
import { MinioUtils } from '@aurora/libs/storage'

const Page = async () => {
  const bucketName = 'icejiverse'
  const objectName = 'profile-avatar-64e524b483dd0edf865ce6f4.jpg'

  const imageUrl = await MinioUtils.getImageBase64(bucketName, objectName)

  return (
    <>
      <div className='w-dvw m-container flex flex-col items-center justify-center'>
        <Client />
        <Image src={imageUrl} alt='Image' width={300} height={200} />
      </div>
    </>
  )
}

export default Page
