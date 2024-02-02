'use client'

import { SmoothScroll } from '@aurora/views/animations'
import { useScrollState } from '@aurora/libs/hooks/animations'
import { TypeA as Card } from '@components/post/card'

type tPost = {
  title: string
  slug: string
  featured: boolean
  tagline: string
  tag: string[]
  coverImage: {
    url: string
    width: number
    height: number
  }
}

const Client = ({ posts }: { posts: any[] }) => {
  posts = [...posts, ...posts]
  const { handleScroll } = useScrollState(0)

  return (
    <>
      <SmoothScroll Callback={handleScroll}>
        <div className='w-dvw flex bg-backgroundLight-1 dark:bg-background-1'>
          <div className='container px-2 py-24 lg:px-4 xl:w-full xl:px-8'>
            <h2 className='mb-2 pt-16 text-5xl font-extralight uppercase md:pt-64 md:text-7xl xl:pt-[55vh] xl:text-9xl el:text-10xl'>
              Posts
            </h2>
            <Posts posts={posts} />
          </div>
        </div>
      </SmoothScroll>
    </>
  )
}

const Posts = ({ posts }: { posts: tPost[] }) => {
  return (
    <>
      <div className='grid grid-cols-3 gap-2 xl:grid-cols-4 xl:gap-4'>
        {posts.map((v: any, i: number) => (
          <>
            <Card cardData={v} i={i} key={i} baseUrl='/post/' />
          </>
        ))}
      </div>
    </>
  )
}

export default Client
