import { curry } from './util';

export default class Timer {
  // 'time' is in seconds
  constructor(timerEl, time = 0) {
    this.timerEl = timerEl;
    this.timeElapsed = 0;
    this.time = time;
    this.timeEl = timerEl.querySelector("#time");
    this.startPauseEl = timerEl.querySelector('#start-pause-btn');
    this.resetEl = timerEl.querySelector('#reset-btn');
    this.printTime();
    attachEventListeners(this);
  }

  printTime() {
    let hoursEl = this.timeEl.children[0];
    let minutesEl = this.timeEl.children[1];
    let secondsEl = this.timeEl.children[2];
    this.updateTime();
    hoursEl.value = this.hours < 10 ? '0' + this.hours : this.hours;
    minutesEl.value = this.minutes < 10 ? '0' + this.minutes : this.minutes;
    secondsEl.value = this.seconds < 10 ? '0' + this.seconds : this.seconds;
  }

  tick() {
    if(this.remainingTime === 0) {
      this.reset();
      toggleTimerInputReadOnly(this);
      toggleStartPauseText(this.startPauseEl);
      toggleStartPauseClass(this.startPauseEl);
    } else {
      this.timeElapsed++;
      this.printTime();
    }
  }

  updateTime() {
    this.remainingTime = this.time - this.timeElapsed;
    this.hours = Math.floor(this.remainingTime / (60 * 60));
    this.minutes = Math.floor((this.remainingTime % (3600)) / 60);
    this.seconds = this.remainingTime % 60;
  }

  start() {
    this.intervalId = setInterval(this.tick.bind(this), 1000);
  }

  pause() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.pause();
    this.timeElapsed = 0;
    this.printTime();
  }

  setTime(time) {
    this.time = time;
  }

  setTimeFromInput() {
    let input = Array.from(arguments);
    let setTimeMethodNames = ['setHours', 'setMinutes', 'setSeconds'];

    for (let i = 0; i < 3; i++)
      this[setTimeMethodNames[i]](input[i]);
  }

  setHours(amount) {
    let currentHoursInSecs = this.hours * 60 *  60;
    let hoursToAdd = amount * 60 * 60;
    this.time -= currentHoursInSecs;
    this.time += hoursToAdd;
  }

  setMinutes(amount) {
    let currentMinutesInSecs = this.minutes * 60;
    let minutesToAdd = amount * 60;
    this.time -= currentMinutesInSecs;
    this.time += minutesToAdd;
  }

  setSeconds(amount) {
    let currentSeconds = this.seconds;
    this.time -= currentSeconds;
    this.time += amount;
  }
}

function attachEventListeners(timer) {
  addStartPauseEventListener(timer);
  addResetEventListener(timer);
  addTimeInputListener(timer);
}

function addStartPauseEventListener(timer) {
  let startPauseEl = timer.startPauseEl;
  startPauseEl.addEventListener('click', startPauseCallback(timer));
}

function startPauseCallback(timer) {
  return function (event) {
    event.preventDefault();
    toggleTimerInputReadOnly(timer);
    toggleStartPause(timer, this);
    toggleStartPauseClass(this);
    toggleStartPauseText(this);
  }
}

function toggleTimerInputReadOnly(timer) {
  let inputs = timer.timeEl.children;
  if (timer.time === timer.remainingTime || timer.time === 0)
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
    if (startPauseEl.innerHTML.toLowerCase() === 'pause') {
      toggleTimerInputReadOnly(timer);
      toggleStartPauseText(startPauseEl);
      toggleStartPauseClass(startPauseEl);
    }
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
    }
  }
}

function isValidTimeInput(value) {
  return /[0-9]+/.test(value);
}

function blurFocus() {
  document.activeElement.blur();
}