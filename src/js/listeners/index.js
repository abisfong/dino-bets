import addTimerListeners from "./add_timer_listeners";
import addGameListeners from "./add_game_listeners";
import addAmountInputListeners from "./add_amount_input_lisenter";
import addBetListeners from "./add_bet_listeners";
import addViewLisenters from "./add_view_lisenters";
import addAudioListeners from "./add_audio_listener";

function init({ betController, game, timer }) {
  const foley = game.foley;
  
  addTimerListeners(timer);
  addGameListeners(game);
  addAmountInputListeners();
  addBetListeners(betController);
  addViewLisenters(foley);
  addAudioListeners();
}

export {
  addTimerListeners,
  addGameListeners,
  init
}