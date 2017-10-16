import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class MovieItem extends Component {
    render() {
      console.log(this.props);
      return (
        <Link className="MovieResult collection-item" to={`/movie/${this.props.movie._id}`}>
          <span className="title">Title: {this.props.movie.title}</span>
          <p>Director: {this.props.movie.director}</p>
          <p>Genre: {this.props.movie.genre}</p>
        </Link>
      );
    }
}

export default MovieItem;
