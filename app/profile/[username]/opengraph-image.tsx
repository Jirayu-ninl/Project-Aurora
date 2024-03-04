/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/og'
import { getProfileByUsername } from '@app/app/functions/getProfile'
import { theme } from '@global/config/defineConfig'
import { IceJiLogo } from '@components/logo/IceJi'

type PageProps = {
  params: { username: string }
}

export async function generateImageMetadata({
  params: { username },
}: PageProps) {
  return [
    {
      contentType: 'image/png',
      id: username,
      size: { width: 1200, height: 630 },
      alt: username + ' - Profile on IceJiVerse',
    },
  ]
}

export default async function Image({ params: { username } }: PageProps) {
  const {
    data: { user },
  } = await getProfileByUsername({ username })

  return new ImageResponse(
    (
      <>
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            background: '#000',
            color: '#fff',
          }}
        >
          <div
            style={{
              width: 240,
              height: 240,
              overflow: 'hidden',
              borderRadius: 999,
            }}
          >
            <img
              src={user.metadata.profile.image.cover.url}
              alt={user.name + ' Profile'}
              style={{
                height: '100%',
                width: '100%',
                objectFit: 'cover',
                objectPosition: '50% 50%',
              }}
            />
          </div>
          <h2 style={{ fontSize: 88, fontWeight: 600 }}>{user.name}</h2>
          <h3
            style={{
              fontSize: 32,
              fontWeight: 300,
              opacity: 0.8,
              marginTop: -16,
            }}
          >
            {user.metadata.profile.bio}
          </h3>
          <div
            style={{
              position: 'absolute',
              zIndex: 20,
              height: 48,
              width: 48,
              bottom: 26,
              right: 24,
            }}
          >
            <IceJiLogo dark={true} />
          </div>
          <div
            style={{
              position: 'absolute',
              zIndex: 20,
              height: 2,
              width: '100%',
              bottom: 0,
              left: 0,
              backgroundColor: theme.color.primary[0],
            }}
          />
          <img
            src={user.metadata.profile.image.cover.url}
            alt={user.name + ' Cover'}
            style={{
              opacity: 0.2,
              objectFit: 'cover',
              objectPosition: '50% 50%',
              position: 'absolute',
            }}
          />
        </div>
      </>
    ),
  )
}
