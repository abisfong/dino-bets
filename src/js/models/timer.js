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
    attachTimerEventListeners(this);
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
  }

  start() {
    this.startPauseEl.classList.remove('start');
    this.startPauseEl.classList.add('pause');
    this.startPauseEl.innerHTML = 'PAUSE'
    this.timeIntervalId = setInterval(this.tick.bind(this), 1000);
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
  }

  setTime(time) {
    this.time = time;
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

function addTimeFromInput(timer) {
  const inputEls = timer.inputEls;
  const setTimeFromInputCurry = curry(setTimeFromInput, timer, inputEls.length);

  for(let i = 0; i < inputEls.length; i++) {
    let input = inputEls[i].value;
    if (isValidTimeInput(input)) { 
      let timeAmount = parseInt(input);
      setTimeFromInputCurry(timeAmount);
    } else {
      timer.reset();
      return;
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

function blurFocus() {
  document.activeElement.blur();
}