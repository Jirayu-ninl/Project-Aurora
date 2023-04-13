import { useEffect } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import { GraphQLClient, gql } from 'graphql-request'
import { Project } from 'pages/posts'
import { State } from '@store'
import { ErrorPage } from 'pages/misc/components'

const graphcms = new GraphQLClient(process.env.GRAPHQL_PROJECT_URL)

export const getStaticPaths: GetStaticPaths = async () => {
  const { projects } = await graphcms.request(gql`
    {
      projects {
        slug
      }
    }
  `)

  return {
    paths:
      projects.map(({ slug }: { slug: string }) => ({ params: { slug } })) ||
      [],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params
  const { project } = await graphcms.request(
    gql`
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
    `,
    {
      slug: slug,
    },
  )

  return {
    props: {
      title: `${project?.title || null} - TheIceJI Project`,
      description: project?.tagline + ' | ' + project?.excerpt || null,
      coverImg: project?.coverImage.url || null,
      project: project || null,
    },
    revalidate: 180,
  }
}

// Main UI

export default function Post({ project }) {
  const _setPage = State((state) => state.setPage)
  useEffect(() => {
    _setPage('PROJECT | ' + project?.title)
  }, [project, _setPage])

  const router = useRouter()
  if (!router.isFallback && !project?.slug) {
    return <ErrorPage err='404' msg='not found' />
  }

  return (
    <>
      {router.isFallback ? (
        <div className='flex h-screen w-screen items-center justify-center'>
          <p>Loading...</p>
        </div>
      ) : (
        <Project content={project} type={project.projectType} />
      )}
    </>
  )
}

Post.disableFooter = true
