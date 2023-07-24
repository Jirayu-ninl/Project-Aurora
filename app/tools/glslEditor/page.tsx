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
    <div className='p-5 h-screen w-screen pt-24 pb-12'>
      <div className='h-full w-full bg-[#26272a] rounded-lg overflow-y-scroll relative overflow-x-hidden'>
        <div ref={CanvasRef} />
      </div>
    </div>
  )
}

export default Page
