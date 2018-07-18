import { OPEN_MODAL } from '../actions/modal_actions';
import { merge } from 'lodash';

const songsToPlaylistReducer = (state = null, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return merge({}, state, { song_id: action.payload.song_id });
    default:
      return state;
  }
};

export default songsToPlaylistReducer;
