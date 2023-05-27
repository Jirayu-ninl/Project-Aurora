export type FreeTimeItemsType = {
  FreeTimeItems: {
    title: string
    header: boolean
    coverImg: StaticImageData
    tags: { name: string; link: string }[]
    items: { Title: string; Img: StaticImageData; Sub: string; Link: string }[]
  }[]
}

export type FreeTimeItemType = {
  title: string
  header: boolean
  coverImg: StaticImageData
  tags: { name: string; link: string }[]
  items: { Title: string; Img: StaticImageData; Sub: string; Link: string }[]
}
