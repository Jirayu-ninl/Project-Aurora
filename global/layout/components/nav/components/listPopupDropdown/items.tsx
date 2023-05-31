import Link from 'next/link'
import type { tUser } from '@global/store'

const Items = ({ list }: { list: tUser.tNotification[] | tUser.tCart[] }) => (
  <div className='h-full overflow-scroll'>
    {list?.map((v, i) => (
      <Link href={v.link} passHref key={i}>
        <div className='Anim AnimOpacity-80 mt-1 w-full cursor-pointer border-2 border-transparent border-l-primary-0 bg-white/20 p-2 dark:bg-black/20'>
          <h6 className='text-xs'>{v.title}</h6>
          <p className='mt-1 text-xs font-light opacity-80'>{v.description}</p>
          <p className='-mb-1 mt-1 text-right text-2xs font-light opacity-80'>
            {v.time}
          </p>
        </div>
      </Link>
    ))}
  </div>
)

export default Items
