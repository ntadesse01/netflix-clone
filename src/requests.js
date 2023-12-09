
const API_KEY = "9d1b683ef99e55f00965f0bd10db8903";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  FetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;




// // curl --request GET \
//      --url https://api.themoviedb.org/3/configuration \
//      --header 'Authorization: Bearer 9d1b683ef99e55f00965f0bd10db8903' \
//      --header 'accept: application/json'

// Here's an example API request:

// https://api.themoviedb.org/3/movie/550?api_key=9d1b683ef99e55f00965f0bd10db8903

// http:///pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg