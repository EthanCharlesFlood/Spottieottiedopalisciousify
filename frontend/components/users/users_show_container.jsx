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
    playlists: Object.values(state.entities.playlists)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createPlaylist: playlist => dispatch(createPlaylist(playlist)),
    createModal: (
      <button className="playlist-modal" onClick={() => dispatch(openModal('Create'))}>
        New Playlist
      </button>
    ),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersShow);
