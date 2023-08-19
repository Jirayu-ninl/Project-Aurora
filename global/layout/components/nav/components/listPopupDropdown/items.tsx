import Link from 'next/link'
import { formatDefault as formatDate } from '@aurora/utils/time/date'
// import type { tUser } from '@global/store'

const Items = ({ list }: { list: any[] | [] }) => {
  return (
    <>
      <div className='NSB h-full overflow-scroll'>
        {list?.map((v, i) => (
          <Link href={v.link} passHref key={i}>
            <div className='Anim AnimOpacity-80 mt-1 w-full cursor-pointer rounded-md border-l-2 border-quaternary-2 bg-black/5 p-2 dark:border-primary-0 dark:bg-white/5'>
              {v.title && <h6 className='text-xs'>{v.title}</h6>}
              {v.name && <h6 className='text-xs'>{v.name}</h6>}
              {v.description && (
                <p className='mt-1 text-xs font-light opacity-80'>
                  {v.description}
                </p>
              )}
              {v.text && (
                <p className='mt-1 text-xs font-light opacity-80'>{v.text}</p>
              )}
              <p className='-mb-1 mt-1 text-right text-2xs font-light opacity-80'>
                {formatDate(v.createdAt)}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Items
