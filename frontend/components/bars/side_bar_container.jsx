import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from './../../actions/session_actions';
import SideBar from './side_bar';

const mapStateToProps = (state) => {
	return {
		currentUser: state.entities.users[state.session.id],
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		logout: () => dispatch(logout()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
