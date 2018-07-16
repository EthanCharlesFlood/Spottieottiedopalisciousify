import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchSongs } from '../../actions/song_actions';
import SongsIndex from './songs_index';
import AddSongToPlaylistContainer from './add_song_to_playlist_container';

const mapStateToProps = (state) => {
  return {
    songs: Object.values(state.entities.songs)
  };
};

const mapDispatchToProps = (dispatch, ownPops) => {
  return {
    fetchSongs: () => dispatch(fetchSongs()),
    createModal1: (
      <button className="playlist-modal" onClick={() => dispatch(openModal('Create'))}>
        New Playlist
      </button>
    ),
    createModal2: (
      <button className="song-modal" onClick={() =>
        dispatch(openModal('SongToPlaylist'))}>
        <i className="fas fa-ellipsis-h"></i>
      </button>
    ),
    closeModal: () => dispatch(closeModal()),
  };
};


export default connect(mapStateToProps,mapDispatchToProps)(SongsIndex);
