'use client'

import Link from 'next/link'
import clsx from 'clsx'
import { useSearchParams } from 'next/navigation'
import { Card } from './card'
import { CardsList } from './card.list'

export const Cards = () => {
  const routerOn = useSearchParams().get('routerOn')
  return (
    <>
      <div className='grid h-[calc(100vh-320px)] w-full grid-cols-2 grid-rows-3 gap-1 md:gap-3 xl:h-[450px] xl:grid-cols-3 xl:grid-rows-2 xxl:h-[600px]'>
        {CardsList.map((v, i) => (
          <Link
            href={`/?routerOn=true&target=` + v.target}
            className={clsx('Anim AnimTranslate-4', v.className)}
            aria-label={v.title}
            key={i}
          >
            <Card
              routerOn={routerOn}
              transition={{ delay: i * 0.1 }}
              imageBg={{
                src: v.Image.src,
                alt: v.Image.alt,
              }}
              title={v.title}
              description={v.description}
            />
          </Link>
        ))}
      </div>
    </>
  )
}
