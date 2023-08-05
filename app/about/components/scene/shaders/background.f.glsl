uniform float u_time;
uniform bool u_dark;
uniform vec2 u_mouse;
uniform vec3 u_color1;
uniform vec3 u_color2;
uniform vec3 u_color3;
varying vec2 v_uv;

// #pragma glslify: cpNoise21 = require('./libs/cpNoise21.glsl')

float random(vec2 p) {
    vec2 k1 = vec2(23.14069263277926, // e^pi (Gelfond's constant)
    2.665144142690225 // 2^sqrt(2) (Gelfond–Schneider constant)
    );
    return fract(cos(dot(p, k1)) * 12345.6789);
}

const vec3 colorBaseDark = vec3(0.0);
const vec3 colorBaseLight = vec3(1.0);
// const vec3 color1 = vec3(0.89, 0.34, 0.11);
// const vec3 color2 = vec3(0.56, 0.64, 0.64);
// const vec3 color3 = vec3(0.16, 0.26, 0.47);

void main() {
    vec3 colorBase;
    if(u_dark) {
        colorBase = colorBaseDark;
    } else {
        colorBase = colorBaseLight;
    }

    vec2 seed = v_uv * 1.5 * (u_mouse + 0.3 * (length(u_mouse) + 0.5));
    float n = cpNoise21(seed) + length(u_mouse) * 0.9;

    float ml = pow(length(u_mouse), 2.5) * 0.15;
    float n1 = smoothstep(0.0, 0.0 + 0.2, n);

    vec3 color = mix(colorBase, u_color1, n1);

    float n2 = smoothstep(0.1 + ml, 0.1 + ml + 0.2, n);
    color = mix(color, u_color2, n2);

    float n3 = smoothstep(0.2 + ml, 0.2 + ml + 0.2, n);
    color = mix(color, u_color3, n3);

    float n4 = smoothstep(0.3 + ml, 0.3 + ml + 0.2, n);

    color = mix(color, colorBase, n4);

    vec2 uvrandom = v_uv;
    uvrandom.y *= random(vec2(uvrandom.y, 0.4));
    color.rgb += random(uvrandom) * 0.05;

    gl_FragColor = vec4(color, 1.0);
}