/* eslint-disable @typescript-eslint/no-explicit-any */
import { gql } from 'graphql-request'
import Client from './page.client'
import * as FALLBACK from '@components/post/error'

export const metadata = {
  title: 'Posts',
}

enum FETCH {
  SUCCESS,
  ERROR,
}

const getPosts = async () => {
  const endpointURL = process.env.GRAPHQL_CONTENT_URL
  try {
    if (!endpointURL) {
      throw 'no api endpoint that request'
    }

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

    const res = await fetch(endpointURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: requestQL,
      }),
      next: { revalidate: 180 },
    }).then((res) => res.json())

    if (!res.data) {
      throw res.errors[0]?.message
    }

    const { posts } = res.data

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
