import React, {useContext} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import DataContext from '../contexts/DataProvider';
import {colors} from '../constants';
import FastImage from 'react-native-fast-image';

type Props = {
  id: number | string;
  original_title: string;
  release_date: string;
  poster_path: string;
};

const TrendingMovieCard = ({
  id,
  original_title,
  release_date,
  poster_path,
}: Props) => {
  const {base_url, sizes} = useContext(DataContext);

  const image = `${base_url}${sizes[3]}${poster_path}`;
  const year = release_date?.split('-')[0];

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      id={`${id}`}
      className="relative w-[250px] h-48 rounded-2xl p-4 mr-5">
      <LinearGradient
        colors={[colors.primary_bg_soft, '#00000000']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 0.7}}
        className="absolute inset-0 rounded-2xl z-10"
      />
      <View className="absolute inset-0 rounded-2xl overflow-hidden">
        <FastImage
          source={{uri: image}}
          className="w-full h-full"
          resizeMode={FastImage.resizeMode.cover}
        />
      </View>
      <Text className="z-30 text-primary_text font-text-700 text-xl">
        {original_title}
      </Text>
      <Text className="z-30 text-primary_text font-text-400 mt-2">{year}</Text>
    </TouchableOpacity>
  );
};

export default TrendingMovieCard;
