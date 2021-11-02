import { curry } from '../util';
import { 
  startPauseTimer,
  resetTimer,
  enableTimeInput, 
  disableTimeInput, 
} from '../events/timer_events';

export default function attachTimerEventListeners(timer) {
  addStartPauseEventListeners(timer);
  addResetEventListener(timer);
  addTimeInputListeners(timer);
  addTimeListener(timer);
}

function addStartPauseEventListeners(timer) {
  let timerEl = timer.timerEl;
  let startPauseEl = timer.startPauseEl;

  timerEl.addEventListener('startPauseTimer', startPauseCallback(timer));
  startPauseEl.addEventListener('click', event => { 
    startPauseEl.dispatchEvent(startPauseTimer) 
  });
}

function startPauseCallback(timer) {
  let timerEl = timer.timerEl;
  let startPauseEl = timer.startPauseEl;
  return function (event) {
    event.preventDefault();
    timerEl.dispatchEvent(disableTimeInput);
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
  let timerEl = timer.timerEl;
  let resetEl = timer.resetEl;
  timerEl.addEventListener('resetTimer', resetCallback(timer));
  resetEl.addEventListener('click', event => {
    resetEl.dispatchEvent(resetTimer);
  });
}

function resetCallback(timer) {
  let startPauseEl = timer.startPauseEl;
  let resetEl = timer.resetEl;
  return function () {
    timer.reset();
    if (startPauseEl.innerHTML.toLowerCase() === 'pause')
      resetEl.dispatchEvent(startPauseTimer);
    resetEl.dispatchEvent(enableTimeInput);
  }
}

function addTimeInputListeners(timer) {
  addTimeEditListener(timer);
  // addTimeEditTypingListeners(timer);
  addTimeEditToggleListeners(timer);
}

function addTimeEditListener(timer) {
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
  let inputEls = timer.timeEl.children;
  let setTimeFromInput = curry(timer.setTimeFromInput, timer, inputEls.length);

  for(let i = 0; i < inputEls.length; i++) {
    let input = inputEls[i].value;
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

// function addTimeEditTypingListeners(timer) {
//   let timerEl = timer.timerEl;
//   let inputEls = Array.from(timer.inputEls);
//   inputEls.forEach((inputEl) => {
//     inputEl.addEventListener('focus', moveCursorToFrontOfInputLine)
//   })
//   timerEl.addEventListener('keydown', timeEditTypingCallback(timer))
// }

// function timeEditTypingCallback(timer) {
//   let timeEl = timer.timeEl
//   let inputEls = Array.from(timeEl.children);
//   return function(event) {
//     event.preventDefault();
//     if (inputEls.includes(event.target)) {
//       let inputEl = event.target;
//     }
//   }
// }

// function moveCursorToFrontOfInputLine(event) {
//   event.preventDefault();
//   let inputEl = event.target;
//   let value = inputEl.value;
//   inputEl.value = null;
//   inputEl.value = value;
//   console.log('focused', inputEl); 
// }

function addTimeEditToggleListeners(timer) {
  let timerEl = timer.timerEl;
  timerEl.addEventListener('enableTimeInput', function () {
    setTimerInputReadOnly(timer, false);
  });
  timerEl.addEventListener('disableTimeInput', function () {
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

function addTimeListener(timer) {
  let timerEl = timer.timerEl;
  timerEl.addEventListener('timerEnd', function() {
    timerEl.dispatchEvent(resetTimer);
  });
}