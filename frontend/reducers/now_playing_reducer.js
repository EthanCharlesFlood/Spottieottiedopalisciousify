import { PLAY, PAUSE, RECEIVE_SONG, ADD_PLAYLIST_TO_QUEUE, NEXT_SONG } from './../actions/audio_actions';
import { merge } from 'lodash';


const nowPlayingReducer = (state = { playing: false }, action) => {
  switch (action.type) {
    case PLAY:
      return { playing: true };
    case PAUSE:
      return { playing: false };
    case RECEIVE_SONG:
      return { playing: true };
    case ADD_PLAYLIST_TO_QUEUE:
      return { playing: true };
    case NEXT_SONG:
      return { playin: true};
    default:
      return state;
  }
};


export default nowPlayingReducer;
