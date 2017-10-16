import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { fetchMovie } from '../actions/movieActions';

import Movie from '../components/Movie';

declare var $:any;

class MovieContainer extends Component {

  constructor() {
    super();
    this.state = {
      title: 'The Nightmare Before Christmas (1993)',
      poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNWE4OTNiM2ItMjY4Ni00ZTViLWFiZmEtZGEyNGY2ZmNlMzIyXkEyXkFqcGdeQXVyMDU5NDcxNw@@._V1_SY1000_CR0,0,666,1000_AL_.jpg',
      director: 'Tim Burton',
      releaseDate: '29 October 1993',
      summary: 'Jack Skellington, the pumpkin king of Halloween Town, is bored with doing the same thing every year for Halloween. One day he stumbles into Christmas Town, and is so taken with the idea of Christmas that he tries to get the resident bats, ghouls, and goblins of Halloween town to help him put on Christmas instead of Halloween -- but alas, they cant get it quite right.',
      actors: ['Danny Elfman', 'Chris Sarandon', `Catherin O'Hara`],
      genre:'Animation'
    }
  }

  componentWillMount() {
    this.props.fetchMovie(this.props.match.params.id);
  }

  componentDidMount() {
    $('.modal').modal();
  }

  render() {
    console.log(this.props.match.params.id);
    // Check for a valid id
    const id = parseInt(this.props.match.params.id, 10);
    if (id !== 0 && !id) {
      return <Redirect to={{pathname: "/404"}} />
    }
    return (
      <Movie movie={this.state} />
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchMovie: (id) => dispatch(fetchMovie(id))
  };
}

export default connect(null, mapDispatchToProps)(MovieContainer);
