/* eslint-disable react-hooks/rules-of-hooks */
import { MetadataRoute } from 'next'
import { gql } from 'graphql-request'
import { env } from '@global/env.mjs'
import { useFetchQL } from '@aurora/libs/hooks/data'

const baseURL = 'https://theiceji.com'

type tPost = {
  title: string
  slug: string
  date: string
}

const getPosts = async () => {
  try {
    const requestQL = gql`
      {
        posts {
          slug
          title
          date
        }
      }
    `

    const { posts } = await useFetchQL(
      env.GRAPHQL_CONTENT_URL,
      { query: requestQL },
      180,
    )

    return posts.map((post: tPost) => ({
      url: baseURL + '/post/' + post.slug,
      lastModified: post.date ?? new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    }))
  } catch (error) {
    return []
  }
}

const getProjects = async () => {
  try {
    const requestQL = gql`
      {
        projects_old {
          title
          slug
          date
        }
      }
    `

    const { projects_old: projects } = await useFetchQL(
      env.GRAPHQL_PROJECT_URL,
      { query: requestQL },
      180,
    )

    return projects.map((post: tPost) => ({
      url: baseURL + '/project/' + post.slug,
      lastModified: post.date ?? new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    }))
  } catch (error) {
    return []
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts()
  const projects = await getProjects()
  return [
    {
      url: baseURL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: baseURL + '/showcase/2023',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: baseURL + '/showcase/2022',
      lastModified: new Date(),
      changeFrequency: 'never',
      priority: 0.8,
    },
    {
      url: baseURL + '/about',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: baseURL + '/about/skills',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: baseURL + '/project',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.6,
    },
    ...projects,
    {
      url: baseURL + '/post',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.6,
    },
    ...posts,
    {
      url: baseURL + '/portfolio',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: baseURL + '/portfolio/graphics',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: baseURL + '/portfolio/dev',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: baseURL + '/portal',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: baseURL + '/portal/signup',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: baseURL + '/tools/glslEditor',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: baseURL + '/tools/clock',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: baseURL + '/help/privacy-policy',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.2,
    },
    {
      url: baseURL + '/help/terms-of-service',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.2,
    },
  ]
}
