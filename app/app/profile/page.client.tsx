'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import type { Session } from 'next-auth'
import { app as appConfig } from '@global/config/defineConfig'
import { CoverImage } from '../components/profile'
import { Edit as EditIcon } from '@aurora/assets/icons'

const Client = ({ session }: { session: Session | null }) => {
  const user = session?.user
  const coverImg: string | undefined =
    user?.metadata?.profile?.image?.cover?.name ?? undefined

  return (
    <>
      <CoverImage
        Title={session?.user.name as string}
        Img={
          coverImg
            ? `${appConfig.s3.endpoint}/icejiverse-profiles/${coverImg}`
            : '/user/default/cover.png'
        }
        Tags={[]}
      />
      <div className='flex w-dvw'>
        <div className='container px-4 xl:w-[1024px] xl:px-0'>
          <Header user={user} />
        </div>
      </div>
    </>
  )
}

const Header = ({ user }: any) => {
  const avatarImg: string | undefined =
    user?.metadata?.profile?.image?.avatar?.name ?? undefined
  return (
    <>
      <div className='-mt-32 flex items-end'>
        <motion.div className='relative flex h-48 w-48 items-center justify-center overflow-hidden rounded-xl'>
          <div className='relative z-20 h-[calc(100%-1rem)] w-[calc(100%-1rem)] overflow-hidden rounded-xl'>
            <Image
              src={
                avatarImg
                  ? `${appConfig.s3.endpoint}/icejiverse-profiles/${avatarImg}`
                  : user.image
              }
              alt={user.name + ' profile'}
              fill
              objectFit='cover'
              quality={80}
              placeholder='blur'
              blurDataURL={
                'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
              }
            />
          </div>
          <div className='absolute left-0 top-0 z-10 h-full w-full bg-black/20 backdrop-blur-xl dark:bg-white/20' />
        </motion.div>
        <div className='z-10 pl-6'>
          <motion.h1
            initial={{ y: 300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className='relative mb-2 text-3xl font-bold md:mt-0 md:text-7xl xxl:text-8xl'
          >
            {user?.name}
            <Link
              className='Anim AnimOpacity-40 absolute -right-8 bottom-2 h-6 w-6 cursor-pointer rounded-full bg-white p-1'
              href='/app/profile/edit'
            >
              <EditIcon />
            </Link>
          </motion.h1>
          <p className='text-xl opacity-80'>
            {user?.metadata?.profile?.bio ?? `Hi, I'm ${user.name}`}
          </p>
        </div>
      </div>
    </>
  )
}

export { Client }
