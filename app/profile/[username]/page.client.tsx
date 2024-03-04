'use client'

import { useEffect } from 'react'
import { State } from '@global/store'
import { UserProfilePage } from '../../app/components/profile'

export const metadata = {
  title: 'Posts',
}

const Client = ({ user }: { user: any }) => {
  const _setPage = State((state) => state.setPage)
  useEffect(() => {
    _setPage(user.name)
  }, [_setPage, user.name])

  return (
    <>
      <UserProfilePage user={user} />
    </>
  )
}

export { Client }
