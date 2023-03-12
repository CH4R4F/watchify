import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import {MovieCardProps, MovieGenre} from '../../@types';
import {genres} from '../../constants';
import {getPopularMovies} from '../../services/tmdb';
import CardsRow from '../CardsRow';
import {NavigationProps} from '../../@types';

type Props = {
  category: keyof MovieGenre;
  navigation: NavigationProps<'MainHome'>;
};

const Popular = ({category, navigation}: Props) => {
  const [movies, setMovies] = useState<MovieCardProps[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      const data = await getPopularMovies(genres[category], 1);
      setMovies(data.results);
      setLoading(false);
    };
    fetchMovies();
  }, [category]);

  return (
    <View>
      <Text className="px-4 pb-3 pt-10">
        <Text className="text-lg text-primary_text font-heading-500">Popular Movies</Text>
      </Text>
      <CardsRow type="popular" navigation={navigation} category={category} loading={loading} movies={movies} />
    </View>
  );
};

export default Popular;
