// must be bound to the calling object
export default function addLivePropsFrom(obj) {
  for(let prop in obj)
    if (typeof obj[prop] !== 'function')
      this[prop] = () => obj[prop];
}