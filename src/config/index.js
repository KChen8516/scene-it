let DOMAIN = "";

if (process.env.NODE_ENV === "production") {
	DOMAIN = process.env.REACT_APP_PROD_API;
} else {
	DOMAIN = "http://localhost:5000";
}

export default DOMAIN;

// The Movie DB attributes
export const TMDB_API_SEARCH = "http://api.themoviedb.org/3/search/movie";
export const TMDB_API_KEY = "api_key=a3664094c49c0cbfc0da72cc645707d0";
export const TMDB_IMAGE_URL = "https://image.tmdb.org/t/p/original";

// Media Queries
export const MEDIA_QUERY = {
	DESKTOP: "992",
	TABLET: "768",
	PHONE: "576",
};
