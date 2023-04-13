import { useEffect } from 'react'
import { GetStaticProps } from 'next'
import { GraphQLClient, gql } from 'graphql-request'
import { Home } from 'pages/posts'
import { State } from '@store'

const graphcms = new GraphQLClient(process.env.GRAPHQL_CONTENT_URL)

export const getStaticProps: GetStaticProps = async () => {
  const { posts } = await graphcms.request(
    gql`
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
    `,
  )

  return {
    props: {
      title: 'TheIceJI Blog',
      posts,
    },
    revalidate: 180,
  }
}

export default function Posts({ posts }) {
  const _setPage = State((state) => state.setPage)
  useEffect(() => {
    _setPage('Blogs')
  }, [_setPage])

  return (
    <div>
      <Home.Blogs posts={posts} />
    </div>
  )
}

Posts.disableFooter = true
