export const getViewport = (w: number) => {
  let vp: string
  if (w >= 4.9) {
    vp = 'el'
  } else if (w >= 4.6) {
    vp = 'xl'
  } else if (w >= 1.9) {
    vp = 'lg'
  } else if (w >= 1.55) {
    vp = 'md'
  } else if (w >= 1.35) {
    vp = 'sm'
  } else {
    vp = 'xs'
  }
  return vp
}

export const getIsVertical = (w: number, aspect: number) => {
  let ver: boolean
  if (w <= 2.2 || aspect < 1) {
    ver = true
  } else {
    ver = false
  }
  return ver
}
