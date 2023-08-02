import * as THREE from 'three'

function createMaterial(
  uniforms: tUniforms,
  vertexShader: string,
  fragmentShader: string,
  onInit?: (material?: THREE.ShaderMaterial) => void,
): typeof THREE.ShaderMaterial & {
  key: string
} {
  const material = class material extends THREE.ShaderMaterial {
    key: string
    static key: string
    constructor(parameters = {}) {
      const entries = Object.entries(uniforms)

      super({
        uniforms: entries.reduce((acc, [name, value]) => {
          const uniform = THREE.UniformsUtils.clone({
            [name]: {
              value,
            },
          })
          return { ...acc, ...uniform }
        }, {}),
        vertexShader,
        fragmentShader,
      })

      this.key = ''
      entries.forEach(([name]) =>
        Object.defineProperty(this, name, {
          get: () => this.uniforms[name].value,
          set: (v) => (this.uniforms[name].value = v),
        }),
      )

      Object.assign(this, parameters)

      if (onInit) onInit(this)
    }
  }
  material.key = THREE.MathUtils.generateUUID()
  return material
}

type tUniforms = {
  [name: string]:
    | THREE.CubeTexture
    | THREE.Texture
    | Int32Array
    | Float32Array
    | THREE.Matrix4
    | THREE.Matrix3
    | THREE.Quaternion
    | THREE.Vector4
    | THREE.Vector3
    | THREE.Vector2
    | THREE.Color
    | number
    | boolean
    | Array<any>
    | null
}

export { createMaterial }
