import addGameEventListeners from "./gameListeners";
import addTimerEventListeners from "./timerListeners";

export default function addAllEventListeners(game) {
  addGameEventListeners(game);
  addTimerEventListeners(game.timer);
}