import {Text, View} from 'react-native';
import React from 'react';
import {OnBoardingScreenData} from '../@types';

interface OnboardingSlidProps {
  item: OnBoardingScreenData;
}

const OnboardingSlid = ({item}: OnboardingSlidProps): JSX.Element => {
  return (
    <View className="items-center w-screen">
      {item.lottieImage}
      <Text className="text-primary_text text-2xl font-bold text-center uppercase px-2 ">
        {item.title}
      </Text>
      <Text className="text-secondary_text text-center mt-4 px-4">
        {item.description}
      </Text>
    </View>
  );
};

export default OnboardingSlid;
