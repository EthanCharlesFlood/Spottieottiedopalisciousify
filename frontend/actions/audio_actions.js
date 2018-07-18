export const PLAY = "PLAY";
export const PAUSE = "PAUSE";
export const RECEIVE_CURRENT_SONG = "RECEIVE_CURRENT_SONG";

export const receiveCurrentSong = (song) => {
  return {
    type: RECEIVE_CURRENT_SONG,
    song
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
