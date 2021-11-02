let timerEnd = new Event('timerEnd', {bubbles: true});
let startPauseTimer = new Event('startPauseTimer', {bubbles: true});
let resetTimer = new Event('resetTimer', {bubbles: true});
let enableTimeInput = new Event('enableTimeInput', {bubbles: true});
let disableTimeInput = new Event('disableTimeInput', {bubbles: true});

export {
  timerEnd,
  startPauseTimer,
  resetTimer,
  enableTimeInput,
  disableTimeInput
};