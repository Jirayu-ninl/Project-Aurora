'use client'

import { useLayoutEffect } from 'react'
import { State } from '@global/store'
import GlslEditor from 'glslEditor/build/glslEditor'
import 'glslEditor/build/glslEditor.css'
import './patch.css'

function Page() {
  useLayoutEffect(() => {
    const glslEditor = new GlslEditor('#glsl_editor', {
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
        <div id='glsl_editor' />
      </div>
    </div>
  )
}

export default Page
