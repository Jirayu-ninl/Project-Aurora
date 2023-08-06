'use client'

import { useEffect } from 'react'
import { State } from '@global/store'

const Client = ({ project }: { project: any }) => {
  const _setNavRouteActiveState = State((state) => state.setNavRouteActiveState)
  const _setPage = State((state) => state.setPage)

  useEffect(() => {
    _setPage('Project | ' + project.title)
  }, [_setPage, _setNavRouteActiveState, project])

  return (
    <main className='relative flex h-screen w-screen items-center justify-center overflow-hidden'>
      <h6>{project.title}</h6>
      {/* <Blog content={project} /> */}
    </main>
  )
}

export default Client
