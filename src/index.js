import Timer from "./js/timer";

document.addEventListener("DOMContentLoaded", function () {
  const timer = new Timer(document.querySelector('.timer'));
  const hours = 0;
  const minutes = 0;
  const seconds = 10;
  timer.setTime(hours + minutes + seconds);
  timer.printTime();
  timer.start();
  setTimeout(function () {
    timer.reset();
  }, 3000);
});