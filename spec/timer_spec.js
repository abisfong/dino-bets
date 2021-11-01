describe("Timer", function() {
  let timerEl = document.createElement('div');
  let timeEl = document.createElement('div');
  let timer;
  timerEl.classList.add('timer');
  timeEl.classList.add('time');
  timerEl.appendChild(timeEl);
  
  describe("#contructor", function() {
    it("should accept a timer HTML element and an optional time amount (in seconds)", function () {
      timer1 = new Timer(timerEl, 30);
      timer2 = new Timer(timerEl);
      expect(timer1.timerEl).toBe(timerEl);
      expect(timer1.time).toBe(30);
      expect(timer2.time).toBe(0);
    });

    it("should initialize timer object at 00:00:00 when no time is passed in", function () {
      timer = new Timer(timerEl);
      expect(timer.time).toBe(0);
      expect(timer.timeEl.innerText).toBe("00:00:00");
    });
    
    it("should initialize timer object at given time when time is passed in", function () {
      timer = new Timer(timerEl, 300);
      expect(timer.time).toBe(300);
      expect(timer.timeEl.innerText).toBe("00:05:00");
    });
  });

  describe("#printTime", function () {
    let hours = 7 * 60 * 60;
    let minutes = 16 * 60;
    let seconds = 38;
    it("should update the time HTML element content with the correct time", function () {
      timer = new Timer(timerEl, hours + minutes + seconds);
      expect(timer.hours).toBe(7);
      expect(timer.minutes).toBe(16);
      expect(timer.seconds).toBe(38);
      expect(timer.timeEl.innerHTML).toBe("07:16:38");
    });
  });

  
  describe("#updateTime", function () {
    let hours = 5 * 60 * 60;
    let minutes = 12 * 60;
    let seconds = 17;
    it("should update the time instance variables, hours, minutes, and seconds", function () {
      timer = new Timer(timerEl, hours + minutes + seconds);
      expect(timer.hours).toBe(5);
      expect(timer.minutes).toBe(12);
      expect(timer.seconds).toBe(17);
    });
  });

  describe("#tick", function () {
    it("should decrement the timer by 1", function () {
      timer = new Timer(timerEl, 45);
      timer.tick();
      expect(timer.seconds).toBe(44);
    });
  });

  describe("#setTime", function () {
    it("should set the time (in seconds)", function () {
      timer = new Timer(timerEl, 60);
      timer.setTime(75);
      expect(timer.time).toBe(75);
    });
  });
});