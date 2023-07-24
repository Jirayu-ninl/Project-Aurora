/* eslint-disable @typescript-eslint/no-var-requires */
'use client'

import { useLayoutEffect, useRef } from 'react'
import 'glslEditor/build/glslEditor.css'
import './patch.css'

function Page() {
  const CanvasRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const GlslEditor = require('glslEditor/build/glslEditor.min')
    const InitEditor = () => {
      new GlslEditor(CanvasRef.current, {
        canvas_size: 500,
        canvas_draggable: true,
        theme: 'monokai',
        multipleBuffers: true,
        watchHash: true,
        fileDrops: true,
        menu: true,
      })
    }
    InitEditor()
    return () => window.removeEventListener('beforeunload', () => {})
  }, [])

  return (
    <div className='h-screen w-screen p-5 pb-12 pt-24'>
      <div className='relative h-full w-full overflow-x-hidden overflow-y-scroll rounded-lg bg-[#26272a]'>
        <div ref={CanvasRef} />
      </div>
    </div>
  )
}

export default Page
