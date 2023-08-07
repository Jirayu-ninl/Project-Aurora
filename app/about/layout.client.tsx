'use client'

import dynamic from 'next/dynamic'
const Scene = dynamic(() =>
  import('./layout.scene').then((module) => module.Scene),
)

export default function SceneLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='m-container w-svw relative flex overflow-hidden'>
      <div className='absolute z-10 flex h-full w-full'>{children}</div>
      {Scene && <Scene />}
    </div>
  )
}
