import {Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useState} from 'react';
import {MovieCardProps} from '../@types';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../constants';
import ContentLoader, {Rect} from 'react-content-loader/native';
import FastImage from 'react-native-fast-image';
import DataContext from '../contexts/DataProvider';
import AntDesign from 'react-native-vector-icons/AntDesign';

type Props = {
  movie: MovieCardProps;
};

const MovieCard = ({movie}: Props) => {
  const [loading, setLoading] = useState(true);

  const {base_url, sizes} = useContext(DataContext);

  const image = `${base_url}${sizes[3]}${movie.poster_path}`;

  return (
    <TouchableOpacity activeOpacity={0.8} className="relative w-[150px] h-48 rounded-2xl p-4 mr-5">
      <LinearGradient
        colors={[colors.primary_bg_soft, '#00000000']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 0.7}}
        className="absolute inset-0 rounded-2xl z-10"
      />

      <View className="absolute inset-0 rounded-2xl overflow-hidden">
        {loading && (
          <ContentLoader
            speed={1}
            width="100%"
            height="100%"
            backgroundColor={colors.primary_bg}
            foregroundColor={colors.secondary_bg_soft}>
            <Rect x="0" y="0" rx="8" ry="8" width="100%" height="100%" />
          </ContentLoader>
        )}
        <FastImage
          source={{uri: image}}
          style={{width: '100%', height: '100%'}}
          resizeMode={FastImage.resizeMode.cover}
          onLoad={() => setLoading(false)}
        />
      </View>
      {!loading && (
        <View className="z-50">
          <View className="items-center flex flex-row space-x-1">
            <AntDesign name="star" size={20} color={colors.primary} />
            <Text>{movie.vote_average}</Text>
          </View>
          <Text numberOfLines={2} className="text-sm text-white font-heading-500 mt-3">
            {movie.original_title}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default MovieCard;
