import React from 'react';


class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);


    this.handleAddSong = this.handleAddSong.bind(this);
    this.state = {
      icon: '<i className="fas fa-play"></i>',
    };
  }

  handleAddSong(e) {
    this.props.queueSong(this.props.songs[e.currentTarget.id]);
  }

  render() {

    return ();
  }
}
