export default function factorial(num) {
  let product = 1;
  for(let i = 2; i <= num; i++) {
    product *= i;
  }
  return product;
}