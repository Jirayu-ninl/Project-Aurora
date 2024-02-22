'use client'

import { Component, Canvas } from './components'

const Client = () => {
  return (
    <>
      <div className='relative flex h-screen w-screen items-end justify-center bg-gradient-to-t from-black to-background-1'>
        <div className='pointer-events-none absolute z-10 flex w-full items-center justify-end'>
          <Component.Content />
        </div>
        <Canvas />
      </div>
      <Component.Sidebar />
      {/* <Component.Footer /> */}
    </>
  )
}
export { Client }
