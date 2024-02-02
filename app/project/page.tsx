/* eslint-disable react-hooks/rules-of-hooks */
import { gql } from 'graphql-request'
import Client from './page.client.temp'
import * as FALLBACK from '@components/post/error'
import { useFetchQL } from '@aurora/libs/hooks/data'
import { env } from '@global/env.mjs'

export const metadata = {
  title: 'Projects',
}

enum FETCH {
  SUCCESS,
  ERROR,
}

const getProjects = async () => {
  const endpointURL = env.GRAPHQL_PROJECT_URL
  try {
    const requestQL = gql`
      {
        projects_old {
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

    const { projects_old: projects } = await useFetchQL(
      endpointURL,
      { query: requestQL },
      180,
    )

    return { status: FETCH.SUCCESS, projects }
  } catch (error) {
    return { status: FETCH.ERROR, error }
  }
}

async function Page() {
  const data = await getProjects()

  // const data = DATA.demo

  if (data.status === FETCH.ERROR) {
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
