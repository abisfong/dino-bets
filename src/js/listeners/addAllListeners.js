import addGameListeners from "./addGameListeners";
import addTimerListeners from "./addTimerListeners";

export default function addAllListeners(game) {
  addTimerListeners(game.timer);
  addGameListeners(game);
}