import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    songs: Object.values(state.entities.songs)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSongs: () => dispatch(fetchSongs()),
  };
};


export default connect(mapStateToProps,mapDispatchToProps)(SongsIndex);
