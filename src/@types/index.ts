import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';

export type OnBoardingScreenData = {
  id: number;
  title: string;
  description: string;
  lottieImage: React.ReactNode;
};

export type MovieGenre = {
  all: null;
  action: number;
  adventure: number;
  comedy: number;
  crime: number;
  documentary: number;
  drama: number;
  fantasy: number;
  history: number;
  horror: number;
  romance: number;
};

export type MovieCardProps = {
  id: number;
  original_title: string;
  poster_path?: string;
  vote_average: number;
};

// a type for the stack navigation props
export type RootStackParamList = {
  OnBoarding: undefined;
  MainHome: undefined;
  MoviesGrid: {
    title: string;
    genre: number | null;
    type: 'trending' | 'popular' | 'top_rated' | 'upcoming';
  };
};

export type NavigationProps<T extends keyof RootStackParamList> = StackNavigationProp<RootStackParamList, T>;
