import React, {useEffect, useState, useMemo} from 'react';
import Header from '../components/Header';
import {getTrendingMovies} from '../services/tmdb';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../constants';
import TrendingMovies from '../components/Home/TrendingMovies';
import Categories from '../components/Home/Categories';
import {MovieGenre} from '../@types';

const Home = (): JSX.Element => {
  const [movies, setMovies] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState<keyof MovieGenre>('all');

  useEffect(() => {
    getTrendingMovies().then(res => {
      setMovies(res.results);
    });
  }, []);

  const TrendingMoviesMemoComponent = useMemo(() => {
    return <TrendingMovies movies={movies} />;
  }, [movies]);

  return (
    <LinearGradient
      colors={[colors.primary_bg, colors.secondary_bg, colors.primary_bg]}
      className="flex-1 bg-gradient-to-t from-primary_bg via-secondary_bg to-primary_bg">
      <Header />
      {TrendingMoviesMemoComponent}
      <Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
    </LinearGradient>
  );
};

export default Home;
