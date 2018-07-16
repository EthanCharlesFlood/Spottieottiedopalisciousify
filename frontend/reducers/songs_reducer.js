import {
	RECEIVE_SONG,
	RECEIVE_SONGS } from './../actions/playlist_actions.js';
import { merge } from 'lodash';

const songsReducer = (state = {}, action) => {
	switch (action.type) {
		case RECEIVE_SONG:
			return merge({}, state, {[action.song.id]: action.song});
		case RECEIVE_SONGS:
			return merge({}, state, action.songs);
		default:
			return state;
	}
};

export default songsReducer;
