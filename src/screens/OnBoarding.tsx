import React, {useState, useRef} from 'react';
import {View, FlatList, Dimensions, TouchableOpacity, Text} from 'react-native';
import {OnBoardingScreenData} from '../@types';
import OnboardingSlid from '../components/OnboardingSlid';
import AnimatedImage from '../components/AnimatedImage';
import {StackNavigationProp} from '@react-navigation/stack';

const {height, width} = Dimensions.get('window');
const onBoardingContent: OnBoardingScreenData[] = [
  {
    id: 1,
    title: 'Explore Thousands of Movies and TV Shows',
    description: 'Get ratings, reviews, and more for free with TMDB API',
    lottieImage: (
      <AnimatedImage
        source={require('../assets/lottie/onboarding_action.json')}
      />
    ),
  },
  {
    id: 2,
    title: 'Find Your Next Binge-Watch Obsession',
    description:
      'Detailed information on your favorite movies and TV shows, all in one app',
    lottieImage: (
      <AnimatedImage
        source={require('../assets/lottie/onboarding_watch.json')}
      />
    ),
  },
  {
    id: 3,
    title: 'Make Informed Decisions on What to Watch',
    description:
      'Access the latest ratings, reviews, and data on all your favorite titles, for free',
    lottieImage: (
      <AnimatedImage
        source={require('../assets/lottie/onboarding_rating.json')}
      />
    ),
  },
];

const OnBoarding = ({
  navigation,
}: {
  navigation: StackNavigationProp<any>;
}): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  // fires when the user scrolls on the flatlist
  const updateCurrentSlide = (event: {
    nativeEvent: {contentOffset: {x: number}};
  }) => {
    const {x} = event.nativeEvent.contentOffset;
    const slide = Math.round(x / width);
    setCurrentSlide(slide);
  };

  // fires when the user clicks on the next button
  const nextSlide = (): void => {
    const nextCurrentSlid = currentSlide + 1;
    if (nextCurrentSlid >= onBoardingContent.length) {
      return;
    }
    const offset = nextCurrentSlid * width;
    flatListRef.current?.scrollToOffset({offset, animated: true});
    setCurrentSlide(nextCurrentSlid);
  };

  // fires when the user clicks on the skip button
  const skipSlide = (): void => {
    const nextCurrentSlid = onBoardingContent.length - 1;
    const offset = nextCurrentSlid * width;
    flatListRef.current?.scrollToOffset({offset, animated: true});
    setCurrentSlide(nextCurrentSlid);
  };

  // fires after clicking on Get started button
  const getStarted = (): void => {
    navigation.replace('MainHome');
  };

  return (
    <View className="flex-1 bg-primary_bg">
      <View className="h-[80%] pt-16">
        <FlatList
          ref={flatListRef}
          data={onBoardingContent}
          showsHorizontalScrollIndicator={false}
          horizontal
          pagingEnabled
          onMomentumScrollEnd={updateCurrentSlide}
          contentContainerStyle={{
            height: height * 0.85,
          }}
          renderItem={({item}) => <OnboardingSlid item={item} />}
        />
      </View>
      <Footer
        currentSlide={currentSlide}
        next={nextSlide}
        skip={skipSlide}
        home={getStarted}
      />
    </View>
  );
};

const Footer = ({
  currentSlide,
  next,
  skip,
  home,
}: {
  currentSlide: number;
  next: () => void;
  skip: () => void;
  home: () => void;
}): JSX.Element => {
  return (
    <View className="space-y-12">
      <View className="flex-row justify-center space-x-3 ">
        {onBoardingContent.map((_, index) => {
          if (index === currentSlide) {
            return (
              <View
                key={index}
                className="w-7 h-[3px] rounded-full bg-primary"
              />
            );
          }
          return (
            <View
              key={index}
              className="w-2 h-[3px] rounded-full bg-secondary_text"
            />
          );
        })}
      </View>
      <View className="flex-row justify-center space-x-3 px-6">
        {currentSlide !== onBoardingContent.length - 1 ? (
          <>
            <TouchableOpacity
              onPress={skip}
              className="flex-1 h-12 rounded-md bg-transparent border-primary border-2 justify-center items-center">
              <Text className="text-primary font-normal">Skip</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={next}
              className="flex-1 h-12 rounded-md bg-primary justify-center items-center">
              <Text className="text-primary_text font-normal">Next</Text>
            </TouchableOpacity>
          </>
        ) : (
          <TouchableOpacity
            onPress={home}
            className="flex-1 h-12 rounded-md bg-primary justify-center items-center">
            <Text className="text-primary_text font-normal">Get Started</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default OnBoarding;
