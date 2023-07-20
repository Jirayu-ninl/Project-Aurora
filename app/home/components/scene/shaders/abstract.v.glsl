precision mediump float;
varying vec2 vUv;
varying vec3 vPosition;
uniform float uTime;

// #pragma glslify: snoise = require(glsl-noise/simplex/3d)

void main() {
    vUv = uv;
    vPosition = position;

    vec3 pos = position;
    float noiseFreq = 2.5;
    float noiseAmp = 0.25;
    vec3 noisePos = vec3(pos.x * noiseFreq + uTime, pos.y, pos.z);
    // pos.z += snoise(noisePos) * noiseAmp;
            // pos.y += sin(uTime);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}