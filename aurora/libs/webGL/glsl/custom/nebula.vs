precision highp float;
precision highp int;

          // Default THREE.js uniforms available to both fragment and vertex shader
uniform mat4 modelMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat3 normalMatrix;

          // Default uniforms provided by ShaderFrog.
uniform vec3 cameraPosition;
uniform float time;

          // Default attributes provided by THREE.js. Attributes are only available in the
          // vertex shader. You can pass them to the fragment shader using varyings
attribute vec3 position;
attribute vec3 normal;
attribute vec2 uv;
attribute vec2 uv2;

          // Examples of variables passed from vertex to fragment shader
varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;
varying vec2 vUv2;

void main() {

              // To pass variables to the fragment shader, you assign them here in the
              // main function. Traditionally you name the varying with vAttributeName
    vNormal = normal;
    vUv = uv;
    vUv2 = uv2;
    vPosition = position;

              // This sets the position of the vertex in 3d space. The correct math is
              // provided below to take into account camera and object data.
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

}