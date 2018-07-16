import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { createPlaylist } from './../../actions/playlist_actions';
import { closeModal } from '../../actions/modal_actions';
import AddSongToPlaylist from './add_song_to_playlist';

const mapStateToProps = (state, ownProps) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddSongToPlaylist);
