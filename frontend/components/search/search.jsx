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
    this.setState({ query: e.currentTarget.value}, () => {
      if (this.state.query) {
        this.props.fetchSearchResults(this.state.query);
      } else {
        this.props.clearSearchResults();
      }
    });

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
              placeholder="Search for a song or playlist..." />
          </form>
        </div>
        <div className="search-results">
          <ul>
            <SearchResultsContainer />
          </ul>
        </div>
      </div>
    );
  }
}

export default Search;
