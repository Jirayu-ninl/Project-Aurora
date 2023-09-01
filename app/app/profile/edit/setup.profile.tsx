import type { Session } from 'next-auth'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { trpc } from '@server/api'
import { SetProfileImage } from './setup.profile.profileImage'
import { SetCoverImage } from './setup.profile.coverImage'
import { SetProfileInfo } from './setup.profile.userInfo'
import { ProfileSubmit } from './setup.profile.submit'

import { presignedUpload } from '@aurora/libs/storage/func/upload.presigned'

const SetupProfile = ({ session }: { session: Session }) => {
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
    trpc.user.profile.update.useMutation({})

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
        const _id = session.user.id
        const _extension = file.type === 'image/jpeg' ? 'jpg' : 'png'
        const name = `${_id}-img-profile-${_flag}.${_extension}`

        const { id } = await presignedUpload(file, name, 'profiles')
        return { name, id }
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

      const body = {
        ...userInfo,
        image: {
          avatar: {
            name: avatarImageData.name,
            contentType: profileImage[0].type,
            imageId: avatarImageData.id,
          },
          cover: {
            name: coverImageData.name,
            contentType: coverImage[0].type,
            imageId: coverImageData.id,
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
