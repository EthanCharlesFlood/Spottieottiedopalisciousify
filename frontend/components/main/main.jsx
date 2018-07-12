import React from 'react';



class Main extends React.Component {

	render() {
		return (
		<div>
			<h3>{this.props.currentUser.username}</h3>
		</div>
		);
	}
}

export default Main;
