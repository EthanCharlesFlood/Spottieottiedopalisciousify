import React from 'react';
import { Link } from 'react-router-dom';

class SideBar extends React.Component {

  constructor(props) {
    super(props);
  }

	render() {
    const currentUser = this.props.currentUser;
		return (
			<div className="sidebar-container">
  			<Link to={'/main'} className="sidebar-link-main-logo"><i className="fab fa-spotify"></i></Link>
  			<span  className="search-component-link"><i className="fas fa-search"></i><span>Search</span></span>
  			<Link to={'/main'} className="sidebar-link-main-home"><i className="fas fa-home"></i>
    			<span>Home</span></Link>
  			<Link to={`/user/${currentUser.id}`} className="sidebar-link-user-show"><i className="fas fa-compact-disc"></i><span>Your Library</span></Link>
  			<h1 className="sidebar-username">
          <img className="sidebar-user-profile-pic" src={currentUser.imageurl}/>
  				<button onClick={this.props.logout.bind(this)}>{currentUser.username}</button>
  			</h1>
			</div>
		);
	}
}

export default SideBar;
