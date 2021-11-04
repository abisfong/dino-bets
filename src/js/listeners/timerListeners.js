import { curry } from '../util';
import { 
  enableTimeInput, 
  disableTimeInput, 
} from '../events/timerEvents';

export default function attachTimerEventListeners(timer) {
  addStartPauseEventListeners(timer);
  addResetEventListener(timer);
  addTimeInputListeners(timer);
}

function addStartPauseEventListeners(timer) {
  let startPauseEl = timer.startPauseEl;

  startPauseEl.addEventListener('click', createStartPauseCallback(timer));
}

function createStartPauseCallback(timer) {
  let timeEl = timer.timeEl;
  let startPauseEl = timer.startPauseEl;
  return function (event) {
    event.preventDefault();
    timeEl.dispatchEvent(disableTimeInput);
    toggleStartPause(timer, startPauseEl);
    toggleStartPauseClass(startPauseEl);
    toggleStartPauseText(startPauseEl);
  }
}

function toggleStartPause(timer, startPauseEl) {
  if (startPauseEl.innerHTML.toLowerCase() === 'start')
    timer.start();
  else
    timer.pause();
}

function toggleStartPauseClass(startPauseEl) {
  startPauseEl.classList.toggle('start');
  startPauseEl.classList.toggle('pause');
}

function toggleStartPauseText(startPauseEl) {
  if (startPauseEl.innerHTML.toLowerCase() === 'start')
    startPauseEl.innerHTML = 'PAUSE'
  else
    startPauseEl.innerHTML = 'START'
}

function addResetEventListener(timer) {
  let resetEl = timer.resetEl;
  resetEl.addEventListener('click', createResetCallback(timer));
}

function createResetCallback(timer) {
  let startPauseEl = timer.startPauseEl;
  let timeEl = timer.timeEl;
  return function () {
    timer.reset();
    if (startPauseEl.innerHTML.toLowerCase() === 'pause')
      startPauseEl.click();
    timeEl.dispatchEvent(enableTimeInput);
  }
}

function addTimeInputListeners(timer) {
  addTimeEditListener(timer);
  addTimeEditToggleListeners(timer);
}

function addTimeEditListener(timer) {
  let timeEl = timer.timeEl;
  timeEl.addEventListener('keydown', createTimeInputCallback(timer));
}

function createTimeInputCallback(timer) {
  let resetEl = timer.resetEl;
  return function (event) {
    if (event.key === 'Enter') {
      addTimeFromInput(timer);
      blurFocus();
      resetEl.click();
    }
  }
}

function addTimeFromInput(timer) {
  let resetEl = timer.resetEl;
  let inputEls = timer.timeEl.children;
  let setTimeFromInput = curry(timer.setTimeFromInput, timer, inputEls.length);

  for(let i = 0; i < inputEls.length; i++) {
    let input = inputEls[i].value;
    if (isValidTimeInput(input)) { 
      let timeAmount = parseInt(input);
      setTimeFromInput(timeAmount);
    } else {
      resetEl.click();
      return;
    }
  }
}

function isValidTimeInput(value) {
  return /^\d+$/.test(value) && value <= 99;
}

function blurFocus() {
  document.activeElement.blur();
}

function addTimeEditToggleListeners(timer) {
  let timeEl = timer.timeEl;
  timeEl.addEventListener('enableTimeInput', function () {
    setTimerInputReadOnly(timer, false);
  });
  timeEl.addEventListener('disableTimeInput', function () {
    setTimerInputReadOnly(timer, true);
  });
}

function setTimerInputReadOnly(timer, value) {
  let inputEls = timer.timeEl.children;
  let time = timer.time;
  let remainingTime = timer.remainingTime;
  if (time === remainingTime || time === 0)
    for (let i = 0; i < inputEls.length; i++)
      inputEls[i].readOnly = value;
}