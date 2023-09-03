/* eslint-disable react-hooks/rules-of-hooks */
import type { Metadata } from 'next'
import { gql } from 'graphql-request'
import Client from './page.client'
import * as FALLBACK from '@components/post/error'
import { useFetchQL } from '@aurora/libs/hooks/data'
import { env } from '@global/env.mjs'

type PageProps = {
  params: { slug: string }
}

enum FETCH {
  SUCCESS,
  ERROR,
}

const endpointURL = env.GRAPHQL_CONTENT_URL

export const generateMetadata = async ({
  params: { slug },
}: PageProps): Promise<Metadata> => {
  try {
    const requestQL = gql`
      query Post($slug: String!) {
        post(where: { slug: $slug }) {
          title
          excerpt
          coverImage {
            url
            width
            height
          }
        }
      }
    `
    const { post } = await useFetchQL(
      endpointURL,
      { query: requestQL, variables: { slug } },
      180,
    )

    return {
      title: post.title,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        images: [post.coverImage],
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.excerpt,
        images: [post.coverImage],
      },
    }
  } catch (error) {
    return {
      title: 'Post not found | IceJiVerse',
    }
  }
}

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
      endpointURL,
      { query: requestQL, variables: { slug } },
      180,
    )

    return { status: FETCH.SUCCESS, post }
  } catch (error) {
    return { status: FETCH.ERROR, error }
  }
}

async function Page({ params: { slug } }: PageProps) {
  const data = await getPost(slug)

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

  if (!data.post) {
    return <FALLBACK.NotFound title='POST' backURL='/post' />
  }

  return (
    <>
      <Client post={data.post} />
    </>
  )
}

export default Page
