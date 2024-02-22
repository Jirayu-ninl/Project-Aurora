import Link from 'next/link'
import { Client } from './page.client'
import { Card } from './card'
import { ShowcasesList } from './showcase.list'

const Page = () => {
  return (
    <>
      <Client />
      <div className='flex w-dvw flex-col items-center justify-center md:h-dvh'>
        <div className='w-full px-8 pb-48 pt-8 md:pb-0 md:pt-0 xl:w-[900px] xl:px-0 xxl:w-[1000px]'>
          <div className='grid h-[calc(100vh-320px)] w-full grid-cols-3 gap-1 md:gap-3 xl:h-[450px] xxl:h-[600px]'>
            {ShowcasesList.map((v, i) => (
              <Link href={v.target} className='Anim AnimTranslate-4' key={i}>
                <Card
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
        </div>
      </div>
    </>
  )
}

export default Page
