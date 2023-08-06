/* eslint-disable @typescript-eslint/no-explicit-any */
import { gql, request as gqlRequest } from 'graphql-request'
import Client from './page.client'

export const metadata = {
  title: 'Projects',
}

const getPosts = async () => {
  try {
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

    const { projects } = await gqlRequest<any>(
      process.env.GRAPHQL_PROJECT_URL as string,
      requestQL,
    )

    return { status: 'success', projects }
  } catch (error) {
    return { status: 'error', error }
  }
}

async function Page() {
  const data = await getPosts()

  return (
    <>
      <Client projects={data.projects} />
    </>
  )
}

export default Page
