import { connect } from 'react-redux';
import React from 'react';
import { logout } from './../../actions/session_actions';
import PlaylistShow from './playlist_show';
import {
  fetchPlaylist,
  deletePlaylist,
  followPlaylist,
  removeFollow } from './../../actions/playlist_actions';
import { fetchSongs } from './../../actions/song_actions';
import { removeSongToPlaylist } from './../../actions/song_actions';
import { selectPlaylist, selectPlaylistSongs } from './../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const playlist = selectPlaylist(state, ownProps.match.params.playlistid);
  const songs = selectPlaylistSongs(state, playlist);
  let follows = false;
  state.entities.users[state.session.id].followed_playlists.map(pl => {
    if (pl.id === playlist.id) {
      follows = true;
    }
  });
  debugger
  return {
    playlist: playlist,
    songs: songs,
    currentUserId: state.session.id,
    currentUser: state.entities.users[state.session.id],
    follows: follows,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPlaylist: playlistId => dispatch(fetchPlaylist(playlistId)),
    deletePlaylist: playlistId => {
      return dispatch(deletePlaylist(playlistId));
    },
    removeSong: ids => dispatch(removeSongToPlaylist(ids)),
    followPlaylist: ids => dispatch(followPlaylist(ids)),
    removeFollow: ids => dispatch(removeFollow(ids))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistShow);
