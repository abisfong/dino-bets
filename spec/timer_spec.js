describe("Timer", function() {
  let timerEl = document.createElement('div');
  let timeEl = document.createElement('div');
  let timer;
  timerEl.classList.add('timer');
  timeEl.classList.add('time');
  timerEl.appendChild(timeEl);
  
  describe("#contructor", function() {
    it("should initialize timer object at 00:00:00 when no time is passed in", function () {
      timer = new Timer(timerEl);
      expect(timer.time).toBe(0);
      expect(timer.timeEl.innerText).toBe("00:00:00");
    });
    
    it("should initialize timer object at given time when time is passed in", function () {
      timer = new Timer(timerEl, 300);
      expect(timer.time).toBe(300);
      expect(timer.timeEl.innerText).toBe("00:05:00");
      console.log(timer.timerEl);
    });
  });
});