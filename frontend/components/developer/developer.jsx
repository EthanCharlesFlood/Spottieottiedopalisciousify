import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import SideBarContainer from './../bars/side_bar_container';

class Developer extends React.Component {



  render() {
    const currentUser = this.props.currentUser;
    return (
      <div className="developer-container">
        <SideBarContainer />
        <div className="developer-inner-container">
          <img className="sidebar-user-profile-pic" src={currentUser.imageurl}/>
          <span className="developer-name">Site Created by Ethan Charles Flood</span>
          <a href="https://github.com/EthanCharlesFlood" className="developer-a">Github</a>
          <a href="https://www.linkedin.com/in/ethan-flood-58239589/" className="developer-a">Linkedin</a>
          <a href="" className="developer-a">Resume</a>
        </div>
      </div>
    );
  }
}

export default Developer;
