const componentToHex = (c: number) => {
  const hex = c.toString(16)
  return hex.length == 1 ? '0' + hex : hex
}

export const RGBtoArray = (
  r: number,
  g: number,
  b: number,
  mul: number = 1,
) => [(r / 255) * mul, (g / 255) * mul, (b / 255) * mul]

export const RGBtoHEX = (r: number, g: number, b: number) =>
  '#' + componentToHex(r) + componentToHex(g) + componentToHex(b)

export const HEXtoRGB = (h: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(h)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null
}

export const HEXtoArray = (h: string, mul: number = 1) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(h)
  return result
    ? [
        (parseInt(result[1], 16) / 255) * mul,
        (parseInt(result[2], 16) / 255) * mul,
        (parseInt(result[3], 16) / 255) * mul,
      ]
    : null
}

export const HEXtoThree = (h: string, mul: number = 1, cb: any) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(h)
  return result
    ? new cb(
        (parseInt(result[1], 16) / 255) * mul,
        (parseInt(result[2], 16) / 255) * mul,
        (parseInt(result[3], 16) / 255) * mul,
      )
    : null
}

const Func = {
  RGBtoArray,
  RGBtoHEX,
  HEXtoRGB,
  HEXtoArray,
  HEXtoThree,
}

export default Func
