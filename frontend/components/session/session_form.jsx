import React from 'react';
import { withRouter } from 'react-router-dom';


class SessionForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      email: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      return this.setState({[field]: e.target.value});
    };
  }


  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  renderErrors() {
    const errors = this.props.errors.map((error, i) => {
      return <li className="user-form-error" key={i}>{error}</li>;
    });
    return (
      <ul className="user-form-errors-list">
        {errors}
      </ul>
    );
  }


  render() {
    let emailForm;
    if (this.props.formType === "signup") {
      emailForm = <label>
        <input className="user-form-input" placeholder="Email" type="text" onChange={this.update("email")}></input>
      </label>;
    } else {
      emailForm = null;
    }

    return (
      <div className={"user-form-container"}>
        <h1 className="user-form-header">Spottieottiedopalisciousify&#174;</h1>
        <span className="user-form-type">Facebook login not supported!</span>
        <h2 className="user-form-line"><span className="user-form-divider"> INSTEAD </span></h2>
          <form className="user-form" onSubmit={this.handleSubmit}>
            <input className="user-form-input" type="text" placeholder="Username" onChange={this.update("username")}></input>
            {emailForm}
            <input type="password" className="user-form-input" placeholder="Password" onChange={this.update("password")}></input>
            {this.renderErrors()}
            <input type="submit" className={"user-form-submit"} value={this.props.formHeader}/>
          </form>
        <button className="user-form-demo" onClick={this.props.demoLogin.bind(this)}>Demo Login</button>
        {this.props.link}
        <p className="user-form-terms">We do not have any terms here at Spottieottiedopalisciousify! Relax, you're doing great!</p>
      </div>
    );
  }
}

export default withRouter(SessionForm);
