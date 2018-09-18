import * as SearchAPIUtil from "./../util/search_api_util";

export const LOADING = "LOADING";
export const LOADED = "LOADED";
export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";
export const CLEAR_SEARCH_RESULTS = "CLEAR_SEARCH_RESULTS";


const receiveSearchResults = (results) => {
  return {
    type: RECEIVE_SEARCH_RESULTS,
    results
  };
};

const clearSearchResults = () => {
  return {
    type: CLEAR_SEARCH_RESULTS
  };
};


export const fetchSearchResults = (query) => (dispatch) => {
  return SearchAPIUtil.fetchSearchResults(query).then(results => {
    return (dispatch) => receiveSearchResults(results);
  });
};
