uniform float u_time;
uniform bool u_dark;
uniform float u_location;
uniform vec3 u_baseColor;
varying vec2 v_uv;
varying vec3 v_position;

const vec3 colorBase = vec3(1.0);
const float baseAlpha = 0.2;

void main() {
    float overlayPosition = (u_location * 11.) - 5.;
    float edgePosition = (u_location * 11.) - 3.;
    float alpha = mix(baseAlpha, 1.0, smoothstep(0.0, 1., -v_position.x + overlayPosition));
    float fadeEdge = mix(0.4, 1.0, smoothstep(0.0, 1., -v_position.x + edgePosition));
    // gl_FragColor = vec4(u_baseColor, alpha);
    // csm_DiffuseColor = vec4(u_baseColor, alpha);
    csm_DiffuseColor = vec4(u_baseColor, alpha);
    csm_Emissive = u_dark ? vec3(fadeEdge * 0.65) : vec3(0.);
}