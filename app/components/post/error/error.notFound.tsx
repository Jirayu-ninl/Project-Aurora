import Link from 'next/link'
import { PageState } from './error.state'

const NotFound = ({ title, backURL }: { title: string; backURL: string }) => {
  return (
    <>
      <PageState title={title} />
      <div className='m-container flex w-full flex-col items-center justify-center'>
        <h2 className='text-4xl'>
          <span className='font-bold text-quaternary-2 dark:text-primary-0'>
            {title}
          </span>{' '}
          NOT FOUND
        </h2>
        <Link
          href={backURL}
          className='Anim AnimOpacity-60 mt-4 rounded-md border border-black/30 px-2 py-1 dark:border-white/30'
        >
          get back
        </Link>
      </div>
    </>
  )
}

export { NotFound }
