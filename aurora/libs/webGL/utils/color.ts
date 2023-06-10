export const RGBtoArray = (r: number, g: number, b: number, mul: number) => [
  (r / 255) * mul,
  (g / 255) * mul,
  (b / 255) * mul,
]

const Func = {
  RGBtoArray,
}

export default Func
