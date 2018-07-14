import {
	RECEIVE_PLAYLIST,
	RECEIVE_PLAYLISTS,
	REMOVE_PLAYLIST } from './../actions/playlist_actions.js';
import { merge } from 'lodash';

const playlistReducer = (state = {}, action) => {
	switch (action.type) {
		case RECEIVE_PLAYLIST:
			return merge({}, state, {[action.playlist.playlist.id]: action.playlist});
		case RECEIVE_PLAYLISTS:
			return merge({}, state, action.playlists);
		case REMOVE_PLAYLIST:
			const newState = merge({}, state);
			delete newState[action.playlistId];
			return newState;
		default:
			return state;
	}
};

export default playlistReducer;
