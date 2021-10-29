import { htmlGenerator } from "./warmup";

export class Timer {
  constructor(container) {
    this.container = container;
    this.timeElapsed = 0;
    this.el = this.container.getElementsByClassName('time')[0];
    this.printTime();
  }

  printTime() {
    // Format the time in HH:MM:SS
    let timeString = '';
    this.updateTime();
    timeString += this.hours < 10 ? '0' + this.hours : this.hours;
    timeString  += ':';
    timeString += this.minutes < 10 ? '0' + this.minutes : this.minutes;
    timeString += ':';
    timeString += this.seconds < 10 ? '0' + this.seconds : this.seconds;
    this.el.innerHTML = timeString;
  }

  tick() {
    this.timeElapsed++;
    this.printTime();
  }

  updateTime() {
    this.currentTime = this.time - this.timeElapsed;
    this.hours = Math.floor(this.currentTime / (60 * 60));
    this.minutes = (this.currentTime % (3600)) / 60;
    this.seconds = this.currentTime % 60;
  }

  pause() {
    clearInterval(this.intervalId);
  }

  start() {
    this.intervalId = setInterval(this.tick.bind(this), 1000);
  }

  setTime(time) {
    this.time = time;
  }
}