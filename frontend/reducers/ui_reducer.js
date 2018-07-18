import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import audioReducer from './audio_reducer';

export default combineReducers({
  modal: modalReducer,
  audio: audioReducer,
});
