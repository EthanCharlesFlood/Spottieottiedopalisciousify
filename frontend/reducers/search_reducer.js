import { RECEIVE_SEARCH_RESULTS, CLEAR_SEARCH_RESULTS } from "./../actions/search_actions";
import { merge } from "lodash";

const presetState = {
  playlists: {},
  songs: {},
};

const searchReducer = (state = presetState, action) => {
  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      const playlists = action.results.playlists || {};
      const songs = action.results.songs || {};
      return { playlists: playlists, songs: songs, };
    case CLEAR_SEARCH_RESULTS:
      return {playlists: {}, songs: {},};
    default:
      return state;
  }
};

export default searchReducer;
