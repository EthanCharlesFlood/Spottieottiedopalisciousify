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
      return <li key={i}>{error}</li>;
    });
    return (
      <ul>
        {errors}
      </ul>
    );
  }


  render() {
    let emailForm;
    if (this.props.formType === "signup") {
      emailForm = <label>Email:
        <input type="text" onChange={this.update("email")}></input>
      </label>;
    } else {
      emailForm = null;
    }

    return (
      <div className={"user-form-container"}>
        <label>{this.props.formHeader}
        <br></br>
          {this.renderErrors()}
        <br></br>
          <form onSubmit={this.handleSubmit}>
            <label>Username:
              <input type="text" onChange={this.update("username")}></input>
            </label>
            <br></br>
            <br></br>
            <label>Password:
              <input type="password" onChange={this.update("password")}></input>
            </label>
            <br></br>
            <br></br>
            {emailForm}
            <br></br>
            <br></br>
            <input type="submit" className={"user-from-submit"}/>
          </form>
          <br></br>
          <br></br>
        </label>
        {this.props.link}
      </div>
    );
  }
}

export default withRouter(SessionForm);
