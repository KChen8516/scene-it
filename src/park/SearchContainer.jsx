import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchMovies } from '../actions/movieActions';

import MovieItem from '../components/MovieItem';

class SearchBar extends Component {

  /**
   * Lifecycle Methods
   */
  componentDidMount() {
     console.log('componentDidMount SearchContainer props', this.props);
  }

  // Handle the search query
  handleSubmit(e) {
    // console.log(this.refs.query.value);
    this.props.searchMovies();
    e.preventDefault();
  }

  render() {
    console.log(this.props.results);
    let queryResults = this.props.results.map(result => {
      return (
        <MovieItem key={result._id} movie={result} />
      );
    });

    return (
      <div className="row">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="col s12 card-panel blue-grey lighten-3">
            <div className="input-field">
              <i className="material-icons prefix">search</i>
              <input type="text" ref="query"/>
            </div>
          </div>
        </form>
          {this.props.results.length > 0 &&
            <div className="MovieList collection">
              {queryResults}
            </div>
          }
      </div>
    );
  }
}

// Immutable properties or configurations for this component
SearchBar.defaultProps = {
  searchMovies: () => {},
  results: []
};

/* ================================ *
 * React-Redux Setup                *
 * ================================ */

/**
 * Subscribes the component to store updates and calls this func.
 * @param state <Object> - the store state
 * @param ownProps <Object> - the connected component's properties
**/
const mapStateToProps = (state, ownProps) => {
  // console.log('mapStateToProps state', state);
  // console.log('mapStateToProps ownProps', ownProps);
  console.log(state.search.movies);
  return {
    results: state.search.movies
  }
}

/**
 * If any obj is passed, each func inside it is assumed to be an action creator.
 * @param dispatch <Function/Object> - Can be an obj or function
 * @param ownProps <Object> - the connected component's properties
**/
const mapDispatchToProps = (dispatch, ownProps) => {
  // console.log('mapDispatchToProps dispatch', dispatch);
  // console.log('mapDispatchToProps ownProps', ownProps);
  return {
    searchMovies: () => dispatch(fetchMovies())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
