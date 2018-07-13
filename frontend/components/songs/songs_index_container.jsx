import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    playlists: Object.values(state.entities.songs)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};


export default connect(mapStateToProps,mapDispatchToProps)(SongsIndex);
