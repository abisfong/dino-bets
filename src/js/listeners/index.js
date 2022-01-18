import addTimerListeners from "./add_timer_listeners";
import addGameListeners from "./add_game_listeners";
import addAmountInputListeners from "./add_amount_input_lisenter";
import addBetListeners from "./add_bet_listeners";

function init({ betController, game, timer }) {
  const foley = game.foley;
  
  addTimerListeners(timer);
  addGameListeners(game);
  addAmountInputListeners();
  addBetListeners(betController, foley);
}

export {
  addTimerListeners,
  addGameListeners,
  init
}