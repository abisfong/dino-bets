import addTimerListeners from "./add_timer_listeners";
import addGameListeners from "./add_game_listeners";

function init({ game, timer }) {
  addTimerListeners(game);
  addGameListeners(timer);
}

export {
  addTimerListeners,
  addGameListeners,
  init
}