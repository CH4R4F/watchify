import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './src/navigatios/stack';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'transparent'} />
      <RootNavigation />
    </NavigationContainer>
  );
}

export default App;
