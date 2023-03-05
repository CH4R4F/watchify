import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import OnBoarding from '../screens/OnBoarding';

const Stack = createStackNavigator();

export default function RootNavigation({
  firstLaunched,
}: {
  firstLaunched: boolean;
}): JSX.Element {
  return (
    <Stack.Navigator
      initialRouteName="OnBoarding"
      screenOptions={{
        headerShown: false,
      }}>
      {firstLaunched && (
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
      )}

      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
