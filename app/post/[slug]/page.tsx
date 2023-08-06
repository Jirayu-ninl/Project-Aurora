/* eslint-disable @typescript-eslint/no-explicit-any */
import { gql, request as gqlRequest } from 'graphql-request'
import Client from './page.client'
import * as FALLBACK from '@components/post/error'
import type { tPost } from '../post'

enum FETCH {
  SUCCESS,
  ERROR,
}

const getPost = async (slug: string) => {
  try {
    if (!process.env.GRAPHQL_CONTENT_URL) {
      throw 'no api endpoint that request'
    }

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
          }
          relatedContent {
            title
            slug
            tag
            coverImage {
              url
              width
              height
            }
          }
        }
      }
    `

    const { post } = await gqlRequest<{ post: tPost }>(
      process.env.GRAPHQL_CONTENT_URL as string,
      requestQL,
      {
        slug: slug,
      },
    )

    return { status: FETCH.SUCCESS, post }
  } catch (error) {
    return { status: FETCH.ERROR, error }
  }
}

async function Page({ params: { slug } }: { params: { slug: string } }) {
  const data = await getPost(slug)

  if (data.status === FETCH.ERROR) {
    console.log(data)
    return (
      <FALLBACK.ConnectionError
        title='POST'
        backURL='/post'
        error={data.error}
      />
    )
  }

  if (!data.post) {
    return <FALLBACK.NotFound title='POST' backURL='/post' />
  }

  return <>{data.post && <Client post={data.post} />}</>
}

export default Page
