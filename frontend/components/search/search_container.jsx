import React from 'react';
import { connect } from 'react-redux';
import Search from './search';
import { fetchSearchResults } from '../../actions/search_actions';

const mapStateToProps = () => {
  return {

  };
};

const mapDispatchToProps = () => {
  return {
    fetchSearchResults: query => dispatch(fetchSearchResults(query))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Search);
