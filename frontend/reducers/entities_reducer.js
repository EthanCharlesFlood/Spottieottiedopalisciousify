import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import playlistReducer from './playlists_reducer';

const entitiesReducer = combineReducers({
	playlists: playlistReducer,
  users: usersReducer
});

export default entitiesReducer;
