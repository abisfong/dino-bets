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
    toggleStartPauseClass(this);
    toggleStartPauseText(this);
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
  let startPauseEl = timer.startPauseEl;
  resetEl.addEventListener('click', function(event) {
    timer.reset();
    if (startPauseEl.innerHTML.toLowerCase() === 'pause') {
      toggleStartPauseClass(startPauseEl);
      toggleStartPauseText(startPauseEl);
    }
  });
}