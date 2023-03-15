/* eslint-disable react-hooks/exhaustive-deps */
import {View, FlatList, ActivityIndicator} from 'react-native';
import React, {useState, useEffect, useCallback, useContext} from 'react';
import {MovieCardProps, NavigationProps} from '../@types';
import LinearGradient from 'react-native-linear-gradient';
import {colors, genres} from '../constants';
import DataContext from '../contexts/DataProvider';
import {getTrendingMovies, getPopularMovies, getUpcomingMovies, getTopRatedMovies} from '../services/tmdb';
import MovieCard from '../components/MovieCard';

type Props = {
  navigation: NavigationProps<'MoviesGrid'>;
  route: {
    params: {
      title: string;
      type: 'trending' | 'popular' | 'top_rated' | 'upcoming';
    };
  };
};

const MoviesGrid = ({navigation, route}: Props) => {
  const [movies, setMovies] = useState<MovieCardProps[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const {type} = route.params;
  const {selectedCategory} = useContext(DataContext);

  const ITEM_WIDTH = 100;
  const MAX_PAGE = 5;

  useEffect(() => {
    const fetchMovies = async () => {
      let data = [];
      setLoading(true);
      switch (type) {
        case 'trending':
          data = await getTrendingMovies(page);
          break;
        case 'popular':
          data = await getPopularMovies(genres[selectedCategory], page);
          break;
        case 'top_rated':
          data = await getTopRatedMovies(genres[selectedCategory], page);
          break;
        case 'upcoming':
          data = await getUpcomingMovies(genres[selectedCategory], page);
          break;
      }
      setMovies([...movies, ...data.results]);
      setLoading(false);
    };

    if (page <= MAX_PAGE) {
      fetchMovies();
    }
  }, [page]);

  const renderItem = useCallback(({item}: {item: MovieCardProps}) => {
    return (
      <View className="mb-4 ml-3 my-3">
        <MovieCard onPress={() => console.log('hello')} movie={item} />
      </View>
    );
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

  return (
    <LinearGradient colors={[colors.primary_bg, colors.secondary_bg, colors.primary_bg]} className="relative flex-1 ">
      <FlatList
        numColumns={2}
        initialNumToRender={10}
        // horizontal
        data={movies}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ListEmptyComponent={() => null}
        contentContainerStyle={{
          padding: 10,
          alignItems: 'center',
        }}
        getItemLayout={getItemLayout}
        onEndReached={() => setPage(page + 1)}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => (loading ? <ActivityIndicator /> : null)}
      />
    </LinearGradient>
  );
};

export default MoviesGrid;
