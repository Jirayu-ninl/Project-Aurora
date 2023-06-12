/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from 'next/link'
import { gql, request as gqlRequest } from 'graphql-request'
import SetState from '@app/resources/common/components/setDefaultNavActiveState'

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
      <SetState />
      <main className='relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden'>
        <h1 className='text-xl'>Projects</h1>
        {data.projects ? (
          data.projects.map((v: any, i: number) => (
            <Link href={'/project/' + v.slug} key={i}>
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
