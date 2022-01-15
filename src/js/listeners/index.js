import addTimerListeners from "./add_timer_listeners";
import addGameListeners from "./add_game_listeners";
import addAmountInputListeners from "./add_amount_input_lisenter";

function init({ game, timer }) {
  addTimerListeners(timer);
  addGameListeners(game);
  addAmountInputListeners();
}

export {
  addTimerListeners,
  addGameListeners,
  init
}