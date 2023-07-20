precision mediump float;

uniform vec2 uResolution;
uniform float uTime;
uniform vec3 uColor;
varying vec3 vPosition;

void main() {
    float opacity = (96.0 - length(vPosition)) / 256.0 * 0.6;
    vec3 color = vec3(0.6);
    gl_FragColor = vec4(color, opacity);
}
