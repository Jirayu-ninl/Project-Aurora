'use client'

import { useLayoutEffect, useRef } from 'react'
import 'glslEditor/build/glslEditor.css'
import './patch.css'

function Page() {
  const CanvasRef = useRef(null)

  useLayoutEffect(() => {
    const GlslEditor = require('glslEditor/build/glslEditor.min')
    new GlslEditor(CanvasRef.current, {
      canvas_size: 500,
      canvas_draggable: true,
      theme: 'monokai',
      multipleBuffers: true,
      watchHash: true,
      fileDrops: true,
      menu: true,
    })
  }, [])

  return (
    <div className='h-screen w-screen pt-24 pb-12 p-5'>
      <div className='h-full w-full bg-[#26272a] rounded-lg overflow-hidden relative'>
        <div ref={CanvasRef} />
      </div>
    </div>
  )
}

export default Page
