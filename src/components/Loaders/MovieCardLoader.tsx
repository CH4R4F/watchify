import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../constants';
import ContentLoader, {Rect} from 'react-content-loader/native';

const MovieCardLoader = () => {
  return (
    <TouchableOpacity activeOpacity={0.8} className="relative w-[150px] h-48 rounded-2xl p-4 mr-5">
      <LinearGradient
        colors={[colors.primary_bg_soft, '#00000000']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 0.7}}
        className="absolute inset-0 rounded-2xl z-10"
      />

      <View className="absolute inset-0 rounded-2xl overflow-hidden">
        <ContentLoader
          speed={1}
          width="100%"
          height="100%"
          backgroundColor={colors.primary_bg}
          foregroundColor={colors.secondary_bg_soft}>
          <Rect x="0" y="0" rx="8" ry="8" width="100%" height="100%" />
        </ContentLoader>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCardLoader;
