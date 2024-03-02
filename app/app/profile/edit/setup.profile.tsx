import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { trpc } from '@server/trpc/client'
import { app as appConfig } from '@global/config/defineConfig'
import { SetProfileImage } from './setup.profile.profileImage'
import { SetCoverImage } from './setup.profile.coverImage'
import { SetProfileInfo } from './setup.profile.userInfo'
import { ProfileSubmit } from './setup.profile.submit'

import { uploadFile } from '@aurora/libs/storage/func/upload'

const SetupProfile = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    username: '',
    bio: '',
  })

  const router = useRouter()

  const [loading, setLoading] = useState<boolean>(false)

  const [profileImage, setProfileImage] = useState<File[] | []>([])
  const [profileImageUrls, setProfileImageUrls] = useState<string[] | []>([])
  const [coverImage, setCoverImage] = useState<File[] | []>([])
  const [coverImageUrls, setCoverImageUrls] = useState<string[] | []>([])

  const { mutate: updateProfile, data: updateProfileResponse } =
    trpc.user.profile.updateUserProfile.useMutation({})

  useEffect(() => {
    if (!updateProfileResponse?.success) {
      toast.warn(updateProfileResponse?.message)
    } else {
      toast.success('Update profile completed')
    }
  }, [updateProfileResponse])

  const submitProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (coverImageUrls.length === 0) {
      toast.warn('Please select cover photo')
      return
    }
    if (profileImageUrls.length === 0) {
      toast.warn('Please select profile photo')
      return
    }

    const uploadImage = async (file: File, _flag: 'avatar' | 'cover') => {
      try {
        const res: any = await uploadFile(file, '/api/upload/image/profile', {
          bucketSuffix: 'profiles',
          flag: _flag,
        })
        if (!res) {
          throw new Error('Upload image failed')
        }
        return res
      } catch (e) {
        if (
          typeof e === 'object' &&
          e &&
          'message' in e &&
          typeof e.message === 'string'
        ) {
          throw new Error(e.message)
        } else {
          throw new Error(`Upload ${_flag} image failed`)
        }
      }
    }

    try {
      setLoading(true)
      const avatarImageData = await uploadImage(profileImage[0], 'avatar')
      const coverImageData = await uploadImage(coverImage[0], 'cover')

      const ImgPath =
        appConfig.s3.endpoint + '/' + appConfig.s3.bucketName + '-profiles/'
      const body = {
        ...userInfo,
        image: {
          avatar: {
            name: avatarImageData.name,
            imageId: avatarImageData.id,
            url: ImgPath + avatarImageData.name,
          },
          cover: {
            name: coverImageData.name,
            imageId: coverImageData.id,
            url: ImgPath + coverImageData.name,
          },
        },
      }

      updateProfile(body)
      setLoading(false)
      router.push('/app')
    } catch (e: any) {
      if (
        typeof e === 'object' &&
        e &&
        'message' in e &&
        typeof e.message === 'string'
      ) {
        toast.error('Error: ', e.message)
      } else {
        toast.error('Error: Server error, please try again later')
      }
    }
  }

  return (
    <>
      <SetCoverImage
        ImageFile={coverImage}
        setImageFile={setCoverImage}
        ImageUrls={coverImageUrls}
        setImageUrls={setCoverImageUrls}
        formID='CoverImageUpload'
      />
      <div className='relative mt-2 flex flex-col items-center overflow-hidden rounded-lg border border-dashed border-gray-900/25 px-6 py-4 dark:border-gray-100/25 md:px-4 md:py-12 xl:flex-row xl:px-8 xl:py-8'>
        <SetProfileImage
          ImageFile={profileImage}
          setImageFile={setProfileImage}
          ImageUrls={profileImageUrls}
          setImageUrls={setProfileImageUrls}
          formID='ProfileImageUpload'
        />
        <SetProfileInfo
          setUserInfo={setUserInfo}
          userInfo={userInfo}
          submitProfile={submitProfile}
          loading={loading}
        >
          <ProfileSubmit loading={loading} />
        </SetProfileInfo>
      </div>
    </>
  )
}

export { SetupProfile }
