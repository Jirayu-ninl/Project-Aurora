/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from 'next/link'
import { gql, request as gqlRequest } from 'graphql-request'

export const metadata = {
  title: 'Posts',
}

const getPosts = async () => {
  try {
    const requestQL = gql`
      {
        posts {
          slug
          title
          excerpt
          date
          featured
          tag
          coverImage {
            height
            url
            width
          }
        }
      }
    `

    const { posts } = await gqlRequest<any>(
      process.env.GRAPHQL_CONTENT_URL as string,
      requestQL,
    )

    return { status: 'success', posts }
  } catch (error) {
    return { status: 'error', error }
  }
}

async function Page() {
  const data = await getPosts()

  return (
    <>
      <main className='relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden'>
        <h1 className='text-xl'>Posts</h1>
        {data.posts ? (
          data.posts.map((v: any, i: number) => (
            <Link key={i} href={`/post/` + v.slug}>
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

export default Page
