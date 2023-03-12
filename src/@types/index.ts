import React from 'react';

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
