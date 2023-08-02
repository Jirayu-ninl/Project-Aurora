precision mediump float;

uniform float u_alpha;
uniform sampler2D u_texture;

varying vec2 v_uv;
varying float v_wave;

void main() {
    float wave = v_wave * 0.2;
    vec3 texture = texture2D(u_texture, v_uv + wave).rgb;
    gl_FragColor = vec4(texture, u_alpha);
    // gl_FragColor = vec4(1., 1., 0., 1.0);
}