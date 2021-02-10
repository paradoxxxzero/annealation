attribute float scale;
varying vec3 vColor;

void main() {
  vColor = color;
  
  vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );

  gl_PointSize = scale * ( 300.0 / length( mvPosition.xyz ));

  gl_Position = projectionMatrix * mvPosition;
}
