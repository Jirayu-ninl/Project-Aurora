export type tText = { bold?: boolean; text: string }
export type tImage = {
  type: string
  src: string
  altText: string
  height: number
  width: number
  handle?: string
  mimeType?: string
  children?: tContent[]
}

export type tContent =
  | {
      type?: string
      className?: string
      children: tText[] | tImage[] | tContent[]
    }
  | tImage

export type tRaw = {
  children: tText[] | tImage[] | tContent[]
}
