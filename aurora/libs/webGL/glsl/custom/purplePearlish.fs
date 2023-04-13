precision highp float;
precision highp int;
uniform vec3 Fresnel_Glow1657095673155_65_color;
uniform float rimWidth;
uniform float fadeDistance;
uniform vec3 Big_Wiggles1657095673161_68_color;
uniform mat4 modelViewMatrix;
uniform mat4 viewMatrix;
uniform float shininess;
uniform vec3 specular;
uniform vec3 pointLightColor;
uniform vec3 pointLightPosition;
uniform float pointLightDistance;
uniform float pointLightDecay;
uniform vec3 wrapRGB;
varying vec3 fPosition;
varying vec3 fNormal;
varying float vNoise;
varying vec3 vNormal;
varying vec3 vViewPosition;
float saturate(in float a) {
  return clamp(a, 0.0, 1.0);
}
float calcLightAttenuation(float lightDistance, float cutoffDistance, float decayExponent) {
  if(decayExponent > 0.0) {
    return pow(saturate(1.0 - lightDistance / cutoffDistance), decayExponent);
  }
  return 1.0;
}
float specularStrength = 1.0;
vec4 Fresnel_Glow1657095673155_65_main(void) {
  vec4 Fresnel_Glow1657095673155_65_gl_FragColor = vec4(0.0);
  vec3 viewDirectionW = normalize(-fNormal);
  vec3 eye = normalize(-fPosition.xyz);
  float fresnelTerm = dot(eye, fNormal);
  fresnelTerm = rimWidth * clamp(fadeDistance - fresnelTerm, 0.0, 1.);
  Fresnel_Glow1657095673155_65_gl_FragColor = vec4(Fresnel_Glow1657095673155_65_color * fresnelTerm, 1.);
  return Fresnel_Glow1657095673155_65_gl_FragColor *= 1.0;
}
vec4 Big_Wiggles1657095673161_68_main() {
  vec4 Big_Wiggles1657095673161_68_gl_FragColor = vec4(0.0);
  Big_Wiggles1657095673161_68_gl_FragColor = vec4(Big_Wiggles1657095673161_68_color * vNoise, 1.0);
  return Big_Wiggles1657095673161_68_gl_FragColor *= 0.7;
}
vec4 Three_js_Point_Light1657095673194_71_main() {
  vec4 Three_js_Point_Light1657095673194_71_gl_FragColor = vec4(0.0);
  vec3 totalDiffuseLight = vec3(0.0);
  vec3 totalSpecularLight = vec3(0.0);
  vec3 normal = normalize(vec3(modelViewMatrix * vec4(vNormal, 0.0)));
  vec4 lPosition = viewMatrix * vec4(pointLightPosition, 1.0);
  vec3 lVector = lPosition.xyz + vViewPosition.xyz;
  float attenuation = calcLightAttenuation(length(lVector), pointLightDistance, pointLightDecay);
  lVector = normalize(lVector);
  float dotProduct = dot(normal, lVector);
  float dirDiffuseWeightFull = max(dotProduct, 0.0);
  float dirDiffuseWeightHalf = max(0.5 * dotProduct + 0.5, 0.0);
  vec3 dirDiffuseWeight = mix(vec3(dirDiffuseWeightFull), vec3(dirDiffuseWeightHalf), wrapRGB);
  float pointDiffuseWeightFull = max(dotProduct, 0.0);
  float pointDiffuseWeightHalf = max(0.5 * dotProduct + 0.5, 0.0);
  vec3 pointDiffuseWeight = mix(vec3(pointDiffuseWeightFull), vec3(pointDiffuseWeightHalf), wrapRGB);
  totalDiffuseLight += pointLightColor * pointDiffuseWeight * attenuation;
  vec3 pointHalfVector = normalize(lVector + vViewPosition);
  float pointDotNormalHalf = max(dot(normal, pointHalfVector), 0.0);
  float pointSpecularWeight = specularStrength * max(pow(pointDotNormalHalf, shininess), 0.0);
  float specularNormalization = (shininess + 2.0) / 8.0;
  vec3 schlick = specular + vec3(1.0 - specular) * pow(max(1.0 - dot(lVector, pointHalfVector), 0.0), 5.0);
  totalSpecularLight += schlick * pointLightColor * pointSpecularWeight * pointDiffuseWeight * attenuation * specularNormalization;
  Three_js_Point_Light1657095673194_71_gl_FragColor = vec4(totalSpecularLight + totalDiffuseLight, 1.0);
  return Three_js_Point_Light1657095673194_71_gl_FragColor *= 1.0;
}
void main() {
  gl_FragColor = (Fresnel_Glow1657095673155_65_main() + Big_Wiggles1657095673161_68_main() + Three_js_Point_Light1657095673194_71_main());
}