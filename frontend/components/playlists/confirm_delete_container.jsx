import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';
import ConfirmDeleteForm from './confirm_delete_form';
import { deletePlaylist } from './../../actions/playlist_actions'

const mapStateToProps = (state,ownProps) => {
    return {
      playlistId: state.entities.deletePlaylist.playlist_id,
      modal: state.ui.modal,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deletePlaylist: (id) => {
      return dispatch(deletePlaylist(id));
    },
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmDeleteForm);
