import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMGFiZTkzZGIwMWRhM2M4ZWYyM2U1MjU0N2FhOGMwMCIsInN1YiI6IjY1MTFjMWY1YTkxMTdmMDBlMTkzNDJmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PU637-J17qYbNpYlKUeYDyZyjif4gDf6EjdD1OZywDI';

export const getMovies = async (path, controller) => {
  const response = await axios.get(path, {
    signal: controller.signal,
  });
  return response.data;
};
