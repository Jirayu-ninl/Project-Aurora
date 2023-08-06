'use client'

import { useEffect } from 'react'
import { State } from '@global/store'

export const SetPage = ({ title }: { title: string }) => {
  const _setPage = State((state) => state.setPage)

  useEffect(() => {
    _setPage(title)
  }, [_setPage, title])

  return null
}
