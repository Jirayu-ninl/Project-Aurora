'use client'

import clsx from 'clsx'
// import { State } from '@global/store'

export default function Sidebar({
  items,
  _pageStateIndex,
  _setPageStateIndex,
}: {
  items: { name: string; url?: string; id?: number }[]
  _pageStateIndex: number
  _setPageStateIndex: (i: number) => void
}) {
  return (
    <div className='hideLastChild-Parent absolute left-4 top-80 flex h-[40vh] w-[12px] flex-col items-center justify-center md:h-[60vh] lg:left-6 xl:top-0 xl:h-[80vh] xxl:left-8'>
      {items.map((v, i) => (
        <SidebarList
          name={v.name}
          key={i}
          id={i}
          _pageStateIndex={_pageStateIndex}
          _setPageStateIndex={_setPageStateIndex}
        />
      ))}
    </div>
  )
}

const SidebarList = ({
  name,
  id,
  _pageStateIndex,
  _setPageStateIndex,
}: {
  name: string
  id: number
  _pageStateIndex: number
  _setPageStateIndex: (id: number) => void
}) => {
  return (
    <>
      <div
        className={clsx(
          'Anim relative h-2 w-2 rounded-full border xxl:h-3 xxl:w-3',
          _pageStateIndex >= id
            ? 'border-quaternary-2 opacity-100 dark:border-primary-0'
            : 'border-black opacity-20 hover:opacity-100 dark:border-white',
        )}
        onClick={() => {
          _setPageStateIndex(id)
          console.log(_pageStateIndex)
        }}
      >
        <p
          className={clsx(
            'Anim pointer-events-auto absolute left-4 -mt-0.5 cursor-pointer whitespace-nowrap text-2xs uppercase hover:opacity-100 xxl:left-6 xxl:-mt-0.5 xxl:text-xs',
            _pageStateIndex >= id && 'text-quaternary-2 dark:text-primary-0',
          )}
        >
          {name}
        </p>
        <div
          className='Anim m-px h-1 w-1 rounded-full bg-quaternary-2 dark:bg-primary-0 xxl:m-0.5 xxl:h-1.5 xxl:w-1.5'
          style={{ opacity: _pageStateIndex >= id ? 1 : 0 }}
        />
      </div>
      <div
        className={clsx(
          'isChild mt-0.5 h-6 w-px xxl:h-12',
          _pageStateIndex >= id + 1
            ? 'bg-primary-0 opacity-100'
            : 'bg-black opacity-20 dark:bg-white',
        )}
      />
    </>
  )
}
