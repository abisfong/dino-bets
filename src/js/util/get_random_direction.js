const dirs = [-1, 0, 1];

export default function getRandomDirection() {
  const randNum = Math.random(Math.random() * 3);
  return dirs[randNum];
}