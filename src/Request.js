const API_KEY = "b209c53010567b4576ccec49f2de878a";
const url= 'https://api.themoviedb.org/3'

export const requests={
    fetchTrending: `${url}/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `${url}/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `${url}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `${url}/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `${url}/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `${url}/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `${url}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `${url}/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

// https://api.themoviedb.org/3/discover/movie?api_key=b209c53010567b4576ccec49f2de878a&with_genres=35