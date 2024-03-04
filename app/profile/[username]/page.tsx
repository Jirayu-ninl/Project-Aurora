import type { Metadata } from 'next'
import { Client } from './page.client'
import Page404 from '@app/404/page'
import { getProfileByUsername } from '@app/app/functions/getProfile'

type PageProps = {
  params: { username: string }
}

export const generateMetadata = async ({
  params: { username },
}: PageProps): Promise<Metadata> => {
  try {
    const { data } = await getProfileByUsername({ username })
    const user = data.user
    // const coverImg: string =
    //   user?.metadata?.profile?.image?.cover?.url ?? '/user/default/cover.png'
    const title = user.name + ' - Profile on IceJiVerse'

    return {
      title,
      description: user.metadata?.profile?.bio ?? `Hi, I'm ${user.name}`,
      openGraph: {
        title,
        // images: [coverImg],
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description: user?.metadata?.profile?.bio ?? `Hi, I'm ${user.name}`,
        // images: [coverImg],
      },
    }
  } catch (error) {
    return {
      title: 'User not found | IceJiVerse',
    }
  }
}

async function Page({ params: { username } }: PageProps) {
  try {
    const { data } = await getProfileByUsername({ username })
    return (
      <>
        <Client user={data.user} />
      </>
    )
  } catch (err: any) {
    return <Page404 />
  }
}

export default Page
