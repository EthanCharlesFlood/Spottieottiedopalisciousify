import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from './../../actions/session_actions';
import UsersShow from './users_show';
import { fetchPlaylists } from './../../actions/playlist_actions';
import { selectPlaylists } from './../../reducers/selectors';
import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    playlists: selectPlaylists(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    createPlaylist: playlist => dispatch(createPlaylist(playlist)),
    createModal: (
      <button className="playlist-modal" onClick={() => dispatch(openModal({ modal: 'Create' }))}>
        New Playlist
      </button>
    ),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersShow);
