import React, { Component } from 'react';
import SearchBar from './SearchBar';
import { TMDB_IMAGE_URL } from '../config';

class MoviesHome extends Component {
  constructor() {
    super();
    this.state = {
      movie: null
    };
    this.displayMovie = this.displayMovie.bind(this);
  }

  displayMovie(movie) {
    this.setState({ movie: movie });
    console.log(movie);
  }

  render() {
    return (
      <section>
        <SearchBar selectMovie={this.displayMovie} />
        {this.state.movie ? (
          <div style={{ padding: '20px' }}>
            <img
              src={`${TMDB_IMAGE_URL}${this.state.movie.backdrop_path}`}
              alt="movie backdrop"
              style={{ width: '100%' }}
            />
            <p>Description: {this.state.movie.overview}</p>
            <p>Release Date: {this.state.movie.release_date}</p>
          </div>
        ) : null}
      </section>
    );
  }
}

export default MoviesHome;
