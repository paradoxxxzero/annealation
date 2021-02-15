attribute float mass;
uniform float scale;
uniform float blackHoleMassThreshold;
varying vec3 vColor;
varying float blackHole;

void main() {
  vColor = color;
  blackHole = mass >= blackHoleMassThreshold ? 1.0 : 0.0;

  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);

  gl_PointSize = scale * pow(mass, blackHole > 0.5 ? 0.1 : 0.333333) * (300.0 / length(mvPosition.xyz));

  gl_Position = projectionMatrix * mvPosition;
}
