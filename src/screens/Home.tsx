import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import {getTrendingMovies} from '../services/tmdb';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../constants';
import TrendingMovies from '../components/Home/TrendingMovies';

const Home = (): JSX.Element => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(res => {
      setMovies(res.results);
    });
  }, []);

  return (
    <LinearGradient
      colors={[colors.primary_bg, colors.secondary_bg, colors.primary_bg]}
      className="flex-1 bg-gradient-to-t from-primary_bg via-secondary_bg to-primary_bg">
      <Header />
      <TrendingMovies movies={movies} />
    </LinearGradient>
  );
};

export default Home;
