'use client'

import { useSearchParams } from 'next/navigation'
import clsx from 'clsx'
import { UI } from '@global/store'
import Link from 'next/link'
import { divide } from '@/aurora/libs/webGL/plugin/ogl/math/functions/Vec3Func'

function Status() {
  const searchParams = useSearchParams()
  const rSection = searchParams.get('section')

  const _gpuTier = UI((state) => state.gpuTier)
  const sectionData = [
    {
      name: 'Server',
      contents: [
        {
          name: 'GPU',
          value: _gpuTier?.gpu,
        },
      ],
    },
    {
      name: 'App',
      contents: [
        {
          name: 'GPU',
          value: _gpuTier?.gpu,
        },
      ],
    },
    {
      name: 'GPU',
      contents: [
        {
          name: 'GPU',
          value: _gpuTier?.gpu,
        },
      ],
    },
  ]
  return (
    <div className='flex h-full w-full'>
      <div className='w-1/3 pr-2 pt-2'>
        {sectionData.map((v, i) => (
          <h4
            className={clsx(
              'Anim cursor-pointer text-right text-4xl font-light uppercase hover:opacity-100',
              i === 2 ? 'opacity-100' : 'opacity-20',
            )}
            key={i}
          >
            {v.name}
          </h4>
        ))}
      </div>
      <div className='grow pl-2'>
        {sectionData[0].contents.map((v, i) => (
          <div
            key={i}
            className='Anim flex w-full items-center justify-between rounded-lg border-l-2 border-white/5 bg-black/5 px-6 py-4 hover:border-quaternary-2 dark:bg-white/5 dark:hover:border-primary-0'
          >
            <h6 className='text-xl font-light'>{v.name}</h6>
            <p>{v.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Status
