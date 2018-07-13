import React from 'react';
import { Link } from 'react-router-dom';



class PlaylistForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.playlist;
  }

  render() {
    return (
      <div>
        <label>
          <form>
            <input type="text"></input>
          </form>
        </label>
      </div>
    );
  }
}
