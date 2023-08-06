/* eslint-disable @typescript-eslint/no-explicit-any */
import { gql, request as gqlRequest } from 'graphql-request'
import Client from './page.client'
import * as FALLBACK from '@components/post/error'
import type { tProject } from '../project'

enum FETCH {
  SUCCESS,
  ERROR,
}

const getProject = async (slug: string) => {
  try {
    if (!process.env.GRAPHQL_PROJECT_URL) {
      throw 'no api endpoint that request'
    }

    const requestQL = gql`
      query Page($slug: String!) {
        project(where: { slug: $slug }) {
          title
          projectType
          featured
          excerpt
          tagline
          slug
          tag
          projectCategory {
            title
            slug
          }
          headerType {
            selectHeaderType
            headerGallery {
              height
              width
              url
            }
          }
          coverImage {
            url
          }
          colorIdentity {
            rgba {
              g
              b
              r
            }
            hex
          }
          client
          industry
          projectDate
          services
          introduction {
            html
          }
          bannerOption
          bannerImage {
            url
            height
            width
          }
          about {
            html
          }
          gallery {
            url
            height
            width
          }
          identities {
            html
          }
          color
          conclusion {
            html
          }
          relatedProject {
            title
            tagline
            tag
            slug
            coverImage {
              url
              width
              height
            }
          }
        }
      }
    `

    const { project } = await gqlRequest<{ project: tProject }>(
      process.env.GRAPHQL_PROJECT_URL as string,
      requestQL,
      {
        slug: slug,
      },
    )

    return { status: FETCH.SUCCESS, project }
  } catch (error) {
    return { status: FETCH.ERROR, error }
  }
}

async function Page({ params: { slug } }: { params: { slug: string } }) {
  const data = await getProject(slug)

  if (data.status === FETCH.ERROR) {
    return (
      <FALLBACK.ConnectionError
        title='PROJECT'
        backURL='/project'
        error={data.error}
      />
    )
  }

  if (!data.project) {
    return <FALLBACK.NotFound title='PROJECT' backURL='/project' />
  }

  return (
    <>
      <Client project={data.project} />
    </>
  )
}

export default Page
