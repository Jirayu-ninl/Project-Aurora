'use client'

import Link from 'next/link'

const Client = ({ posts }: { posts: any }) => {
  // console.log(data)

  return (
    <>
      <main className='relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden'>
        <h1 className='text-xl'>Projects</h1>
        {posts ? (
          posts.map((v: any, i: number) => (
            <Link href={'/post/' + v.slug} key={i}>
              {v.title}
            </Link>
          ))
        ) : (
          <h6>No data</h6>
        )}
      </main>
    </>
  )
}

export default Client
