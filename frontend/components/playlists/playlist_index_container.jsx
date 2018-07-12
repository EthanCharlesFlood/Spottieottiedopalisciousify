import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from './../../actions/session_actions';
import PlaylistIndex from './playlist_index';
import { fetchPlaylists } from './../../actions/playlist_actions';
import { selectPlaylists } from './../../reducers/selectors';

const mapStateToProps = (state) => {
	return {
		playlists: selectPlaylists(state)
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchPlaylists: () => dispatch(fetchPlaylists())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistIndex);
