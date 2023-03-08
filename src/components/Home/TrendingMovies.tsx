/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, {useCallback} from 'react';
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
  const renderItem = useCallback(
    ({item}: {item: Movie}) => (
      <TrendingMovieCard
        id={item?.id}
        original_title={item?.original_title}
        release_date={item?.release_date}
        poster_path={item?.poster_path}
      />
    ),
    [],
  );

  const ITEM_WIDTH = 200;

  const keyExtractor = useCallback((item: Movie) => item.id.toString(), []);

  const getItemLayout = useCallback(
    (_: any, index: number) => ({
      length: ITEM_WIDTH,
      offset: ITEM_WIDTH * index,
      index,
    }),
    [],
  );

  return (
    <View className="my-7">
      <Text className="text-2xl text-primary_text font-heading-500 px-4">
        Trending Movies
      </Text>
      <FlatList
        maxToRenderPerBatch={3}
        data={movies}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={() => null}
        contentContainerStyle={{
          padding: 10,
          maxHeight: 200,
          alignItems: 'center',
        }}
        ListFooterComponent={() => <SeeAllButton />}
        getItemLayout={getItemLayout}
      />
    </View>
  );
};

export default TrendingMovies;
