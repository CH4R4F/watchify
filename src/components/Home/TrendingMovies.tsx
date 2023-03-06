/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, Text, View} from 'react-native';
import SeeAllButton from '../SeeAllButton';
import TrendingMovieCard from '../TrendingMovieCard';

interface Movie {
  id: number | string;
  original_title: string;
  release_date: string;
  poster_path: string;
}

interface TrendingMoviesProps {
  movies: Movie[];
}

const TrendingMovies = ({movies}: TrendingMoviesProps): JSX.Element => {
  return (
    <View className="my-7">
      <Text className="text-2xl text-primary_text font-heading-500 px-4">
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
        contentContainerStyle={{
          padding: 10,
          maxHeight: 200,
          alignItems: 'center',
        }}
        ListFooterComponent={() => <SeeAllButton />}
      />
    </View>
  );
};

export default TrendingMovies;
