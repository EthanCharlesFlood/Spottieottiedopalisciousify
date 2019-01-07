import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from './../../actions/session_actions';
import Developer from './developer';

const mapStateToProps = (state) => {
  const currentUser = state.entities.users[state.session.id];
  return {
    currentUser: currentUser,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Developer);
