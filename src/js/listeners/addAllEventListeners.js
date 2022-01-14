import addGameEventListeners from "./gameListeners";
import addTimerEventListeners from "./timerListeners";

export default function addAllEventListeners(game) {
  addTimerEventListeners(game.timer);
  addGameEventListeners(game);
}