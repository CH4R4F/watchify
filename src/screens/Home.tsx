/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState, useMemo, useContext} from 'react';
import Header from '../components/Header';
import {getTrendingMovies} from '../services/tmdb';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../constants';
import TrendingMovies from '../components/Home/TrendingMovies';
import Categories from '../components/Home/Categories';
import {ScrollView, View} from 'react-native';
import {NavigationProps} from '../@types';
import Explorer from '../components/Home/Explorer';
import DataContext from '../contexts/DataProvider';

type Props = {
  navigation: NavigationProps<'MainHome'>;
};

const Home = ({navigation}: Props): JSX.Element => {
  const [movies, setMovies] = useState([]);
  const {selectedCategory} = useContext(DataContext);

  useEffect(() => {
    getTrendingMovies().then(res => {
      setMovies(res.results);
    });
  }, []);

  const TrendingMoviesMemoComponent = useMemo(() => {
    return <TrendingMovies movies={movies} navigation={navigation} />;
  }, [movies]);

  const CategoriesMemoComponent = useMemo(() => {
    return <Categories />;
  }, []);

  return (
    <View>
      <Header />

      <ScrollView showsVerticalScrollIndicator={false} className="" contentContainerStyle={{minHeight: '100%'}}>
        <LinearGradient
          colors={[colors.primary_bg, colors.secondary_bg, colors.primary_bg]}
          className="relative flex-1 bg-gradient-to-t from-primary_bg via-secondary_bg to-primary_bg pb-36">
          {TrendingMoviesMemoComponent}

          {CategoriesMemoComponent}

          <Explorer selectedCategory={selectedCategory} navigation={navigation} />
        </LinearGradient>
      </ScrollView>
    </View>
  );
};

export default Home;
