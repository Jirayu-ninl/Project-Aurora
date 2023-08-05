'use client'

import { UI } from '@global/store'
import { BtnlineEdge } from '@components/button'

function Page() {
  const _dark = UI((state) => state.dark)

  return (
    <main className='relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden'>
      <h1 className='mb-8 text-2xl font-light'>
        Use 'Projects' and 'Works' pages instead
      </h1>
      <BtnlineEdge href='/project' text='projects' _dark={_dark} />
    </main>
  )
}

export default Page
