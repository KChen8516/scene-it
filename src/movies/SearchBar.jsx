import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSearchMovieResults } from '../reducers';
import { searchMovies } from '../actions/movieActions';
import { MDCTextField } from '@material/textfield/dist/mdc.textfield.min';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSearching: false,
      currentSelection: null
    };

    this.searchDelay = null;

    this.searchQuery = this.searchQuery.bind(this);
    this.fetchMovie = this.fetchMovie.bind(this);
    this.clearSelection = this.clearSelection.bind(this);
  }

  componentDidMount() {
    this.searchField = new MDCTextField(document.querySelector('.mdc-text-field'));
  }

  searchQuery(e) {
    let searchTerm = e.target.value;
    // Set search state
    this.setState({ isSearching: true });
    // Return if the query is blank
    if (searchTerm.trim().length === 0) {
      // Clear results
      this.setState({ isSearching: false });
      return;
    }
    // Clear the current timer
    if (this.searchDelay) clearTimeout(this.searchDelay);
    // Throttle search attempts
    this.searchDelay = setTimeout(() => {
      // Search for movie titles that match
      this.props.searchMovies(searchTerm);
    }, 300);
  }

  fetchMovie(movie) {
    // Reset search bar value
    this.searchInput.value = '';
    // Set current movie title
    this.setState({ currentSelection: `${movie.title} (${movie.release_date.substr(0, 4)})` });
    // Pass the movie object to any parent components
    this.props.selectMovie(movie);
    this.setState({ isSearching: false });
  }

  clearSelection() {
    this.setState({ currentSelection: null });
    setTimeout(() => {
      this.searchField = new MDCTextField(document.querySelector('.mdc-text-field'));
      this.searchField.input_.focus();
    }, 10);
  }

  render() {
    return (
      <div className="mdc-layout-grid">
        <div className="mdc-layout-grid__inner">
          {/* Search Bar */}
          {this.state.currentSelection ? (
            <div
              className="mdc-layout-grid__cell"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center'
              }}
            >
              <span className="mdc-typography--headline5">
                {this.state.currentSelection}
              </span>
              <i className="material-icons ClearIcon" onClick={this.clearSelection}>
                clear
              </i>
            </div>
          ) : (
            <div className="mdc-layout-grid__cell">
              <div
                className="mdc-text-field mdc-text-field--outlined"
                style={{ width: '100%' }}
              >
                <input
                  type="text"
                  id="search-outlined"
                  className="mdc-text-field__input"
                  onChange={this.searchQuery}
                  ref={value => (this.searchInput = value)}
                />
                <label htmlFor="search-outlined" className="mdc-floating-label">
                  Search
                </label>
                <div className="mdc-notched-outline">
                  <svg>
                    <path className="mdc-notched-outline__path" />
                  </svg>
                </div>
                <div className="mdc-notched-outline__idle" />
              </div>
            </div>
          )}
          {/* Search Results */}
          {this.state.isSearching &&
            this.props.results.length > 0 && (
              <div className="mdc-layout-grid__cell" style={{ marginTop: -20 }}>
                <ul
                  className="mdc-list mdc-list--dense mdc-elevation--z2"
                  style={{ maxHeight: 200, overflowY: 'auto' }}
                >
                  {this.props.results.map(item => (
                    <li
                      className="mdc-list-item"
                      key={item.id}
                      onClick={() => {
                        this.fetchMovie(item);
                      }}
                    >
                      {item.title} {`(${item.release_date.substr(0, 4)})`}
                    </li>
                  ))}
                </ul>
              </div>
            )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  results: getSearchMovieResults(state)
});

const mapDispatchToProps = dispatch => ({
  searchMovies(query) {
    dispatch(searchMovies(query));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
