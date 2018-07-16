import { connect } from 'react-redux';
import React from 'react';
import { logout } from './../../actions/session_actions';
import PlaylistShow from './playlist_show';
import { fetchPlaylist, deletePlaylist } from './../../actions/playlist_actions';
import { selectPlaylist, selectPlaylistSongs } from './../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const playlist = selectPlaylist(state, ownProps.match.params.playlistid);
  const songs = selectPlaylistSongs(state, playlist);
  return {
    playlist: playlist,
    songs: songs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPlaylist: playlistId => dispatch(fetchPlaylist(playlistId)),
    deletePlaylist: playlistId => {
      return dispatch(deletePlaylist(playlistId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistShow);
