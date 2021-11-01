import Bet from './js/bet';
import Dino from './js/dino';
import Money from './js/Money';
import Race from './js/race';
import Timer from './js/timer';
import * as Util from './js/util';

if (document.title === "Jasmine Spec Runner") {
  window['Bet'] = Bet;
  window['Dino'] = Dino;
  window['Money'] = Money;
  window['Race'] = Race;
  window['Timer'] = Timer;
  for(let key in Util)
    window[key] = Util[key];
}


if (document.title !== "Jasmine Spec Runner")
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
    }, 5000);
  });