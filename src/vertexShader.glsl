attribute float mass;
attribute float temperature;

uniform float mode;
uniform float scale;
uniform float blackHoleMassThreshold;
varying float blackHole;
varying vec3 tColor;

void main() {
  float size;
  if (mass >= blackHoleMassThreshold) {
    size = 1. + pow(mass, 0.1);
    tColor = vec3(0.);
  } else {
    size = 1. + pow(mass, 0.33333);
    // 
    if(mode == 1.0) { // Rainbow
      float k = mod(temperature / 30., 12.); 
      tColor.r = 0.5 * (1. - max(min(k - 3., 9. - k), -1.));
      k = mod(8. + temperature / 30., 12.); 
      tColor.g = 0.5 * (1. - max(min(k - 3., 9. - k), -1.));
      k = mod(4. + temperature / 30., 12.);
      tColor.b = 0.5 * (1. - max(min(k - 3., 9. - k), -1.));
    } else if (mode == 0.) { // White
      tColor = vec3(1.);
    } else if (mode == 0.75) { // ColorCoded
      float l = 256.;
      tColor.b = floor(temperature / (l * l)) / l;
      tColor.g = floor(temperature / l - tColor.b * l * l) / l;
      tColor.r = temperature / l - tColor.b * l * l  - tColor.g * l;
    } else { // Temperature
      if (temperature < 6600.) {
        tColor.r = 1.0;
        tColor.g = 0.7 * log(temperature + 950.) - 5.3;
        if(temperature < 2000.) {
          tColor.b = 0.;
        } else {
          tColor.b = 0.0000000103591 * temperature * temperature + 0.000131732 * temperature - 0.315826;
        }
      } else {
        tColor.r = 0.3509 + 28274239.0 / (temperature * temperature);
        tColor.g = 0.49 + 20734442.0 / (temperature * temperature);
        tColor.b = 1.0;
      }
      if (mode == 0.25) {// Grayscale
        tColor.r = tColor.g = tColor.b = (tColor.r + tColor.g + tColor.b) / 3.;
      } 
    }
  }

  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);

  gl_PointSize = scale * size * (300. / length(mvPosition.xyz));

  gl_Position = projectionMatrix * mvPosition;
}
