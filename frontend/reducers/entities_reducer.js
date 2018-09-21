import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import playlistReducer from './playlists_reducer';
import songsReducer from './songs_reducer';
import songsToPlaylistReducer from './songs_to_playlist_reducer';
import searchReducer from "./search_reducer";

const entitiesReducer = combineReducers({
	playlists: playlistReducer,
  songs: songsReducer,
  users: usersReducer,
  songsToPlaylist: songsToPlaylistReducer,
	// search: searchReducer,
});

export default entitiesReducer;
