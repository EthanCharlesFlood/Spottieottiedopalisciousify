import { PLAY,
         PAUSE,
         QUEUE_SONG,
         ADD_PLAYLIST_TO_QUEUE,
         RESET,
         BRESET,
         LOOP,
         BLOOP } from './../actions/audio_actions';
import { merge } from 'lodash';


const nowPlayingReducer = (state = { playing: false }, action) => {
  switch (action.type) {
    case PLAY:
      return { playing: true };
    case PAUSE:
      return { playing: false };
    case RESET:
      return { playing: false };
    case BRESET:
      return { playing: false };
    case QUEUE_SONG:
      return { playing: true };
    case ADD_PLAYLIST_TO_QUEUE:
      return { playing: true };
    case LOOP:
      return { playing: true};
    case BLOOP:
      return { playing: true};
    default:
      return state;
  }
};


export default nowPlayingReducer;
