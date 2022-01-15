export default function setTimeFromInput() {
  const input = Array.from(arguments);
  const setTimeMethodNames = ['setHours', 'setMinutes', 'setSeconds'];
  for (let i = 0; i < 3; i++)
    this[setTimeMethodNames[i]](input[i]);
}