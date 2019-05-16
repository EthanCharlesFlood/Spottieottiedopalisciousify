import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from './../../actions/session_actions';
import PlaylistIndex from './playlist_index';
import { fetchPlaylists, fetchPlaylist } from './../../actions/playlist_actions';
import { selectPlaylists } from './../../reducers/selectors';
import { addPlaylistToQueue, pause, play } from "./../../actions/audio_actions";

const mapStateToProps = (state) => {
	return {
		playlists: Object.values(state.entities.playlists),
		playing: state.ui.audio.nowPlaying.playing,
		playingPlaylist: state.ui.audio.songQueue,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchPlaylists: () => dispatch(fetchPlaylists()),
		fetchPlaylist: (id) => dispatch(fetchPlaylist(id)),
		addPlaylistToQueue: (playlist) => dispatch(addPlaylistToQueue(playlist)),
		pause: () => dispatch(pause()),
		play: () => dispatch(play()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistIndex);
