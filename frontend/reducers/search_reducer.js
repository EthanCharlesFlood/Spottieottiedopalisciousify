import { RECEIVE_SEARCH_RESULTS, CLEAR_SEARCH_RESULTS } from "./../actions/search_actions";
import { merge } from "lodash";

const searchReducer = (action, state = {}) => {
  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      return merge({}, state, action.results);
    case CLEAR_SEARCH_RESULTS:
      return {};
    default:
      return state;
  }
};

export defualt searchReducer;
