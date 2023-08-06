import type { RefObject } from 'react'

const ContentBlock = ({
  contentBlockData,
  refElement,
}: {
  contentBlockData: any
  refElement: RefObject<HTMLDivElement>
}) => {
  return (
    <div className='flex flex-col justify-between py-48 md:flex-row'>
      <h2 className='text-base font-semibold uppercase'>
        <span className='pr-2 text-xs text-quaternary-2 dark:text-primary-0'>
          /{contentBlockData.number}
        </span>
        {contentBlockData.title}
      </h2>
      <div
        className='Project-header mt-4 md:-mt-2 md:w-9/12 lg:w-3/5'
        ref={refElement}
      ></div>
    </div>
  )
}

export { ContentBlock }
