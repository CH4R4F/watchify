import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import Header from '../components/Header';

const Home = (): JSX.Element => {
  return (
    <View className="flex-1 bg-primary_bg">
      <Header />
    </View>
  );
};

export default Home;
