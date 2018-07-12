import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from './../../actions/session_actions';
import Main from './main';


const mapStateToProps = (state) => {
	return {
		currentUser: state.entities.users[state.session.id],
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
