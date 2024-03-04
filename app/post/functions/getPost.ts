/* eslint-disable react-hooks/rules-of-hooks */
import { gql } from 'graphql-request'
import { useFetchQL } from '@aurora/libs/hooks/data'
import { env } from '@global/env.mjs'
import { FETCH } from '../post.d'

const getPost = async (slug: string) => {
  try {
    const requestQL = gql`
      query Post($slug: String!) {
        post(where: { slug: $slug }) {
          title
          tag
          slug
          featured
          excerpt
          coverImage {
            url
            width
            height
          }
          date
          content {
            raw
          }
          relatedContent {
            title
            slug
            tag
            coverImage {
              url
              width
              height
            }
          }
        }
      }
    `

    const { post } = await useFetchQL(
      env.GRAPHQL_CONTENT_URL,
      { query: requestQL, variables: { slug } },
      180,
    )

    return { status: FETCH.SUCCESS, post }
  } catch (error) {
    return { status: FETCH.ERROR, error }
  }
}

export { getPost }
