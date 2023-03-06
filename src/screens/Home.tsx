/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {FlatList, Text} from 'react-native';
import Header from '../components/Header';
import {getTrendingMovies} from '../services/tmdb';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../constants';
import TrendingMovieCard from '../components/TrendingMovieCard';

interface Movie {
  id: number | string;
  original_title: string;
  release_date: string;
  poster_path: string;
}

const Home = (): JSX.Element => {
  const [movies, setMovies] = useState<Array<Movie>>([]);

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
      <Text className="text-2xl text-primary_text font-heading-500 px-4 mt-7">
        Trending Movies
      </Text>
      <FlatList
        data={movies}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TrendingMovieCard
            id={item?.id}
            original_title={item?.original_title}
            release_date={item?.release_date}
            poster_path={item?.poster_path}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={() => null}
        contentContainerStyle={{padding: 10}}
      />
    </LinearGradient>
  );
};

export default Home;
