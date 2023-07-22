vec3 rgb2hsb( in vec3 c )  
      ve 4 K = vec4(0. , -1 0 / 3. , 2 0 / 3. , -1.0
      ve 4 p = mix(vec4(c.b , K.wz ,   
                   vec4(c.gb  K.xy ,   

      vec      mi ( ec4(p.xy , c.r
                   vec
                   step p x, c r );            
    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)),
                d / (q.x + e),
                q.x);
}

#pragma glslify: export(rgb2hsb)