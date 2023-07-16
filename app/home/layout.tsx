/* eslint-disable indent */
'use client'

import { useEffect } from 'react'
import { State, UI } from '@global/store'
import Scene from './components/scene'

function Layout({ children }: { children: React.ReactNode }) {
  const _navRouteActiveState = State((state) => state.navRouteActiveState)
  const _setHomeCamera = State((state) => state.setHomeCamera)
  const _gpuTier = UI((state) => state.gpuTier)

  useEffect(() => {
    _setHomeCamera(
      _navRouteActiveState.id === 1
        ? {
            position: [-1.2, 1.5, 3],
            rotation: [0, 0, 0],
          }
        : _navRouteActiveState.id === 2
        ? {
            position: [-3.2, 1.7, 1.5],
            rotation: [0, -Math.PI / 2, 0],
          }
        : _navRouteActiveState.id === 3
        ? {
            position: [-5, 5, 8],
            rotation: [-Math.PI / 6, 0, 0],
          }
        : _navRouteActiveState.id === 4
        ? {
            position: [4, 8, -2.2],
            rotation: [-Math.PI / 2, 0, 0],
          }
        : {
            position: [0, 0.5, 5],
            rotation: [_gpuTier?.isMobile ? 0.1 : 0, 0, 0],
          },
    )
  }, [
    // _setPage,
    // _setBackRoute,
    // _setNavRoute,
    _setHomeCamera,
    _navRouteActiveState.id,
    _gpuTier?.isMobile,
  ])

  return (
    <div className='relative h-screen w-screen bg-white dark:bg-[#101010]'>
      <div className='absolute h-full w-full'>
        <Scene />
      </div>
      <div className='pointer-events-none absolute h-full w-full'>
        {children}
      </div>
    </div>
  )
}

export default Layout
