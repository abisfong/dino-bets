import attachTimerEventListeners from '../listeners/timerListeners';

export default class Timer {
  // 'time' is in seconds
  constructor(timerEl, time = 0) {
    this.timerEl = timerEl;
    this.timeElapsed = 0;
    this.time = time;
    this.timeEl = timerEl.querySelector("#time");
    this.startPauseEl = timerEl.querySelector('#start-pause-btn');
    this.resetEl = timerEl.querySelector('#reset-btn');
    this.inputEls = this.timeEl.children;
    this.printTime();
  }

  printTime() {
    const hoursEl = this.timeEl.children[0];
    const minutesEl = this.timeEl.children[1];
    const secondsEl = this.timeEl.children[2];
    this.updateTime();
    hoursEl.value = this.hours < 10 ? '0' + this.hours : this.hours;
    minutesEl.value = this.minutes < 10 ? '0' + this.minutes : this.minutes;
    secondsEl.value = this.seconds < 10 ? '0' + this.seconds : this.seconds;
  }

  tick() {
    if(this.remainingTime === 0) {
      this.reset();
    } else {
      this.timeElapsed++;
      this.printTime();
    }
  }

  updateTime() {
    addTimeFromInput(this);
    this.remainingTime = this.time - this.timeElapsed;
    this.hours = Math.floor(this.remainingTime / (60 * 60));
    this.minutes = Math.floor((this.remainingTime % (3600)) / 60);
    this.seconds = this.remainingTime % 60;
    this.reset();
    blurTimerInputFocus(this);
  }

  start() {
    this.startPauseEl.classList.remove('start');
    this.startPauseEl.classList.add('pause');
    this.startPauseEl.innerHTML = 'PAUSE'
    this.timeIntervalId = setInterval(this.tick.bind(this), 1000);
    setTimerInputReadOnly(this, true);
  }

  pause() {
    this.startPauseEl.classList.add('start');
    this.startPauseEl.classList.remove('pause');
    this.startPauseEl.innerHTML = 'START'
    clearInterval(this.timeIntervalId);
  }

  reset() {
    this.timeElapsed = 0;
    this.pause();
    this.printTime();
    setTimerInputReadOnly(this, false);
  }

  setTime(time) {
    this.time = time;
  }

  setHours(amount) {
    const currentHoursInSecs = this.hours * 60 *  60;
    const hoursToAdd = amount * 60 * 60;
    this.time -= currentHoursInSecs;
    this.time += hoursToAdd;
  }

  setMinutes(amount) {
    const currentMinutesInSecs = this.minutes * 60;
    const minutesToAdd = amount * 60;
    this.time -= currentMinutesInSecs;
    this.time += minutesToAdd;
  }

  setSeconds(amount) {
    const currentSeconds = this.seconds;
    this.time -= currentSeconds;
    this.time += amount;
  }
}

function addTimeFromInput(timer) {
  const inputEls = timer.inputEls;
  const setTimeFromInputCurry = curry(setTimeFromInput, timer, inputEls.length);
  
  for(let i = 0; i < inputEls.length; i++) {
    let input = inputEls[i].value;
    if (isValidTimeInput(input)) { 
      let timeAmount = parseInt(input);
      setTimeFromInputCurry(timeAmount);
    }
  }
}

function setTimeFromInput(timer) {
  const input = Array.from(arguments);
  const setTimeMethodNames = ['setHours', 'setMinutes', 'setSeconds'];
  for (let i = 0; i < 3; i++)
    this[setTimeMethodNames[i]](input[i]);
}

function isValidTimeInput(value) {
  return /^\d+$/.test(value) && value <= 99;
}

function blurTimerInputFocus(timer) {
  const activeEl = document.activeElement;
  const inputEls = timer.inputEls;
  if (inputEls.includes(activeEl))
    document.activeElement.blur();
}

function setTimerInputReadOnly(timer, value) {
  const inputEls = timer.inputEls;
  for (let i = 0; i < inputEls.length; i++)
    inputEls[i].readOnly = value;
}