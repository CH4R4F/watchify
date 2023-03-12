import {FlatList} from 'react-native';
import React, {useCallback} from 'react';
import {MovieCardProps} from '../@types';
import SeeAllButton from './SeeAllButton';
import MovieCard from './MovieCard';
import MovieCardLoader from './Loaders/MovieCardLoader';

type Props = {
  movies: MovieCardProps[];
  loading: boolean;
};

const CardsRow = ({movies, loading}: Props) => {
  const ITEM_WIDTH = 100;

  const renderItem = useCallback(
    ({item}: {item: MovieCardProps}) => {
      if (loading) {
        return <MovieCardLoader />;
      }
      return <MovieCard movie={item} />;
    },
    [loading],
  );

  const keyExtractor = useCallback((item: MovieCardProps) => item.id.toString(), []);

  const getItemLayout = useCallback(
    (_: any, index: number) => ({
      length: ITEM_WIDTH,
      offset: ITEM_WIDTH * index,
      index,
    }),
    [],
  );

  return (
    <FlatList
      initialNumToRender={2}
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
  );
};

export default CardsRow;
