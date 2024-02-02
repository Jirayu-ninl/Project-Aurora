'use client'

import Header from './components/header'
import { SmoothScroll } from '@aurora/views/animations'
import { useScrollState } from '@aurora/libs/hooks/animations'
import TableOfContents from './components/tableOfContents'
import Content from './contents'

function Page() {
  const { handleScroll } = useScrollState(0)

  return (
    <>
      <SmoothScroll
        Callback={handleScroll}
        physics={{ damping: 1, mass: 0.01, stiffness: 5 }}
      >
        <Header
          Title='Portfolio (Post-production)'
          Img='/page/portfolio/header.jpg'
          Tags={[]}
          lang='th'
        />
        <div className='flex w-full'>
          <div className='container px-4 py-12 sm:px-8 sm:py-24 md:px-12 lg:py-48 xl:w-[1024px]'>
            <TableOfContents />
            <Content />
          </div>
        </div>
      </SmoothScroll>
    </>
  )
}

export default Page
