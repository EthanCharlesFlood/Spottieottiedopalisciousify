import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from './../../actions/session_actions';
import NavBar from './nav_bar';

const mapStateToProps = (state) => {
	return {

	};
};

const mapDispatchToProps = (dispatch) => {
	return {

	};
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
