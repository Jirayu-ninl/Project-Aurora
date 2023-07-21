import { CanvasTexture } from 'three'

export class DrawerText2d {
  public texture
  public aspect

  private _ctx

  constructor(
    private _text1: string,
    private _width: number,
  ) {
    const canvas = document.createElement('canvas')
    canvas.width = this._width
    canvas.height = this._width / 2.2
    this._ctx = canvas.getContext('2d')!
    this.aspect = this._width / canvas.height
    this.texture = new CanvasTexture(canvas)
  }

  draw = (fontSize: number, _margin: number, _dark: boolean) => {
    const ctx = this._ctx
    const { width, height } = this._ctx.canvas

    ctx.clearRect(0, 0, width, height)
    ctx.textAlign = 'left'
    ctx.textBaseline = 'hanging'
    ctx.font = `bold ${fontSize}px sans-serif`
    ctx.fillStyle = _dark ? '#fff' : '#1a1a1a'

    ctx.fillText(this._text1, _margin, _margin)
  }
}
