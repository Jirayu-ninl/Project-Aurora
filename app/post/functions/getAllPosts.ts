/* eslint-disable react-hooks/rules-of-hooks */
import { gql } from 'graphql-request'
import { useFetchQL } from '@aurora/libs/hooks/data'
import { env } from '@global/env.mjs'
import { FETCH } from '../post.d'

const getAllPosts = async () => {
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

export { getAllPosts }
