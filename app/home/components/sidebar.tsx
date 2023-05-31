import Link from 'next/link'
import clsx from 'clsx'

export default function Sidebar() {
  const linkList = [
    {
      name: 'Adaptability',
      url: '/home?title=Adaptability',
    },
    {
      name: 'Collaboration',
      url: '/home?title=Collaboration',
    },
    {
      name: 'Creativity',
      url: '/home?title=Creativity',
    },
    {
      name: 'Problem-solving',
      url: '/home?title=Problem-solving',
    },
    {
      name: 'Enthusiasm',
      url: '/home?title=Enthusiasm',
    },
  ]
  return (
    <div className='absolute left-4 top-80 flex h-[40vh] w-[12px] flex-col items-center justify-center md:h-[60vh] lg:left-6 xl:top-0 xl:h-[80vh] xxl:left-8'>
      <SidebarList name='Home' isActive={true} href='/home' />
      {linkList.map((v, i) => (
        <>
          <div
            className='Anim mt-0.5 h-6 w-px bg-black dark:bg-white xxl:h-12'
            key={i}
          />
          <SidebarList name={v.name} isActive={false} href={v.url} />
        </>
      ))}
    </div>
  )
}

const SidebarList = ({
  name,
  isActive,
  href,
}: {
  name: string
  isActive: boolean
  href: string
}) => {
  return (
    <Link href={href} passHref>
      <div className='Anim relative h-2 w-2 rounded-full border border-black dark:border-white xxl:h-3 xxl:w-3'>
        <p
          className={clsx(
            'Anim pointer-events-auto absolute left-4 -mt-0.5 cursor-pointer whitespace-nowrap text-2xs uppercase hover:opacity-100 xxl:left-6 xxl:-mt-0.5 xxl:text-xs',
            isActive ? 'opacity-100' : 'opacity-20',
          )}
        >
          {name}
        </p>
        <div
          className='Anim m-px h-1 w-1 rounded-full bg-black dark:bg-white xxl:m-0.5 xxl:h-1.5 xxl:w-1.5'
          style={{ opacity: isActive ? 1 : 0 }}
        />
      </div>
    </Link>
  )
}
