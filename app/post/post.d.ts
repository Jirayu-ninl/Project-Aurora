import type { tRaw } from '@components/post/utils'

export type tPost = {
  title: string
  tag: string[]
  slug: string
  featured: boolean
  excerpt: string
  coverImage: {
    url: string
    width: number
    height: number
  }
  date: string
  content: {
    raw: tRaw
  }
  relatedContent: {
    title: string
    slug: string
    tag: string[]
    coverImage: {
      url: string
      width: number
      height: number
    }
  }[]
}

export enum FETCH {
  SUCCESS,
  ERROR,
}
