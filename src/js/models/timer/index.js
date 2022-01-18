import { curry } from "../../util";
import blurTimerInput from "./blur_timer_input";
import isValidTimeInput from "./is_valid_time_input";
import setTimeFromInput from "./set_time_from_input";
import setTimerInputReadOnly from "./set_timer_input_read_only";
import raceCompleteEvent from "../../events/race_complete_event";

export default class Timer {
  // 'time' is in seconds
  constructor(timerEl, foley, time = 0) {
    this.timerEl = timerEl;
    this.timeElapsed = 0;
    this.time = time;
    this.timeEl = timerEl.querySelector("#time");
    this.startPauseEl = timerEl.querySelector('#start-pause-btn');
    this.resetEl = timerEl.querySelector('#reset-btn');
    this.inputEls = this.timeEl.children;
    this.state = { inputIsReadOnly: false };
    this.remainingTime = this.time;
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.printTime();
    this.tick = this.tick.bind(this);
    this.foley = foley;
  }

  start() {
    if (!this.state.inputIsReadOnly)
      setTimerInputReadOnly(this, true);
    this.startPauseEl.classList.remove('start');
    this.startPauseEl.classList.add('pause');
    this.startPauseEl.innerHTML = 'PAUSE'
    this.timeIntervalId = setInterval(this.tick, 1000);
  }

  pause() {
    this.startPauseEl.classList.add('start');
    this.startPauseEl.classList.remove('pause');
    this.startPauseEl.innerHTML = 'START'
    clearInterval(this.timeIntervalId);
  }

  reset() {
    if (!this.state.inputIsReadOnly)
      this.time = 0;
    this.timeElapsed = 0;
    this.pause();
    this.updateTime();
    this.printTime();
    setTimerInputReadOnly(this, false);
  }

  printTime() {
    const hoursEl = this.timeEl.children[0];
    const minutesEl = this.timeEl.children[1];
    const secondsEl = this.timeEl.children[2];
    hoursEl.value = this.hours < 10 ? '0' + this.hours : this.hours;
    minutesEl.value = this.minutes < 10 ? '0' + this.minutes : this.minutes;
    secondsEl.value = this.seconds < 10 ? '0' + this.seconds : this.seconds;
  }

  addTimeFromInput() {
    const inputEls = this.inputEls;
    const _setTimeFromInput = curry(setTimeFromInput, this, inputEls.length);
    for(let i = 0; i < inputEls.length; i++) {
      let input = inputEls[i].value;
      if (isValidTimeInput(input)) {
        let timeAmount = parseInt(input);
        _setTimeFromInput(timeAmount);
      }
    }
    blurTimerInput(this);
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

  tick() {
    if(this.remainingTime === 0) {
      this.resetEl.dispatchEvent(raceCompleteEvent);
      this.resetEl.click();
    } else {
      this.timeElapsed++;
      this.updateTime();
      this.printTime();
    }
  }

  updateTime() {
    this.remainingTime = this.time - this.timeElapsed;
    this.hours = Math.floor(this.remainingTime / (60 * 60));
    this.minutes = Math.floor((this.remainingTime % (3600)) / 60);
    this.seconds = this.remainingTime % 60;
  }
}