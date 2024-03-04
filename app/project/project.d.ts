export type tProject = {
  title: string
  projectType: 'APP' | 'PRODUCT' | 'MOVIE'
  featured: boolean
  excerpt: string
  tagline: string
  slug: string
  tag: string[]
  projectCategory: {
    title: string
    slug: string
  }[]
  coverImage: {
    url: string
  }
  headerType: {
    selectHeaderType: 'FULL' | 'GALLERY'
    headerGallery: {
      url: string
      height: number
      width: number
    }
  }
  colorIdentity: {
    rgba: {
      g: number
      b: number
      r: number
    }
    hex: string
  }
  client: string
  industry: string
  projectDate: string
  services: string
  introduction: {
    html: string
  }[]
  bannerOption: boolean
  bannerImage: {
    url: string
    height: number
    width: number
  }
  about: {
    html: string
  }[]
  gallery: {
    url: string
    height: number
    width: number
  }[]
  identities: {
    html: string
  }[]
  color: {
    codeColor: string
    name: string
    textColor: string
  }[]
  conclusion: {
    html: string
  }[]
  relatedProject: {
    title: string
    tagline: string
    tag: string[]
    slug: string
    coverImage: {
      url: string
      width: number
      height: number
    }
  }
}

export enum FETCH {
  SUCCESS,
  ERROR,
}
