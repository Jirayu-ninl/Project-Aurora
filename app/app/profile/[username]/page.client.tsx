'use client'

import { trpc } from '@server/trpc/client'
import { Loading } from '@components/templates/loading'
import Page404 from '@app/404/page'
import { UserProfilePage } from '../../components/profile'

const Client = ({ username }: { username: string }) => {
  const { data, isLoading, isError } =
    trpc.user.profile.getProfileByUsername.useQuery({
      username: username.toLowerCase(),
    })

  if (isLoading) {
    return <Loading duration={10} />
  }

  if (isError) {
    throw new Error('TRPC Error: getProfileByUsername')
  }

  if (!data.success) {
    return <Page404 />
  }

  return (
    <>
      <UserProfilePage user={data?.user} />
    </>
  )
}

export { Client }
