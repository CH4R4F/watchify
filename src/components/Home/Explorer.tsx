import React from 'react';
import Popular from './Popular';
import TopRated from './TopRated';
import UpComing from './UpComing';
import {MovieGenre, NavigationProps} from '../../@types';

type Props = {
  navigation: NavigationProps<'MainHome'>;
  selectedCategory: keyof MovieGenre;
};

const Explorer = ({navigation, selectedCategory}: Props) => {
  return (
    <>
      <Popular navigation={navigation} category={selectedCategory} />

      <TopRated navigation={navigation} category={selectedCategory} />

      <UpComing navigation={navigation} category={selectedCategory} />
    </>
  );
};

export default Explorer;
