import { NEXT_SONG,
         PREVIOUS_SONG,
         LOOP,
         BLOOP,
         RESET,
         BRESET } from './../actions/audio_actions';

const queueSelectorReducer = (state = 0, action) => {
  switch (action.type) {
    case NEXT_SONG:
      return (state + 1);
    case PREVIOUS_SONG:
      return (state - 1);
    case LOOP:
      return 0;
    case BLOOP:
      return action.length;
    case RESET:
      return 0;
    case BRESET:
      return action.length;
    default:
      return state;
  }
};

export default queueSelectorReducer;
