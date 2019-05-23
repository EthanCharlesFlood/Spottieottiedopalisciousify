import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from './../../actions/session_actions';
import UsersShow from './users_show';
import { fetchPlaylists, fetchPlaylist } from './../../actions/playlist_actions';
import { selectPlaylists, selectFollowedPlaylists } from './../../reducers/selectors';
import { openModal, closeModal } from '../../actions/modal_actions';
import { addPlaylistToQueue, pause, play } from "./../../actions/audio_actions";

const mapStateToProps = (state) => {
  const currentUser = state.entities.users[state.session.id];

  return {
    currentUser: currentUser,
    playlists: selectPlaylists(state),
    followedPlaylists: selectFollowedPlaylists(state),
    playing: state.ui.audio.nowPlaying.playing,
    playingPlaylist: state.ui.audio.songQueue,
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
    fetchPlaylist: (id) => dispatch(fetchPlaylist(id)),
    addPlaylistToQueue: (playlist) => dispatch(addPlaylistToQueue(playlist)),
    pause: () => dispatch(pause()),
    play: () => dispatch(play()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersShow);
