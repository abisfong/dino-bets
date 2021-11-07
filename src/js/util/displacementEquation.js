// displacement = initialSpeed*time^2 + 1/2*acceleration*time^2
export default function displacementEquation(initialSpeed, acceleration, time) {
  return initialSpeed * time + .5 * acceleration * Math.pow(time, 2);
}