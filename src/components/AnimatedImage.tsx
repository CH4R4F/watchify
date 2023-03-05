import React from 'react';
import LottieView from 'lottie-react-native';
import {StyleSheet, Dimensions} from 'react-native';

const AnimatedImage = ({source}: {source: string}): JSX.Element => {
  return <LottieView style={styles.image} autoPlay loop source={source} />;
};

const styles = StyleSheet.create({
  image: {
    resizeMode: 'contain',
    height: '60%',
    // paddingTop: 100,
    width: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AnimatedImage;
