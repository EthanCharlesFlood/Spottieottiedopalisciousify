import React from 'react';
import { connect } from 'react-redux';
import Search from './search';
import { fetchSearchResults, clearSearchResults } from '../../actions/search_actions';

const mapStateToProps = () => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSearchResults: query => dispatch(fetchSearchResults(query)),
    clearSearchResults: () => dispatch(clearSearchResults())
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Search);
