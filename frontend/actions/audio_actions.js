export const PLAY = "PLAY";
export const PAUSE = "PAUSE";
export const RECEIVE_SONG = "RECEIVE_SONG";
export const ADD_SONG_TO_QUEUE = "ADD_SONG_TO_QUEUE";
export const ADD_PLAYLIST_TO_QUEUE = "ADD_PLAYLIST_TO_QUEUE";
export const NEXT_SONG = "NEXT_SONG";
export const PREVIOUS_SONG = "PREVIOUS_SONG";

export const receiveSong = (song) => {
  return {
    type: RECEIVE_SONG,
    song
  };
};

export const addSongToQueue = (song) => {
  return {
    type: ADD_SONG_TO_QUEUE,
    song
  };
};

export const addPlaylistToQueue = (playlist) => {
  return {
    type: ADD_PLAYLIST_TO_QUEUE,
    playlist
  };
};

export const nextSong = () => {
  return {
    type: NEXT_SONG,
  };
};

export const previousSong = () => {
  return {
    type: PREVIOUS_SONG,
  };
};

export const play = () => {
  return {
    type: PLAY,
  };
};

export const pause = () => {
  return {
    type: PAUSE,
  };
};
