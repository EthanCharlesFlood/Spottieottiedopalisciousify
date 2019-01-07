import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';
import ConfirmDeleteForm from './confirm_delete_form';

const mapStateToProps = (state) => {
    return {
      modal: state.ui.modal,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deletePlaylist: playlistId => {
      return dispatch(deletePlaylist(playlistId));
    },
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmDeleteForm);
