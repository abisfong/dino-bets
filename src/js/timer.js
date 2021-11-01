export default class Timer {
  // 'time' is in seconds
  constructor(timerEl, time = 0) {
    this.timerEl = timerEl;
    this.timeElapsed = 0;
    this.time = time;
    this.timeEl = timerEl.querySelector(".time");
    this.startPauseEl = timerEl.querySelector('.timer-start-pause-btn');
    this.resetEl = timerEl.querySelector('.timer-reset-btn');
    this.printTime();
    attachEventListeners(this);
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
    if(this.remainingTime === 0) {
      this.reset();
      toggleStartPauseText(this.startPauseEl);
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
}

function attachEventListeners(timer) {
  addStartPauseEventListener(timer);
  addResetEventListener(timer);
}

function addStartPauseEventListener(timer) {
  let startPauseEl = timer.startPauseEl;
  startPauseEl.addEventListener('click', startPauseCallback(timer));
}

function startPauseCallback(timer) {
  return function (event) {
    event.preventDefault();
    toggleStartPause(timer, this);
    toggleStartPauseText(this);
  }
}

function toggleStartPause(timer, startPauseEl) {
  if (startPauseEl.innerHTML === 'Start')
    timer.start();
  else
    timer.pause();
}

function toggleStartPauseText(startPauseEl) {
  if (startPauseEl.innerHTML === 'Start')
    startPauseEl.innerHTML = 'Pause'
  else
    startPauseEl.innerHTML = 'Start'
}

function addResetEventListener(timer) {
  let resetEl = timer.resetEl;
  resetEl.addEventListener('click', function(event) {
    console.log('Time has been reset');
    timer.reset();
  });
}