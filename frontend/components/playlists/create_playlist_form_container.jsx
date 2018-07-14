import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { createPlaylist } from './../../actions/playlist_actions';
import { closeModal } from '../../actions/modal_actions';
import PlaylistForm from './create_playlist_form';


const mapStateToProps = (state) => {
  return {
    playlist: { user_id: state.session.id, playlist_name: "" },
    modal: state.ui.modal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createPlaylist: (playlist) => dispatch(createPlaylist(playlist)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistForm);
