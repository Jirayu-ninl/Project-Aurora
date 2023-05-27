import { useEffect } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import { GraphQLClient, gql } from 'graphql-request'
import { Blog } from 'pages/posts'
import { State } from '@store'
import { ErrorPage } from 'pages/misc/components'

const graphcms = new GraphQLClient(process.env.GRAPHQL_CONTENT_URL)

export const getStaticPaths: GetStaticPaths = async () => {
  const { posts } = await graphcms.request(gql`
    {
      posts {
        slug
      }
    }
  `)

  return {
    paths:
      posts.map(({ slug }: { slug: string }) => ({ params: { slug } })) || [],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params
  const { post } = await graphcms.request(
    gql`
      query PostsPage($slug: String!) {
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
            html
          }
          relatedContent {
            title
            slug
            tag
            coverImage {
              width
              url
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
      title: `TheIceJI Blog | ${post?.title || null}`,
      description: post?.excerpt || null,
      coverImg: '',
      post: post || null,
    },
    revalidate: 180,
  }
}

export default function Post({ post }) {
  const _setPage = State((state) => state.setPage)
  useEffect(() => {
    _setPage('BLOG | ' + post?.title || 'not found')
  }, [post, _setPage])

  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage err='404' msg='not found' />
  }

  return (
    <>
      {router.isFallback ? (
        <div className='flex h-screen w-screen items-center justify-center'>
          <p>Loading...</p>
        </div>
      ) : (
        <Blog content={post} />
      )}
    </>
  )
}

Post.disableFooter = true
