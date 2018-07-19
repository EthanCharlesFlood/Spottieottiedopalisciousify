import * as SessionApiUtil from "./../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

const receiveCurrentUser = ({user, followed_playlists}) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user,
    followed_playlists,
  };
};

const logoutCurrentUser = userId => {
  return {
    type: LOGOUT_CURRENT_USER,
  };
};

const receiveSessionErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

export const login = user => {
  return dispatch => {
    return SessionApiUtil.login(user).then(user => dispatch(receiveCurrentUser(user)), err => dispatch(receiveSessionErrors(err.responseJSON)));
  };
};

export const logout = () => {
  return dispatch => {
    return SessionApiUtil.logout().then(() => dispatch(logoutCurrentUser()));
  };
};

export const signup = user => {
  return dispatch => {
    return SessionApiUtil.signup(user).then(user => dispatch(receiveCurrentUser(user)), err => dispatch(receiveSessionErrors(err.responseJSON)));
  };
};
