import Bet from './js/models/bets/bet';
import DinoSprite from './js/models/drawables/dino_sprite';
import Money from './js/models/Money';
import Race from './js/models/race';
import Timer from './js/models/timer';
import * as Util from './js/util';
import Game from './js/models/game';

if (document.title === "Jasmine Spec Runner") {
  window['Bet'] = Bet;
  window['DinoSprite'] = DinoSprite;
  window['Money'] = Money;
  window['Race'] = Race;
  window['Timer'] = Timer;
  for(let key in Util)
    window[key] = Util[key];
}


if (document.title !== "Jasmine Spec Runner")
  document.addEventListener("DOMContentLoaded", function () {
    const game = new Game({});
  });