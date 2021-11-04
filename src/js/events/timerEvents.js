let timerEnd = new Event('timerEnd');
let enableTimeInput = new Event('enableTimeInput', {bubbles: true});
let disableTimeInput = new Event('disableTimeInput', {bubbles: true});

export {
  timerEnd,
  enableTimeInput,
  disableTimeInput
};