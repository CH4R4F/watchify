import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import {MovieCardProps, MovieGenre, NavigationProps} from '../../@types';
import {genres} from '../../constants';
import {getTopRatedMovies} from '../../services/tmdb';
import CardsRow from '../CardsRow';

type Props = {
  category: keyof MovieGenre;
  navigation: NavigationProps<'MainHome'>;
};

const TopRated = ({category, navigation}: Props) => {
  const [movies, setMovies] = useState<MovieCardProps[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      const data = await getTopRatedMovies(genres[category], 1);
      setMovies(data.results);
      setLoading(false);
    };
    fetchMovies();
  }, [category]);

  return (
    <View>
      <Text className="px-4 pt-10 pb-3">
        <Text className="text-lg text-primary_text font-heading-500">Top Rated </Text>
      </Text>
      {/* {loading && <Text>Loading...</Text>} */}
      <CardsRow category={category} navigation={navigation} type="top_rated" loading={loading} movies={movies} />
    </View>
  );
};

export default TopRated;
