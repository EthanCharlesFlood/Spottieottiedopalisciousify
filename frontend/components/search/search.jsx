import React from 'react';
import PlaylistResultsContainer from './playlist_results_container';
import SongResultsContainer from './song_results_container';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
    };
  }


  handleUpdate(e) {
    this.setState({ query: e.currentTarget.value});
  }

  render() {
    return (
      <div className="search-container">
        <div className="search-top">
          <span>"Search for a song or playlist."</span>
        </div>
        <div className="search-input">
          <form>
            <input
              type="text"
              className="search-input-form"
              value={this.state.query}
              onUpdate={this.handleUpdate}
              autoFocus
              placeholder="Search for a song..." />
          </form>
        </div>
        <div className="search-results">
          <ul>
            <PlaylistResultsContainer className="playlist-results" />
            <SongResultsContainer className="song-results" />
          </ul>
        </div>
      </div>
    );
  }
}

export default Search;
