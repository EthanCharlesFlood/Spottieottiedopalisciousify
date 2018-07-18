import { PLAY, PAUSE, RECEIVE_CURRENT_SONG } from './../actions/audio_actions';
import { merge } from 'lodash';

const audioReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_SONG:
      return merge({}, state, { current_song: song, playing: true });
    case PLAY:
      return merge({}, state, {playing: true});
    case PAUSE:
      return merge({}, state, {playing: false});
    default:
      return state;
  }
};

export default audioReducer;
