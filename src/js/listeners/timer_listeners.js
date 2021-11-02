import { curry } from '../util';

export default function attachTimerEventListeners(timer) {
  addStartPauseEventListener(timer);
  addResetEventListener(timer);
  addTimeInputListener(timer);
  addTimeListener(timer);
}

function addStartPauseEventListener(timer) {
  let startPauseEl = timer.startPauseEl;
  startPauseEl.addEventListener('click', startPauseCallback(timer));
}

function startPauseCallback(timer) {
  let startPauseEl = timer.startPauseEl;
  return function (event) {
    if (event)
      event.preventDefault();
    toggleTimerInputReadOnly(timer);
    toggleStartPause(timer, startPauseEl);
    toggleStartPauseClass(startPauseEl);
    toggleStartPauseText(startPauseEl);
  }
}

function toggleTimerInputReadOnly(timer) {
  let inputs = timer.timeEl.children;
  let time = timer.time;
  let remainingTime = timer.remainingTime;
  if (time === remainingTime || time === 0)
    for (let i = 0; i < inputs.length; i++) {
      let isReadOnly = inputs[i].readOnly;
      isReadOnly ? inputs[i].readOnly = false : inputs[i].readOnly = true;
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
  resetEl.addEventListener('click', resetCallback(timer));
}

function resetCallback(timer) {
  let startPauseEl = timer.startPauseEl;
  return function () {
    timer.reset();
    if (startPauseEl.innerHTML.toLowerCase() === 'pause')
      startPauseCallback(timer)();
  }
}

function addTimeInputListener(timer) {
  let timeEl = timer.timeEl;
  timeEl.addEventListener('keydown', timeInputCallback(timer));
}

function timeInputCallback(timer) {
  return function (event) {
    if (event.key === 'Enter') {
      addTimeFromInput(timer);
      blurFocus();
      resetCallback(timer)();
    }
  }
}

function addTimeFromInput(timer) {
  let inputs = timer.timeEl.children;
  let setTimeFromInput = curry(timer.setTimeFromInput, timer, inputs.length);

  for(let i = 0; i < inputs.length; i++) {
    let input = inputs[i].value;
    if (isValidTimeInput(input)) { 
      let timeAmount = parseInt(input);
      setTimeFromInput(timeAmount);
    } else {
      resetCallback(timer)();
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

function addTimeListener(timer) {
  let timerEl = timer.timerEl;
  timerEl.addEventListener('timerEnd', function() {
    startPauseCallback(timer)();
  });
}