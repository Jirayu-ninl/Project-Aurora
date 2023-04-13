import { Matrix4, MeshStandardMaterial, Texture } from 'three'

export class MeshReflectorMaterial extends MeshStandardMaterial {
  _tDepth = { value: null }
  _tDiffuse = { value: null }
  _tDiffuseBlur = { value: null }
  _textureMatrix = { value: null }
  _hasBlur = { value: false }
  _mirror = { value: 0.0 }
  _mixBlur = { value: 0.0 }
  _blurStrength = { value: 0.5 }
  _minDepthThreshold = { value: 0.9 }
  _maxDepthThreshold = { value: 1 }
  _depthScale = { value: 0 }

  constructor(parameters = {}) {
    super(parameters)
    this.setValues(parameters)
  }
  onBeforeCompile(shader) {
    shader.uniforms.hasBlur = this._hasBlur
    shader.uniforms.tDiffuse = this._tDiffuse
    shader.uniforms.tDepth = this._tDepth
    shader.uniforms.tDiffuseBlur = this._tDiffuseBlur
    shader.uniforms.textureMatrix = this._textureMatrix
    shader.uniforms.mirror = this._mirror
    shader.uniforms.mixBlur = this._mixBlur
    shader.uniforms.mixStrength = this._blurStrength
    shader.uniforms.minDepthThreshold = this._minDepthThreshold
    shader.uniforms.maxDepthThreshold = this._maxDepthThreshold
    shader.uniforms.depthScale = this._depthScale
    shader.vertexShader = `
        uniform mat4 textureMatrix;
        varying vec4 my_vUv;     
      ${shader.vertexShader}`
    shader.vertexShader = shader.vertexShader.replace(
      '#include <project_vertex>',
      `#include <project_vertex>
        my_vUv = textureMatrix * vec4( position, 1.0 );
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );`,
    )
    shader.fragmentShader = `
        uniform sampler2D tDiffuse;
        uniform sampler2D tDiffuseBlur;
        uniform sampler2D tDepth;
        uniform float cameraNear;
			  uniform float cameraFar;
        uniform bool hasBlur;
        uniform float mixBlur;
        uniform float mirror;
        uniform float mixStrength;
        uniform float minDepthThreshold;
        uniform float maxDepthThreshold;
        uniform float depthScale;
        varying vec4 my_vUv;        
        ${shader.fragmentShader}`
    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <emissivemap_fragment>',
      `#include <emissivemap_fragment>
      
      vec4 depth = texture2DProj(tDepth, my_vUv );
      vec4 base = texture2DProj(tDiffuse, my_vUv);
      vec4 blur = texture2DProj(tDiffuseBlur, my_vUv);

      float depthFactor = smoothstep(minDepthThreshold, maxDepthThreshold, 1.0-(depth.r * depth.a));
      depthFactor *= depthScale;
      depthFactor = min(1.0, depthFactor);

      float reflectorRoughnessFactor = roughness;
      #ifdef USE_ROUGHNESSMAP
        vec4 reflectorTexelRoughness = texture2D( roughnessMap, vUv );
        reflectorRoughnessFactor *= reflectorTexelRoughness.g;
      #endif

      vec4 merge = base;
      if (hasBlur) {
        float blurFactor = min(1.0, mixBlur * reflectorRoughnessFactor);
        merge = mix(merge, blur, blurFactor);
      }
      merge += mix(merge, base, depthFactor);
      diffuseColor.rgb = diffuseColor.rgb * ((1.0 - min(1.0, mirror)) + merge.rgb * mixStrength);           
      diffuseColor = sRGBToLinear(diffuseColor);`,
    )
  }
  get tDiffuse() {
    return this._tDiffuse.value
  }
  set tDiffuse(v) {
    this._tDiffuse.value = v
  }
  get tDepth() {
    return this._tDepth.value
  }
  set tDepth(v) {
    this._tDepth.value = v
  }
  get tDiffuseBlur() {
    return this._tDiffuseBlur.value
  }
  set tDiffuseBlur(v) {
    this._tDiffuseBlur.value = v
  }
  get textureMatrix() {
    return this._textureMatrix.value
  }
  set textureMatrix(v) {
    this._textureMatrix.value = v
  }
  get hasBlur() {
    return this._hasBlur.value
  }
  set hasBlur(v) {
    this._hasBlur.value = v
  }
  get mirror() {
    return this._mirror.value
  }
  set mirror(v) {
    this._mirror.value = v
  }
  get mixBlur() {
    return this._mixBlur.value
  }
  set mixBlur(v) {
    this._mixBlur.value = v
  }
  get mixStrength() {
    return this._blurStrength.value
  }
  set mixStrength(v) {
    this._blurStrength.value = v
  }
  get minDepthThreshold() {
    return this._minDepthThreshold.value
  }
  set minDepthThreshold(v) {
    this._minDepthThreshold.value = v
  }
  get maxDepthThreshold() {
    return this._maxDepthThreshold.value
  }
  set maxDepthThreshold(v) {
    this._maxDepthThreshold.value = v
  }
  get depthScale() {
    return this._depthScale.value
  }
  set depthScale(v) {
    this._depthScale.value = v
  }
}
