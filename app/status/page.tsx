'use client'

import { useSearchParams } from 'next/navigation'
import clsx from 'clsx'
import { UI } from '@global/store'
import Link from 'next/link'

function Status() {
  const searchParams = useSearchParams()
  const rSection = searchParams.get('section')

  const _gpuTier = UI((state) => state.gpuTier)
  const sectionData = [
    {
      name: 'Server',
      contents: [
        {
          name: 'NodeJs',
          value: 'normal',
        },
      ],
    },
    {
      name: 'App',
      contents: [
        {
          name: 'Mobile?',
          value: _gpuTier?.isMobile?.toString(),
        },
        {
          name: 'Aurora',
          value: 'normal',
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
        {
          name: 'fps',
          value: _gpuTier?.fps,
        },
        {
          name: 'tier',
          value: _gpuTier?.tier,
        },
      ],
    },
  ]
  return (
    <div className='h-full w-full md:flex'>
      <div className='flex w-1/3 pb-4 pr-2 pt-2 md:flex-col md:pb-0'>
        {sectionData.map((v, i) => (
          <Link
            className={clsx(
              'Anim AnimTranslate-4 mr-2 cursor-pointer text-right text-4xl font-light uppercase hover:opacity-100 md:pr-0',
              rSection === v.name ? 'opacity-100' : 'opacity-20',
            )}
            href={`/status?section=` + v.name}
            key={i}
          >
            {v.name}
          </Link>
        ))}
      </div>
      <div className='grow pl-2'>
        {sectionData[
          rSection === 'Server' ? 0 : rSection === 'App' ? 1 : 2
        ].contents.map((v, i) => (
          <div
            key={i}
            className='Anim mb-2 flex w-full items-center justify-between rounded-lg border-l-2 border-white/5 bg-black/5 px-6 py-4 hover:border-quaternary-2 dark:bg-white/5 dark:hover:border-primary-0 xl:hover:translate-x-1'
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
