import React from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import { TMDB_IMAGE_URL, MEDIA_QUERY } from "../config";

const StyledDiv = styled.div`
	padding: 0 20px 20px 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const StyledImg = styled.img.attrs(() => ({
	// set default attributes
	alt: "movie backdrop",
}))`
	width: 100%;
	@media (min-width: ${MEDIA_QUERY.DESKTOP}px) {
		width: 50%;
	}
`;

/**
|--------------------------------------------------
| React Hooks! Weeeeeeeeeeeee
|--------------------------------------------------
*/
export default function Movie() {
	const [ movie, setMovie ] = React.useState(null);

	function updateMovie(movie) {
		setMovie(movie);
	}

	return (
		<React.Fragment>
			<SearchBar selectMovie={updateMovie} />
			<StyledDiv>
				{movie ? (
					<React.Fragment>
						<StyledImg src={`${TMDB_IMAGE_URL}${movie.backdrop_path}`} />
						<p>Description: {movie.overview}</p>
						<p>Release Date: {movie.release_date}</p>
					</React.Fragment>
				) : (
					<h2 className="mdc-typography--headline4">Search for a movie!</h2>
				)}
			</StyledDiv>
		</React.Fragment>
	);
}
