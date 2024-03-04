/* eslint-disable react-hooks/rules-of-hooks */
import { gql } from 'graphql-request'
import { useFetchQL } from '@aurora/libs/hooks/data'
import { env } from '@global/env.mjs'
import { FETCH } from '../project.d'

const getProject = async (slug: string) => {
  try {
    const requestQL = gql`
      query Project($slug: String!) {
        project_old(where: { slug: $slug }) {
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

    const { project_old: project } = await useFetchQL(
      env.GRAPHQL_PROJECT_URL,
      { query: requestQL, variables: { slug } },
      180,
    )

    return { status: FETCH.SUCCESS, project }
  } catch (error) {
    return { status: FETCH.ERROR, error }
  }
}

export { getProject }
