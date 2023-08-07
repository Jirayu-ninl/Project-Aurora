/* eslint-disable @typescript-eslint/no-explicit-any */
import { gql } from 'graphql-request'
import Client from './page.client'
import * as FALLBACK from '@components/post/error'

export const metadata = {
  title: 'Projects',
}

enum FETCH {
  SUCCESS,
  ERROR,
}

const getPosts = async () => {
  const endpointURL = process.env.GRAPHQL_PROJECT_URL
  try {
    if (!endpointURL) {
      throw 'no api endpoint that request'
    }

    const requestQL = gql`
      {
        projects {
          title
          slug
          featured
          tagline
          tag
          coverImage {
            url
            width
            height
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

    const { projects } = res.data

    return { status: FETCH.SUCCESS, projects }
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
        title='PROJECT'
        backURL='/project'
        error={data.error}
      />
    )
  }

  if (!data.projects) {
    return <FALLBACK.NotFound title='PROJECT' backURL='/project' />
  }

  return (
    <>
      <Client projects={data.projects} />
    </>
  )
}

export default Page
