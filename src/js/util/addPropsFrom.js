// must be bound to the calling object
export default function addPropsFrom(obj) {
  for(let prop in obj)
    if (typeof obj[prop] !== 'function')
      this[prop] = () => obj[prop];
}