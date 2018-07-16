import * as PlaylistApiUtil from "./../util/playlist_api_util";

export const RECEIVE_PLAYLISTS = "RECEIVE_PLAYLISTS";
export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";
export const REMOVE_PLAYLIST = "REMOVE_PLAYLIST";

const receivePlaylist = ({playlist, songs}) => {
	return {
		type: RECEIVE_PLAYLIST,
		playlist,
    songs
	};
};

const receivePlaylists = (playlists) => {
	return {
		type: RECEIVE_PLAYLISTS,
		playlists
	};
};

const removePlaylist = (playlistId) => {
  debugger
	return {
		type: REMOVE_PLAYLIST,
    playlistId
	};
};

export const fetchPlaylists = () => {
	return dispatch => {
		return PlaylistApiUtil.fetchPlaylists().then(playlists => dispatch(receivePlaylists(playlists)));
	};
};

export const fetchPlaylist = (playlistId) => {
	return dispatch => {
		return PlaylistApiUtil.fetchPlaylist(playlistId).then(payload => dispatch(receivePlaylist(payload)));
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
    debugger
		PlaylistApiUtil.deletePlaylist(playlistId).then(playlistId => { dispatch(removePlaylist(playlistId));
    return playlistId;
    });
	};
};

export const addSongToPlaylist = (ids) => {
  return dispatch => {
    return PlaylistApiUtil.addSongToPlaylist(ids).then(playlist => dispatch(receivePlaylist(playlist)));
  };
};
