export default function curry(fn, context, numArgs) {
  let args = [];
  return function _curry(arg) {
    args.push(arg);
    if (args.length >= numArgs)
      return fn.apply(context, args);
    else
      return _curry;
  }
}