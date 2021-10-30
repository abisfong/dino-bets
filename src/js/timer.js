class Timer {
  // 'time' is in seconds
  constructor(timerEl, time = 0) {
    this.timerEl = timerEl;
    this.timeElapsed = 0;
    this.time = time;
    this.timeEl = timerEl.querySelector(".time");
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
    this.timeEl.innerHTML = timeString;
  }

  tick() {
    this.timeElapsed++;
    this.printTime();
    if(this.remainingTime === 0)
      this.pause();
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

  setTime(time) {
    this.time = time;
  }
}

if (window === undefined)
  module.exports = Timer;