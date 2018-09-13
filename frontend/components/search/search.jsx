import React from 'react';


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
            Search Results
          </ul>
        </div>
      </div>
    );
  }
}

export default Search;
