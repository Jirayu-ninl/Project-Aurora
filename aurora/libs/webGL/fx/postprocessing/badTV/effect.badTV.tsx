import { Uniform } from 'three'
import { Effect } from 'postprocessing'

import fragmentShader from './fragmentShader.glsl'

let _uDistortion, _uDistortion2, _uSpeed, _uRollSpeed

export class BadTVEffect extends Effect {
  constructor({
    distortion = 3.0,
    distortion2 = 6.0,
    speed = 0.5,
    rollSpeed = 0.1,
  }) {
    super('HorizontalBlurEffect', fragmentShader, {
      uniforms: new Map([
        ['texture', new Uniform(null)],
        ['distortion', new Uniform(distortion)],
        ['distortion2', new Uniform(distortion2)],
        ['speed', new Uniform(speed)],
        ['rollSpeed', new Uniform(rollSpeed)],
      ]),
    })

    _uDistortion = distortion
    _uDistortion2 = distortion2
    _uSpeed = speed
    _uRollSpeed = rollSpeed
  }

  /**
   * Updates this effect.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
   * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
   */

  update(renderer, inputBuffer, deltaTime) {
    this.uniforms.get('distortion').value = _uDistortion
    this.uniforms.get('distortion2').value = _uDistortion2
    this.uniforms.get('speed').value = _uSpeed
    this.uniforms.get('rollSpeed').value = _uRollSpeed
  }
}
