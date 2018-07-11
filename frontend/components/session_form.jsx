import React from 'react';


class SessionForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
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


  render() {
    return (
      <div className={"user-form-container"}>
        <label>{this.props.formHeader}
          <form onSubmit={this.handleSubmit}>
            <label>Username:
              <input type="text"></input>
            </label>
            <label>Password:
              <input type="password"></input>
            </label>
            <submit className={"user-from-submit"}/>
          </form>
        </label>
      </div>
    );
  }
}


// emailComponent: <label>Email:<input type="text"></input></label>
