import * as SongApiUtil from './../util/song_api_util';

export const RECEIVE_SONGS = "RECEIVE_SONGS";
export const RECEIVE_SONG = "RECEIVE_SONG";
export const REMOVE_SONG = "REMOVE_SONG";


const receiveSong = (song) => {
  return {
    type: RECEIVE_SONG,
    song
  };
};

const receiveSongs = (songs) => {
  return {
    type: RECEIVE_SONGS,
    songs
  };
};

const removeSong = (songId) => {
  return {
    type: REMOVE_SONG,
    songId
  };
};

export const fetchSongs = () => {
  return dispatch => {
    return SongApiUtil.fetchSongs().then(songs => dispatch(receiveSongs(songs)));
  };
};

export const fetchSong = (songId) => {
  return dispatch => {
    return SongApiUtil.fetchSong(songId).then(song => dispatch(receiveSong(song)));
  };
};

export const removeSongToPlaylist = (ids) => {
  return dispatch => {
    return SongApiUtil.removeSongToPlaylist(ids).then(songId => dispatch(removeSong(songId)));
  };
};
