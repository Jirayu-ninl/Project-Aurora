uniform bool uDark;
varying float vVisibility;
varying vec3 vViewNormal;

const vec3 colorBaseDark = vec3(0.0);
const vec3 colorBaseLight = vec3(1.0);

void main() {
    vec3 colorBase;
    if(!uDark) {
        colorBase = colorBaseDark;
    } else {
        colorBase = colorBaseLight;
    }

    vec2 uv = vec2(gl_PointCoord.x, 1. - gl_PointCoord.y);
    vec2 cUV = 2. * uv - 1.;
    float a = .15 / length(cUV);
    float alpha = 1.;
    if(a < 0.15)
        alpha = 0.;

    // csm_DiffuseColor = vec4(vViewNormal, (vVisibility + 0.01) * alpha);
    csm_DiffuseColor = vec4(colorBase, alpha);
    

}