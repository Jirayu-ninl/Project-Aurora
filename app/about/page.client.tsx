'use client'

import { About } from './components'
import { FreeTimeItems } from '@resources/content/pages/about'

const Client = () => {
  return (
    <div className='h-svh w-svw relative flex items-center justify-center'>
      <div className='absolute z-10 flex w-full items-center justify-end'>
        <About FreeTimeItems={FreeTimeItems} />
      </div>
    </div>
  )
}

export default Client
