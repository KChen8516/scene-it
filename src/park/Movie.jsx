import React from 'react';

import '../styles/Movie.css';
import ReviewContainer from '../containers/ReviewContainer';
import NoteModal from './NoteModal';

const Movie = (props) => {
  return (
    <div>
      <h4>{props.movie.title}</h4>
      <div className="row">
        <img src={props.movie.poster} className="MoviePoster s12 m4 responsive-img" alt="?"/>
        <div className="MovieInfo m8 flow-text">
          <p>Director: {props.movie.director}</p>
          <p>Actors: </p>
          <p>Release Date: {props.movie.releaseDate}</p>
          <p>Genre: {props.movie.genre}</p>
          <p>Summary: {props.movie.summary}</p>
        </div>
      </div>
      <div className="row center-align">
        <a className="waves-effect waves-light btn s6 ReviewButton" href="#reviewModal">
          <i className="material-icons left">mode_edit</i>Review
        </a>
        <a className="waves-effect waves-light btn s6 NoteButton" href="#noteModal">
          <i className="material-icons left">list</i>Notes
          </a>
      </div>

      <ReviewContainer title={props.movie.title}/>

      <NoteModal />
    </div>
  );
};

export default Movie;
