import React, {useEffect, useState, useMemo} from 'react';
import Header from '../components/Header';
import {getTrendingMovies} from '../services/tmdb';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../constants';
import TrendingMovies from '../components/Home/TrendingMovies';
import Categories from '../components/Home/Categories';
import {MovieGenre} from '../@types';
import {ScrollView, View} from 'react-native';
import TopRated from '../components/Home/TopRated';
import Popular from '../components/Home/Popular';

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
    <View>
      <Header />

      <ScrollView
        showsVerticalScrollIndicator={false}
        className=""
        contentContainerStyle={{paddingBottom: 50, minHeight: '100%'}}>
        <LinearGradient
          colors={[colors.primary_bg, colors.secondary_bg, colors.primary_bg]}
          className="relative flex-1 bg-gradient-to-t from-primary_bg via-secondary_bg to-primary_bg pb-36">
          {TrendingMoviesMemoComponent}

          <Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

          <Popular category={selectedCategory} />

          <TopRated category={selectedCategory} />
        </LinearGradient>
      </ScrollView>
    </View>
  );
};

export default Home;
