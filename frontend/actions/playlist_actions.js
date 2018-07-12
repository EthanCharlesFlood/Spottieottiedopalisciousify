import * as PlaylistApiUtil from "./../util/playlist_api_util";

export const RECEIVE_PLAYLISTS = "RECEIVE_PLAYLISTS";
export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";
export const REMOVE_PLAYLIST = "REMOVE_PLAYLIST";

const receivePlaylist = (playlist) => {
	return {
		type: RECEIVE_PLAYLIST,
		playlist
	};
};

const receivePlaylists = (playlists) => {
	return {
		type: RECEIVE_PLAYLISTS,
		playlists
	};
};

const removePlaylist = (playlistId) => {
	return {
		type: REMOVE_PLAYLIST,
	};
};

export const fetchPlaylists = () => {
	return dispatch => {
		return PlaylistApiUtil.fetchPlaylists().then(playlists => dispatch(receivePlaylists(playlists)));
	};
};

export const fetchPlaylist = (playlistId) => {
	return dispatch => {
		return PlaylistApiUtil.fetchPlaylist(playlistId).then(playlist => dispatch(receivePlaylist));
	};
};

export const createPlaylist = (playlist) => {
	return dispatch => {
		return PlaylistApiUtil.createPlaylist(playlist).then(playlist => dispatch(receivePlaylist(playlist)));
	};
};

export const updatePlaylist = (playlist) => {
	return dispatch => {
		return PlaylistApiUtil.updatePlaylist(playlist).then(playlist => dispatch(receivePlaylist(playlist)));
	};
};

export const deletePlaylist = (playlistId) => {
	return dispatch => {
		return PlaylistApiUtil.deletePlaylist(playlistId).then(playlistId => dispatch(removePlaylist(playlistId)));
	};
};
