varying vec3 vColor;
varying float blackHole;

const float maxR = 0.5;
const float eventHorizon = 0.666;
// const float horizonFade = 0.8;

void main() {
  float r = length(gl_PointCoord - vec2(0.5, 0.5));
  if (r > maxR) discard;

  if (blackHole > 0.5) {
    float p = r / maxR;
    float luminance = 0.;
    if(p > eventHorizon) {
      luminance = 1.0;
      // if(p > horizonFade) {
      //   luminance = (p - 1.) - .7 * (p - horizonFade) / (1. -horizonFade - 1.);
      // }
    }
    gl_FragColor = vec4(luminance, luminance, luminance, 0.1);
  } else {
    gl_FragColor = vec4(vColor, 1.0 );
  }
}