import axios, {AxiosInstance} from 'axios';
// @ts-ignore
import {TMDB_API_KEY} from '@env';

const tmdb: AxiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: `Bearer ${TMDB_API_KEY}`,
  },
});

// get configuration
export const getConfiguration = async () => {
  const {data} = await tmdb.get('/configuration');
  return data;
};

// get trending movies
export const getTrendingMovies = async (page: number = 1) => {
  const {data} = await tmdb.get('/trending/movie/week', {
    params: {
      page,
    },
  });
  return data;
};

// get top rated movies for a specific genre, if no genre detected get for all movies
export const getTopRatedMovies = async (genreId?: number | null, page: number = 1) => {
  if (genreId) {
    const {data} = await tmdb.get('/discover/movie', {
      params: {
        with_genres: genreId,
        sort_by: 'vote_average.desc',
        page,
      },
    });
    return data;
  }

  const {data} = await tmdb.get('/movie/top_rated', {
    params: {
      page,
    },
  });
  return data;
};

// get popular movies for a specific genre, if no genre detected get for all movies
export const getPopularMovies = async (genreId?: number | null, page: number = 1) => {
  if (genreId) {
    const {data} = await tmdb.get('/discover/movie', {
      params: {
        with_genres: genreId,
        sort_by: 'popularity.desc',
        page,
      },
    });
    return data;
  }

  const {data} = await tmdb.get('/movie/popular', {
    params: {
      page,
    },
  });
  return data;
};

// get upcoming movies for a specific genre, if no genre detected get for all movies
export const getUpcomingMovies = async (genreId?: number | null, page: number = 1) => {
  if (genreId) {
    const {data} = await tmdb.get('/discover/movie', {
      params: {
        with_genres: genreId,
        sort_by: 'release_date.desc',
        page,
      },
    });
    return data;
  }

  const {data} = await tmdb.get('/movie/upcoming', {
    params: {
      page,
    },
  });
  return data;
};
