/* eslint-disable @typescript-eslint/no-explicit-any */
import { gql, request as gqlRequest } from 'graphql-request'
import Client from './page.client'

const getPosts = async (slug: string) => {
  try {
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

    const { project } = await gqlRequest<any>(
      process.env.GRAPHQL_PROJECT_URL as string,
      requestQL,
      {
        slug: slug,
      },
    )

    return { status: 'success', project }
  } catch (error) {
    return { status: 'error', error }
  }
}

async function Page({ params: { slug } }: { params: { slug: string } }) {
  const data = await getPosts(slug)

  return (
    <>
      <Client project={data.project} />
    </>
  )
}

export default Page
