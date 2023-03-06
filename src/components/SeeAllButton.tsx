import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors} from '../constants/';

const SeeAllButton = (): JSX.Element => {
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <View className="w-20 h-20 border-[3px] border-white rounded-full items-center justify-center bg-primary_bg/30">
        <AntDesign name="arrowright" size={22} color={'#fff'} />
      </View>
    </TouchableOpacity>
  );
};

export default SeeAllButton;
