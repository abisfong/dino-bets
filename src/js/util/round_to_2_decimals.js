export default function roundTo2Decimals(num) {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}