import React, {useEffect, useState, useMemo} from 'react';
import Header from '../components/Header';
import {getTrendingMovies} from '../services/tmdb';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../constants';
import TrendingMovies from '../components/Home/TrendingMovies';
import Categories from '../components/Home/Categories';
import {MovieGenre} from '../@types';
import {ScrollView} from 'react-native';

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
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="min-h-screen"
      contentContainerStyle={{paddingBottom: 50, minHeight: '100%'}}>
      <LinearGradient
        colors={[colors.primary_bg, colors.secondary_bg, colors.primary_bg]}
        className="flex-1 bg-gradient-to-t from-primary_bg via-secondary_bg to-primary_bg">
        <Header />
        {TrendingMoviesMemoComponent}

        <Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </LinearGradient>
    </ScrollView>
  );
};

export default Home;
