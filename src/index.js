import Bet from './js/models/bet';
import Dino from './js/models/drawables/dino';
import Money from './js/models/Money';
import Race from './js/models/race';
import Timer from './js/models/timer';
import * as Util from './js/util';
import Canvas from './js/models/canvas';
import Background from './js/models/drawables/background';

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
    const timer = new Timer(document.querySelector('#timer'));
    const canvas = new Canvas();
    // const purpDino = new Dino({
    //   color: 'purp', 
    //   canvas, 
    //   pos: [0, 120],
    //   size: 'large'  
    // });
    // const redDino = new Dino({color: 'red', canvas, pos: [30, 90]});
    // const yellowDino = new Dino({color: 'yellow', canvas, pos: [60, 90]});
    // const greenDino = new Dino({color: 'green', canvas, pos: [90, 90]});
    const background1 = new Background({canvas});
    const background2 = new Background({canvas, pos: [canvas.width, 0]});
    canvas.addDrawable(background1);
    canvas.addDrawable(background2);
    // canvas.addDrawable(purpDino);
    // canvas.addDrawable(redDino);
    // canvas.addDrawable(yellowDino);
    // canvas.addDrawable(greenDino);
    window.canvas = canvas;
    window.scrollBackground = function () {
      background1.scroll('left');
      background2.scroll('left');
    };
    window.stopScroll = function () {
      background1.stopScroll();
      background2.stopScroll();
    }
    // purpDino.run();
    // redDino.run();
    // yellowDino.run();
    // greenDino.run();
  });