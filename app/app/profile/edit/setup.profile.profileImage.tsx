import { useEffect, type Dispatch } from 'react'
import Image from 'next/image'
import { toast } from 'react-toastify'
import { Edit } from '@aurora/assets/icons'

const SetProfileImage = ({
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
    if (ImageFile[0].size >= 0.5 * 1024 * 1024) {
      toast.warn('Image much less that 512KB')
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
      <div className='relative mt-2 flex h-24 w-24 items-center justify-center rounded-full border border-dashed border-gray-900/25 px-2 py-4 dark:border-gray-100/25 md:h-48 md:w-48'>
        {ImageUrls.length === 0 && (
          <>
            <div className='absolute z-10 w-36 rounded-md bg-white/60 px-2 py-4 text-center backdrop-blur-lg dark:bg-black/60 md:relative md:min-w-fit'>
              <div className='flex pl-1 text-xs leading-6 text-gray-600 dark:text-gray-200 md:pl-0 md:text-sm'>
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
                <p className='pl-1'>Profile photo</p>
              </div>
              <p className='text-2xs text-gray-600 dark:text-gray-200 md:text-xs md:leading-5'>
                PNG / JPG, up to 512KB
              </p>
            </div>
          </>
        )}
        {ImageUrls.length > 0 && (
          <>
            <label
              className='absolute bottom-1 right-3 z-20 h-4 w-4 cursor-pointer rounded-full bg-black fill-white p-1 shadow-md shadow-black/10 dark:bg-white dark:fill-black dark:shadow-black/40 md:bottom-2 md:right-4 md:h-9 md:w-9 md:p-2'
              htmlFor={formID}
            >
              <Edit />
              <input
                id={formID}
                name={formID}
                type='file'
                accept='image/jpeg, image/png'
                className='hidden'
                onChange={onImageChange}
              />
            </label>
            <Image
              src={ImageUrls[0]}
              alt={'profile'}
              className='overflow-hidden rounded-full'
              fill
              objectFit='cover'
              quality={80}
              placeholder='blur'
              blurDataURL={
                'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
              }
            />
          </>
        )}
      </div>
    </>
  )
}

export { SetProfileImage }
