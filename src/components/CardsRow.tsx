/* eslint-disable react-hooks/exhaustive-deps */
import {FlatList} from 'react-native';
import React, {useCallback} from 'react';
import {MovieCardProps, MovieGenre, NavigationProps} from '../@types';
import SeeAllButton from './SeeAllButton';
import MovieCard from './MovieCard';
import {genres} from '../constants';

type Props = {
  movies: MovieCardProps[];
  navigation: NavigationProps<'MainHome'>;
  category: keyof MovieGenre;
  type: 'trending' | 'popular' | 'top_rated' | 'upcoming';
};

const CardsRow = ({movies, navigation, category, type}: Props) => {
  const ITEM_WIDTH = 100;

  const renderItem = useCallback(({item}: {item: MovieCardProps}) => {
    return <MovieCard onPress={() => console.log('hello')} movie={item} />;
  }, []);

  const keyExtractor = useCallback((item: MovieCardProps) => item.id.toString(), []);

  const getItemLayout = useCallback(
    (_: any, index: number) => ({
      length: ITEM_WIDTH,
      offset: ITEM_WIDTH * index,
      index,
    }),
    [],
  );

  const ListFooterComponent = useCallback(() => <SeeAllButton handleClick={handleSeeAllCLick} />, []);

  const handleSeeAllCLick = () => {
    navigation.navigate('MoviesGrid', {
      genre: genres[category],
      type,
      title: `More ${type}`,
    });
  };

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
      ListFooterComponent={ListFooterComponent}
      getItemLayout={getItemLayout}
    />
  );
};

export default CardsRow;
