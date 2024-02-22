import Link from 'next/link'
import clsx from 'clsx'

export function Sidebar() {
  const linkList = [
    {
      name: 'About',
      url: '/about',
    },
    {
      name: 'Skills',
      url: '/about/skills',
    },
    {
      name: 'Projects',
      url: '/project',
    },
    {
      name: 'Services',
      url: '/services',
    },
  ]
  return (
    <div className='absolute right-8 top-0 flex h-[80vh] w-[12px] flex-col items-center justify-center'>
      <SidebarList name='Home' isActive={true} href='/home' />
      {linkList.map((v, i) => (
        <>
          <div className='mt-0.5 h-6 w-px bg-white xxl:h-12' key={i} />
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
      <div className='relative h-2 w-2 rounded-full border border-white xxl:h-3 xxl:w-3'>
        <p
          className={clsx(
            'Anim absolute right-4 -mt-0.5 cursor-pointer text-2xs uppercase tracking-wide opacity-20 hover:opacity-100 xxl:right-6 xxl:-mt-1.5 xxl:text-sm',
            isActive && 'opacity-100',
          )}
        >
          {name}
        </p>
        <div
          className='m-px h-1 w-1 rounded-full bg-white xxl:m-0.5 xxl:h-1.5 xxl:w-1.5'
          style={{ opacity: isActive ? 1 : 0 }}
        />
      </div>
    </Link>
  )
}
