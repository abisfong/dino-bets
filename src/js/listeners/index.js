import addTimerListeners from "./add_timer_listeners";
import addGameListeners from "./add_game_listeners";
import addAmountInputListener from "./add_amount_input_lisenter";

function init({ game, timer }) {
  addTimerListeners(timer);
  addGameListeners(game);
  addAmountInputListener();
}

export {
  addTimerListeners,
  addGameListeners,
  init
}