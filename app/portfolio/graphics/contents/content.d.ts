export type tContent = {
  name: string
  year: string
  tag?: string[]
  img: string
  link?: tLink[]
  description: string
}

type tLink = {
  title: string
  url: string
}
