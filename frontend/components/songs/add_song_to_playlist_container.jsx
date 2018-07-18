import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { addSongToPlaylist, fetchPlaylists, createPlaylist } from './../../actions/playlist_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import AddSongToPlaylist from './add_song_to_playlist';
import { selectPlaylists } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    playlists: selectPlaylists(state),
    modal: state.ui.modal,
    songId: state.entities.songsToPlaylist.song_id
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addSongToPlaylist: (ids) => dispatch(addSongToPlaylist(ids)),
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    createPlaylist: (playlist) => dispatch(createPlaylist(playlist)),
    createModal: (
      <button className="playlist-modal" onClick={() => dispatch(openModal({ modal: 'Create' }))}>
        New Playlist
      </button>
    ),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddSongToPlaylist);
