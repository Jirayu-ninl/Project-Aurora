import { useEffect, type Dispatch } from 'react'
import Image from 'next/image'
import { toast } from 'react-toastify'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'

const SetCoverImage = ({
  ImageFile,
  setImageFile,
  ImageUrls,
  setImageUrls,
  formID,
}: {
  ImageFile: File[] | []
  setImageFile: Dispatch<File[] | []>
  ImageUrls: string[] | string
  setImageUrls: Dispatch<string[] | []>
  formID: string
}) => {
  useEffect(() => {
    if (ImageFile.length < 1) return
    if (ImageFile[0].size >= 2 * 1024 * 1024) {
      toast.warn('Image much less that 2MB')
      return
    }
    const newImageUrls: string[] = []
    ImageFile.forEach((image) => {
      newImageUrls.push(URL.createObjectURL(image))
    })
    setImageUrls(newImageUrls)
    toast.success('Done: Set cover image')
  }, [ImageFile, setImageUrls])

  const onImageChange = (e: any) => {
    setImageFile([...e.target.files])
  }

  return (
    <>
      <div className='relative mt-2 flex justify-center overflow-hidden rounded-lg border border-dashed border-gray-900/25 px-6 py-6 dark:border-gray-100/25 md:py-10'>
        <div className='z-10 rounded-md bg-white/60 px-6 py-4 text-center backdrop-blur-lg dark:bg-black/60 md:px-12'>
          <FontAwesomeIcon icon={faImage} size='xs' className='h-6 md:h-8' />
          <div className='flex text-xs leading-6 text-gray-600 dark:text-gray-200 md:mt-2 md:text-sm'>
            <label
              htmlFor={formID}
              className='Anim AnimOpacity-80 relative cursor-pointer rounded-md font-semibold text-quaternary-2 focus-within:text-quaternary-2 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 dark:text-primary-0 dark:focus-within:text-primary-0'
            >
              <span>Upload</span>
              <input
                id={formID}
                name={formID}
                type='file'
                accept='image/jpeg, image/png'
                className='sr-only'
                onChange={onImageChange}
              />
            </label>
            <p className='pl-1'>Cover image file</p>
          </div>
          <p className='text-2xs text-gray-600 dark:text-gray-200 md:text-xs md:leading-5'>
            PNG / JPG, up to 2MB
          </p>
        </div>
        {ImageUrls.length > 0 && (
          <Image
            src={ImageUrls[0]}
            alt={'profile'}
            fill
            objectFit='cover'
            quality={80}
            placeholder='blur'
            blurDataURL={
              'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
            }
          />
        )}
      </div>
    </>
  )
}

export { SetCoverImage }
