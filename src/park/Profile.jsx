import React from 'react';

import { Link } from 'react-router-dom';

import '../styles/Profile.css';

const Profile = (props) => (
  <div className="row center-align">
    <h4>Profile Page</h4>
    <div>
      <img className="circle responsive-img ProfileImage" alt="?" src="https://img.discogs.com/Im-6q-6oPsQqfcb6vW0h2xR16tU=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-1087831-1425456688-8264.jpeg.jpg" />
    </div>
    <div className="row">
      <ul id="tabs-swipe-demo" className="tabs">
        <li className="tab col s4"><a className="active" href="#tab-1">Reviews</a></li>
        <li className="tab col s4"><a href="#test-swipe-2">Watch List</a></li>
        <li className="tab col s4"><a href="#test-swipe-3">Notes</a></li>
      </ul>
      <div id="tab-1" className="col s12 ProfileTab">
        <ul className="collection">
          {props.reviews.map(review => {
            return (
              <li key={review._id} className="collection-item avatar">
                <i className="material-icons circle blue">description</i>
                <span className="title">{review.movieTitle}</span>
              </li>
            );
          })}
          <li className="collection-item avatar">
            <img src="https://i.ytimg.com/vi/8QunirzLUnQ/maxresdefault.jpg" alt="" className="circle"/>
            <span className="">Transformers: The Last Knight</span>
            <p>First Line <br/>
               Second Line
            </p>
            <a href="#!" className="secondary-content">
              <i className="material-icons">grade</i>
            </a>
          </li>
          <Link className="collection-item avatar" to="/review/:id">
            <i className="material-icons circle">folder</i>
            <p className="left-align">First Line</p>
            <p className="left-align">Second Line</p>
            <p className="left-align">Third Line</p>
            <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
          </Link>
          <li className="collection-item avatar">
            <i className="material-icons circle green">insert_chart</i>
            <span className="title">Title</span>
            <p>First Line <br/>
               Second Line
            </p>
          </li>
        </ul>
      </div>
      <div id="test-swipe-2" className="col s12 red ProfileTab">Test 2</div>
      <div id="test-swipe-3" className="col s12 green ProfileTab">Test 3</div>
    </div>
  </div>
);

export default Profile;
