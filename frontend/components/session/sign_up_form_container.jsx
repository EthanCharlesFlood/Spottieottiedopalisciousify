import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, login, clearErrors } from './../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({errors}) => {
  return {
    errors: errors.session,
    formType: "signup",
    formHeader: "Sign Up",
    link: <label>Already have an account?  <Link className="user-form-link" to={"/login"}>Log In</Link></label>,
  };
};

const mapDispatchToProps = (dispatch) => {
  const demoUser = {
        username: "Ethan",
        password: "password"
      };
  return {
    processForm: user => dispatch(signup(user)),
    demoLogin: () => dispatch(login(demoUser)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
