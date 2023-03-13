import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import {MovieCardProps, MovieGenre, NavigationProps} from '../../@types';
import {genres} from '../../constants';
import {getUpcomingMovies} from '../../services/tmdb';
import CardsRow from '../CardsRow';

type Props = {
  category: keyof MovieGenre;
  navigation: NavigationProps<'MainHome'>;
};

const UpComing = ({category, navigation}: Props) => {
  const [movies, setMovies] = useState<MovieCardProps[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getUpcomingMovies(genres[category], 1);
      setMovies(data.results);
    };
    fetchMovies();
  }, [category]);

  return (
    <View>
      <Text className="px-4 pt-10 pb-3">
        <Text className="text-lg text-primary_text font-heading-500">Upcoming Movies</Text>
      </Text>
      {/* {loading && <Text>Loading...</Text>} */}
      <CardsRow category={category} navigation={navigation} type="upcoming" movies={movies} />
    </View>
  );
};

export default UpComing;
