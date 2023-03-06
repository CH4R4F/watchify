import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './src/navigatios/stack';
import {colors} from './src/constants/';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen';
import {InternetConnectivityProvider} from './src/contexts/InternetConnectivity';
import {DataProvider} from './src/contexts/DataProvider';

function App(): JSX.Element {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = useState<boolean | null>(
    null,
  );

  // check if the app is launched for the first time
  useEffect((): void => {
    const checkIfAppIsFirstLaunched = async (): Promise<void> => {
      const appData = await AsyncStorage.getItem('launched');

      if (appData === null) {
        setIsAppFirstLaunched(true);
        AsyncStorage.setItem('launched', 'false');
      } else {
        setIsAppFirstLaunched(false);
      }
    };
    checkIfAppIsFirstLaunched();
    SplashScreen.hide();
  }, []);

  if (isAppFirstLaunched == null) {
    return <></>;
  }

  return (
    <InternetConnectivityProvider>
      <DataProvider>
        <NavigationContainer>
          <StatusBar backgroundColor={colors.primary_bg} />
          <RootNavigation firstLaunched={isAppFirstLaunched} />
        </NavigationContainer>
      </DataProvider>
    </InternetConnectivityProvider>
  );
}

export default App;
