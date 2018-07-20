export const PLAY = "PLAY";
export const PAUSE = "PAUSE";
export const QUEUE_SONG = "QUEUE_SONG";
export const ADD_SONG_TO_QUEUE = "ADD_SONG_TO_QUEUE";
export const ADD_PLAYLIST_TO_QUEUE = "ADD_PLAYLIST_TO_QUEUE";
export const NEXT_SONG = "NEXT_SONG";
export const PREVIOUS_SONG = "PREVIOUS_SONG";
export const LOOP = "LOOP";
export const BLOOP = "BLOOP";
export const RESET = "RESET";
export const BRESET = "BRESET";
export const SHUFFLE = "SHUFFLE";

export const shuffle = (songQueue) => {
  return {
    type: SHUFFLE,
    songQueue
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};

export const breset = (length) => {
  return {
    type: BRESET,
    length,
  };
};

export const queueSong = (song) => {
  return {
    type: QUEUE_SONG,
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

export const loop = () => {
  return {
    type: LOOP,
  };
};

export const bloop = (length) => {
  return {
    type: BLOOP,
    length
  };
};
