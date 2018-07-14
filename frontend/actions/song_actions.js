import * as SongApiUtil from './../util/song_api_util';

export const RECEIVE_SONGS = "RECEIVE_SONGS";
export const RECEIVE_SONG = "RECEIVE_SONG";

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
