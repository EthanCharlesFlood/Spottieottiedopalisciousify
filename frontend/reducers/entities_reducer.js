import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import playlistReducer from './playlists_reducer';
import songsReducer from './songs_reducer';

const entitiesReducer = combineReducers({
	playlists: playlistReducer,
  songs: songsReducer,
  users: usersReducer
});

export default entitiesReducer;
