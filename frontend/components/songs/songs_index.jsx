import React from 'react';

class SongsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchSongs();
  }


  render() {
    
  }
}

export default SongsIndex;
