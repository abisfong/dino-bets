export default function isValidTimeInput(value) {
  return /^\d+$/.test(value) && value <= 99;
}