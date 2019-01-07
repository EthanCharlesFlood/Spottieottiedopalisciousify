import { OPEN_MODAL } from '../actions/modal_actions';
import { merge } from 'lodash';

const deletePlaylistReducer = (state = null, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return merge({}, state, { playlist_id: action.payload.playlistId });
    default:
      return state;
  }
};

export default deletePlaylistReducer;
