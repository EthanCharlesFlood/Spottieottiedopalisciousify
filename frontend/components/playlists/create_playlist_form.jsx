import React from 'react';
import { Link } from 'react-router-dom';



class PlaylistForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.playlist;
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  update(field) {
    return e => {
      this.setState({
        [field]: e.target.value,
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPlaylist(this.state);
  }

  render() {
    return (
      <div className="modal-form-container">
        <label className="modal-top-label">Create New Playlist
          <form className="modal-form" onSubmit={this.handleSubmit}>
            <div className="modal-bar">
              <label className="modal-label">Playlist Name
                <input className="modal-input" type="text" placeholder="Start typing..." onChange={this.update("playlist_name")} value={this.state.playlist_name}></input>
              </label>
            </div>
            <input className="modal-submit" type="submit" value="Create"/>
          </form>
        </label>
      </div>
    );
  }
}

export default PlaylistForm;
