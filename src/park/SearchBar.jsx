import React from 'react';

import MovieItem from './MovieItem';

const SearchBar = props => {

  render() {

    let queryResults = this.props.results.map(result => {
        return (
          <MovieItem key={result.title} movie={result} />
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

export default SearchBar;
