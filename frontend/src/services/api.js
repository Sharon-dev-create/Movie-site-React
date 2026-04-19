const API_KEY = "a701e551e6b766ab1a48ef864cd3766b";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${
    encodeURIComponent(query)
  }`);
  const data = await response.json();
  return data.results;
};
