import Bet from './js/models/bet';
import Dino from './js/models/drawables/dino';
import Money from './js/models/Money';
import Race from './js/models/race';
import Timer from './js/models/timer';
import * as Util from './js/util';
import Game from './js/models/game';

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
    new Game({ dinoColors: ['purp', 'red', 'yellow', 'green'] });
  });