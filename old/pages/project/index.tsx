import { GetStaticProps } from 'next'
import { useEffect } from 'react'
import { GraphQLClient, gql } from 'graphql-request'
import { Home, Store } from 'pages/posts'
import { State } from '@store'

const graphcms = new GraphQLClient(process.env.GRAPHQL_PROJECT_URL)

export const getStaticProps: GetStaticProps = async () => {
  const { projects } = await graphcms.request(
    gql`
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
    `,
  )

  return {
    props: {
      title: 'TheIceJI Project',
      projects,
    },
    revalidate: 180,
  }
}

export default function Index({ projects }) {
  const setProjects = Store((state) => state.setProjects)
  const _setPage = State((state) => state.setPage)

  useEffect(() => {
    setProjects([...projects, ...projects])
    _setPage('Projects')
  }, [projects, _setPage, setProjects])

  return (
    <div className='relative h-screen w-screen bg-gradient-to-r from-black via-background-2 to-black'>
      <div className='pointer-events-none absolute z-10 flex h-full w-screen flex-col items-center justify-between'>
        <Home.Projects.Overlay />
      </div>
      <div className='flex h-full w-full items-end justify-center pb-16 md:pb-0'>
        <Home.Projects.Canvas3D />
      </div>
    </div>
  )
}
