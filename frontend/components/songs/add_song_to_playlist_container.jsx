import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { addSongToPlaylist, fetchPlaylists, createPlaylist } from './../../actions/playlist_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import AddSongToPlaylist from './add_song_to_playlist';

const mapStateToProps = (state, ownProps) => {
  return {
    playlists: Object.values(state.entities.playlists),
    modal: state.ui.modal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addSongToPlaylist: (ids) => dispatch(addSongToPlaylist(ids)),
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    createPlaylist: (playlist) => dispatch(createPlaylist(playlist)),
    createModal: (
      <button className="playlist-modal" onClick={() => dispatch(openModal('Create'))}>
        New Playlist
      </button>
    ),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddSongToPlaylist);
