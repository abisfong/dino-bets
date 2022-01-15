import addTimerListeners from "../event_handlers/add_timer_listeners";
import addGameListeners from "./add_game_listeners";

export default class EventsHandler {
  constructor({ game, timer }) {
    addTimerListeners(timer);
    addGameListeners(game);
  }
}