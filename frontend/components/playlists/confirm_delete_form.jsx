import React from 'react';


class ConfirmDeleteForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.deletePlaylist(this.props.match.params.playlistid).then(() => this.props.history.push("/main")
    );
  }

  render() {
    const blurb = "Are you sure you want to delete this playlist?";
    return (
      <div className="confirm-delete-container">
        {blurb}
        <div onClick={this.handleDelete}>Delete</div>
        <div onClick={this.closeModal}>Cancel</div>
      </div>
    );
  }
}

export default ConfirmDeleteForm;
