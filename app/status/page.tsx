'use client'

import { useSearchParams } from 'next/navigation'
import clsx from 'clsx'
import Link from 'next/link'
import { UI } from '@global/store'

import Data from './data'

function Status() {
  const searchParams = useSearchParams()
  const rSection = searchParams.get('section')

  const _gpuTier = UI((state) => state.gpuTier)
  const _dark = UI((state) => state.dark)
  const _audio = UI((state) => state.audio)

  const sectionData = Data(_gpuTier, _dark, _audio)

  return (
    <div className='h-full w-full overflow-y-hidden md:flex'>
      <div className='flex w-full overflow-x-scroll pb-4 pr-2 pt-2 md:w-1/3 md:flex-col md:pb-0'>
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
      <div className='h-full grow overflow-y-scroll pb-16 pl-2'>
        {rSection &&
          sectionData[
            rSection === 'app' ? 0 : rSection === 'server' ? 1 : 2
          ].contents.map((v, i) =>
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
        {rSection === null && (
          <div className='Anim mb-2 flex w-full items-center justify-center px-6 py-4'>
            <h6 className='text-xl font-light'>no selected</h6>
          </div>
        )}
      </div>
    </div>
  )
}

export default Status
