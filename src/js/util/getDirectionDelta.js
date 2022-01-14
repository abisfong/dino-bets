export default function getDirectionDelta(direction) {
  let delta;
  switch (direction) {
    case 'left':
      delta = [-1, 0];
      break;
    case 'right':
      delta = [1, 0];
      break;
    case 'up':
      delta = [0, -1];
      break;
    case 'down':
      delta = [0, 1];
      break;
  }
  return delta;
}