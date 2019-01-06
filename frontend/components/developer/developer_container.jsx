import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import Developer from './developer';

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Developer);
