import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from './../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({errors}) => {
  return {
    errors: errors.session,
    formType: "login",
    formHeader: "Log In",
    link: <label>Don't have an account?  <Link className="user-form-link" to={"/signup"}>Sign Up</Link></label>,
  };
};

const mapDispatchToProps = (dispatch) => {
  const demoUser = {
          username: "Ethan",
          password: "password"
        };
  return {
    processForm: user => dispatch(login(user)),
    demoLogin: () => dispatch(login(demoUser))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
