import type { StaticImageData } from 'next/image'

export type tFreeTimeItem = {
  title?: string
  header?: boolean
  coverImg?: StaticImageData
  tags?: { name: string; link: string }[]
  items?: { Title: string; Img: StaticImageData; Sub: string; Link: string }[]
}
