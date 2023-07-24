uniform bool u_dark;
varying vec3 v_position;

const float colorDark = 0.06275;
const float colorWhite = 1.0;

void main() {
    float color;
    if(u_dark) {
        color = colorDark;
    } else {
        color = colorWhite;
    }

    float normalizedY = v_position.y + 0.1;
    float alpha = smoothstep(1.5, -1.2, normalizedY);
    gl_FragColor = vec4(vec3(color), alpha);
}