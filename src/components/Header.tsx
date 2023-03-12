import {View, ImageBackground, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

const Header = () => {
  return (
    <View className="bg-primary_bg w-full flex-row items-center justify-between px-4 pt-3">
      <TouchableWithoutFeedback>
        <Feather name="menu" size={26} color="#fff" />
      </TouchableWithoutFeedback>
      <View className="flex-1">
        <ImageBackground
          source={require('../assets/images/header.png')}
          className="w-full h-16"
          imageStyle={{resizeMode: 'contain'}}
        />
      </View>
      <TouchableWithoutFeedback>
        <Feather name="coffee" size={26} color="#fff" />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Header;
