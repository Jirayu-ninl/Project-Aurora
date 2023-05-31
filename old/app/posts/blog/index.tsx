import { useState } from 'react'
import { BlogContentRaw, Header } from '../components'
import { UseSmoothScroll } from 'views/animations/hooks'
import { FooterPage } from 'views/layouts/footer'
import { ScrollProgress, FloatingShare } from '../func'

export default function Blog({ content }) {
  const [pageHeight, setPageHeight] = useState(null)
  const basePath = 'https://theiceji.com/post/'
  const shareMedia = content.title + '|' + content.tagline

  return (
    <>
      <ScrollProgress pageHeight={pageHeight} />
      <FloatingShare
        slug={content.slug}
        basePath={basePath}
        shareMedia={shareMedia}
      />
      <UseSmoothScroll Callback={setPageHeight}>
        <Header
          Title={content.title}
          Img={content.coverImage.url}
          Tags={content.tag}
          lang='th'
        />
        <div className='flex w-screen'>
          <div className='container py-48 px-4 xl:w-[1024px]'>
            <BlogContentRaw RAW={content.content.raw.children} />
          </div>
        </div>
        <FooterPage />
      </UseSmoothScroll>
    </>
  )
}
