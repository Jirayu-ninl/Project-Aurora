'use client'

import clsx from 'clsx'
import { UI } from '@global/store'
import client from './data'

function Page() {
  const _gpuTier = UI((state) => state.gpuTier)
  const clientData = client(_gpuTier)

  return (
    <>
      {clientData.contents.map((v, i) =>
        !v.isHeader ? (
          <div
            key={i}
            className='Anim mb-2 flex w-full items-center justify-between rounded-lg border-l-2 border-white/5 bg-black/5 px-6 py-4 hover:border-quaternary-2 dark:bg-white/5 dark:hover:border-primary-0 xl:hover:translate-x-1'
          >
            <h6 className='text-xl font-light'>{v.name}</h6>
            <p className={clsx(v.className && v.className)}>{v.value}</p>
          </div>
        ) : (
          <div key={i} className='mb-2 flex w-full px-6 py-4'>
            <h6 className='text-primary-0'>{v.name}</h6>
          </div>
        ),
      )}
    </>
  )
}

export default Page
