import axios, {AxiosInstance} from 'axios';
// @ts-ignore
import {TMDB_API_KEY} from '@env';

const tmdb: AxiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: `Bearer ${TMDB_API_KEY}`,
  },
});

// get popular movies
export const getPopularMovies = async () => {
  const {data} = await tmdb.get('/movie/popular');
  return data;
};
