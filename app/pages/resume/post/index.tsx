import { useState } from 'react'
import Header from './header'
import { UseSmoothScroll } from 'views/animations/hooks'
import { InnerHeight } from '@libs/hooks/v2/useWindowSize'
import { motion, useScroll, useTransform } from 'framer-motion'
import TableOfContents from './tableOfContents'
import Content from './content'

const ScrollProgress = ({ pageHeight }) => {
  const { scrollY } = useScroll()
  const windowHeight = InnerHeight(-1)
  const X = useTransform(
    scrollY,
    [0, pageHeight - windowHeight],
    ['-100%', '0%'],
  )

  return (
    <div className='fixed bottom-0 left-0 z-10 flex'>
      <motion.div
        style={{ x: X }}
        className='h-0.5 w-screen bg-primary-0'
      ></motion.div>
    </div>
  )
}

function Graphics() {
  const [pageHeight, setPageHeight] = useState(null)

  return (
    <>
      <ScrollProgress pageHeight={pageHeight} />
      <UseSmoothScroll
        Callback={setPageHeight}
        physics={{ damping: 1, mass: 0.01, stiffness: 5 }}
      >
        <Header
          Title='Portfolio (Post-production)'
          Img='/blog/c_f001_pipeline_3/Header-Post-production-pipeline.jpg'
          Tags={[]}
          lang='th'
        />
        <div className='flex w-screen'>
          <div className='container py-12 px-4 sm:px-8 sm:py-24 md:px-12 lg:py-48 xl:w-[1024px]'>
            <TableOfContents />
            <Content />
          </div>
        </div>
      </UseSmoothScroll>
    </>
  )
}

export default Graphics
