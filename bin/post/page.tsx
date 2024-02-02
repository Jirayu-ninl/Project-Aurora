/* eslint-disable react-hooks/rules-of-hooks */
import { gql } from 'graphql-request'
import Client from './page.client'
import * as FALLBACK from '@components/post/error'
import { useFetchQL } from '@aurora/libs/hooks/data'
import { env } from '@global/env.mjs'

export const metadata = {
  title: 'Posts',
}

enum FETCH {
  SUCCESS,
  ERROR,
}

const getPosts = async () => {
  const endpointURL = env.GRAPHQL_CONTENT_URL
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

    const { posts } = await useFetchQL(endpointURL, { query: requestQL }, 180)

    return { status: FETCH.SUCCESS, posts }
  } catch (error) {
    return { status: FETCH.ERROR, error }
  }
}

async function Page() {
  const data = await getPosts()

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

  if (!data.posts) {
    return <FALLBACK.NotFound title='POST' backURL='/post' />
  }

  return (
    <>
      <Client posts={data.posts} />
    </>
  )
}

export default Page
