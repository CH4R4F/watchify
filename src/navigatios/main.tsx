/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Home, Search, Favorite, Settings} from '../screens';
import {colors} from '../constants';

const Tab = createBottomTabNavigator();

const Main = (): JSX.Element => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size}) => {
          let iconName: string = '';
          let colorName: string;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Search') {
            iconName = 'search1';
          } else if (route.name === 'Favorite') {
            iconName = 'hearto';
          } else if (route.name === 'Settings') {
            iconName = 'setting';
          }

          colorName = focused ? colors.primary : colors.secondary_text;

          return <AntDesign name={iconName} size={size} color={colorName} />;
        },
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.secondary_bg,
          height: 60,
          // borderTopLeftRadius: 20,
          // borderTopRightRadius: 20,
          borderTopColor: 'none',
          margin: 0,
        },
      })}
      initialRouteName="Home">
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Favorite" component={Favorite} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default Main;
