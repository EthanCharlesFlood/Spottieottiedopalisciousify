import React from 'react';
import SideBarContainer from './../bars/side_bar_container';
import SearchResultsContainer from './search_results_container';


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleUpdate = this.handleUpdate.bind(this);
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
        <SideBarContainer />
        <div className="search-top">
        </div>
        <div className="search-input">
          <form>
            <input
              type="text"
              className="search-input-form"
              value={this.state.query}
              onChange={this.handleUpdate}
              autoFocus
              placeholder="Search for a song..." />
          </form>
        </div>
        <div className="search-results">
          <ul>

          </ul>
        </div>
      </div>
    );
  }
}

export default Search;
