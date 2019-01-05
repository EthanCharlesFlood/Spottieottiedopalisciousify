import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';

class Developer extends React.Component {



  render() {
    return (
      <div className="developer-container">
        <img className="developer-picture" src="app/assets/images/Ethan.jpeg"></img>
        <span className="developer-name">Developer Name</span>
        <a href="https://github.com/EthanCharlesFlood" className="developer-a">Github</a>
        <a href="https://www.linkedin.com/in/ethan-flood-58239589/" className="developer-a">Linkedin</a>
        <a href="" className="developer-a">Resume</a>
      </div>
    );
  }
}
