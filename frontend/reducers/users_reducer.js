import { RECEIVE_CURRENT_USER } from "./../actions/session_actions";
import { RECEIVE_PLAYLIST } from './../actions/playlist_actions';
import { merge } from 'lodash';

const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.user.id]: action.user});
    case RECEIVE_PLAYLIST:
      return merge({}, state, action.user);
    default:
      return state;
  }
};

export default usersReducer;
