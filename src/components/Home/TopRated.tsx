import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import {MovieCardProps, MovieGenre} from '../../@types';
import {genres} from '../../constants';
import {getTopRatedMovies} from '../../services/tmdb';
import CardsRow from '../CardsRow';

type Props = {
  category: keyof MovieGenre;
};

const TopRated = ({category}: Props) => {
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
      <Text className="px-4 py-4">
        <Text className="text-lg text-primary_text font-heading-500">Top Rated </Text>
      </Text>
      {/* {loading && <Text>Loading...</Text>} */}
      <CardsRow loading={loading} movies={movies} />
    </View>
  );
};

export default TopRated;
