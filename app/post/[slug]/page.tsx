/* eslint-disable @typescript-eslint/no-explicit-any */
import { gql, request as gqlRequest } from 'graphql-request'
import Client from './page.client'

const getPosts = async (slug: string) => {
  try {
    const requestQL = gql`
      query PostsPage($slug: String!) {
        post(where: { slug: $slug }) {
          title
          tag
          slug
          featured
          excerpt
          coverImage {
            url
            width
            height
          }
          date
          content {
            raw
            html
          }
          relatedContent {
            title
            slug
            tag
            coverImage {
              width
              url
              height
            }
          }
        }
      }
    `

    const { post } = await gqlRequest<any>(
      process.env.GRAPHQL_CONTENT_URL as string,
      requestQL,
      {
        slug: slug,
      },
    )

    return { status: 'success', post }
  } catch (error) {
    return { status: 'error', error }
  }
}

async function Page({ params: { slug } }: { params: { slug: string } }) {
  const data = await getPosts(slug)

  return (
    <>
      <Client post={data.post} />
    </>
  )
}

export default Page
