import {
	RECEIVE_PLAYLIST,
	RECEIVE_PLAYLISTS,
	REMOVE_PLAYLIST } from './../actions/playlist_actions.js';
import { REMOVE_SONG } from './../actions/song_actions.js';
import { merge } from 'lodash';

const playlistReducer = (state = {}, action) => {
	switch (action.type) {
		case RECEIVE_PLAYLIST:
			return merge({}, state, {[action.playlist.id]: action.playlist});
		case RECEIVE_PLAYLISTS:
			return merge({}, state, action.playlists);
		case REMOVE_PLAYLIST:
			const newState = merge({}, state);
			delete newState[action.playlistId];
			return newState;
    case REMOVE_SONG:
      const secondNewState = merge({}, state);
      const playlist = Object.values(secondNewState)[0];
      playlist.song_ids.filter(e => e !== action.songId.song_id);
      return secondNewState;
		default:
			return state;
	}
};

export default playlistReducer;
