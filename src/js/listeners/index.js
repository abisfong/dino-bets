import addTimerListeners from "./add_timer_listeners";
import addGameListeners from "./add_game_listeners";

function init({ game, timer }) {
  addTimerListeners(timer);
  addGameListeners(game);
}

export {
  addTimerListeners,
  addGameListeners,
  init
}