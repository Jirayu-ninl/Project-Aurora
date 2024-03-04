/* eslint-disable react-hooks/rules-of-hooks */
import type { Metadata } from 'next'
import { gql } from 'graphql-request'
import Client from './page.client'
import * as FALLBACK from '@components/post/error'
import { useFetchQL } from '@aurora/libs/hooks/data'
import { env } from '@global/env.mjs'
import { FETCH } from '../project.d'
import { getProject } from '../functions'

type PageProps = {
  params: { slug: string }
}

const endpointURL = env.GRAPHQL_PROJECT_URL

export const generateMetadata = async ({
  params: { slug },
}: PageProps): Promise<Metadata> => {
  try {
    const requestQL = gql`
      query Project($slug: String!) {
        project_old(where: { slug: $slug }) {
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
    const { project_old: project } = await useFetchQL(
      endpointURL,
      { query: requestQL, variables: { slug } },
      180,
    )

    return {
      title: project.title,
      description: project.excerpt,
      openGraph: {
        title: project.title,
        images: [project.coverImage],
      },
      twitter: {
        card: 'summary_large_image',
        title: project.title,
        description: project.excerpt,
        images: [project.coverImage],
      },
    }
  } catch (error) {
    return {
      title: 'Post not found | IceJiVerse',
    }
  }
}

async function Page({ params: { slug } }: PageProps) {
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
