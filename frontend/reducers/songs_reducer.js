import {
	RECEIVE_SONG,
	RECEIVE_SONGS,
  REMOVE_SONG } from './../actions/song_actions';
import {
  OPEN_MODAL
} from './../actions/modal_actions';
import { RECEIVE_PLAYLIST } from './../actions/playlist_actions';
import { merge } from 'lodash';

const songsReducer = (state = {}, action) => {
	switch (action.type) {
		case RECEIVE_SONG:
			return merge({}, state, {[action.song.id]: action.song});
    case RECEIVE_PLAYLIST:
      return merge({}, state, action.songs);
		case RECEIVE_SONGS:
			return merge({}, state, action.songs);
    case REMOVE_SONG:
      const newState = merge({}, state);
      delete newState[action.songId.song_id];
      return newState;
		default:
			return state;
	}
};

export default songsReducer;
