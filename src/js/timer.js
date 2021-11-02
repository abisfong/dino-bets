import attachTimerEventListeners from './listeners/timer_listeners';
import * as timerEvents from './events/timer_events'

export default class Timer {
  // 'time' is in seconds
  constructor(timerEl, time = 0) {
    this.timerEl = timerEl;
    this.timeElapsed = 0;
    this.time = time;
    this.timeEl = timerEl.querySelector("#time");
    this.startPauseEl = timerEl.querySelector('#start-pause-btn');
    this.resetEl = timerEl.querySelector('#reset-btn');
    this.inputEls = timeEl.children;
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
      this.timerEl.dispatchEvent(timerEvents.timerEnd);
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