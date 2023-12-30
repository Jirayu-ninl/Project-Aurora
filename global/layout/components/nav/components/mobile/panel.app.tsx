import { useState, type Dispatch } from 'react'
import { useRouter } from 'next/navigation'
import clsx from 'clsx'

import { User } from '@global/store'

import SubPanel from './panel.subPanel'
import UserPanel from './panel.user'
import SettingsPanel from './panel.settings'

const AppPanel = ({
  session,
  _dark,
  _setDark,
  setShowPanel,
}: {
  session: any
  _dark: boolean
  _setDark: (d: boolean) => void
  setShowPanel: Dispatch<boolean>
}) => {
  const router = useRouter()
  const _cart = User((state) => state.cart)

  const [section, setSection] = useState(0)

  const Sections = [
    { title: 'user', blocks: [] },
    { title: 'cart', blocks: [] },
    {
      title: 'settings',
      blocks: [],
    },
  ]

  return (
    <>
      <div className='flex space-x-1 py-2'>
        {Sections.map((v, i) => (
          <div
            key={i}
            onClick={() => setSection(i)}
            className={clsx(
              'Anim w-full rounded-md border border-black/20 px-2 py-1 text-center text-xs font-bold dark:border-white/20',
              section === i &&
                'bg-quaternary-2 text-white dark:bg-primary-0 dark:text-black',
            )}
          >
            {v.title}
          </div>
        ))}
      </div>
      <div className='h-[calc(100%-1.5rem)] overflow-hidden px-px py-2'>
        {section === 0 && (
          <UserPanel session={session} setShowPanel={setShowPanel} />
        )}
        {section === 1 && (
          <SubPanel
            items={_cart}
            title='Cart'
            buttonText='Open cart'
            buttonCallback={() => router.push('/shop/cart')}
          />
        )}
        {section === 2 && <SettingsPanel _dark={_dark} _setDark={_setDark} />}
      </div>
    </>
  )
}

export default AppPanel
