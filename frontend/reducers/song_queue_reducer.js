import { RECEIVE_SONG, ADD_SONG_TO_QUEUE, ADD_PLAYLIST_TO_QUEUE, NEXT_SONG } from './../actions/audio_actions';

const songQueueReducer = (state = [], action) => {
  const newState = state;
  switch (action.type) {
    case RECEIVE_SONG:
      return action.song;
    case ADD_PLAYLIST_TO_QUEUE:
      return action.playlist;
    case ADD_SONG_TO_QUEUE:
      newState.push(action.song[0]);
      return newState;
    case NEXT_SONG:
      newState.shift();
      return newState;
    default:
      return state;
  }
};

export default songQueueReducer;
