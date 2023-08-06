/* eslint-disable @typescript-eslint/no-explicit-any */
import { gql, request as gqlRequest } from 'graphql-request'
import Client from './page.client'

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
      <Client posts={data.posts} />
    </>
  )
}

export default Page
