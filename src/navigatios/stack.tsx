import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OnBoarding from '../screens/OnBoarding';
import MainNavigation from './main';
import MoviesGrid from '../screens/MoviesGrid';
import {RootStackParamList} from '../@types';
import {colors} from '../constants';

const Stack = createStackNavigator<RootStackParamList>();

export default function RootNavigation({firstLaunched}: {firstLaunched: boolean}): JSX.Element {
  return (
    <Stack.Navigator
      initialRouteName="OnBoarding"
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: 'transparent'},
      }}>
      {firstLaunched && <Stack.Screen name="OnBoarding" component={OnBoarding} />}

      <Stack.Screen name="MainHome" component={MainNavigation} />
      <Stack.Screen
        name="MoviesGrid"
        component={MoviesGrid}
        options={({route}) => ({
          title: route.params.title,
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.primary_bg,
          },
          headerTintColor: colors.primary_text,
        })}
      />
    </Stack.Navigator>
  );
}
