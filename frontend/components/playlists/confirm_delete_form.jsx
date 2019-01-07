import React from 'react';
import { Link } from 'react-router-dom';

class ConfirmDeleteForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.deletePlaylist(this.props.playlistId);
    this.props.closeModal();
  }

  render() {
    const blurb = "Are you sure you want to delete this playlist?";
    return (
      <div className="confirm-delete-container">
        {blurb}
        <br></br>
        <div className="confirm-delete-button-container">
          <Link className="confirm-delete-button" to={'/main'} onClick={this.handleDelete}>Delete</Link>
          <button className="confirm-delete-button" onClick={this.props.closeModal}>Cancel</button>
        </div>
      </div>
    );
  }
}

export default ConfirmDeleteForm;
