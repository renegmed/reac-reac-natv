 
import React from 'react';
import {  createBottomTabNavigator, 
          createDrawerNavigator, 
          createAppContainer 
} from 'react-navigation';
import { Platform } from 'react-native';
import Home from './Home';
import News from './News';
import Settings from './Settings';

// Use Platform utility from react-native to decide which of these two functions to use.
const { createNavigator } = Platform.select({
  ios: { createNavigator: createBottomTabNavigator },
  android: { createNavigator: createDrawerNavigator }
});

const AppNavigator = createNavigator(
  {
    Home,
    News,
    Settings
  },
  { initialRouteName: 'Home' }
); 

const AppContainer = createAppContainer(AppNavigator);

export default () => {
  return (
    <AppContainer ref={ nav => {
        this.navigator = nav;
      }}
    />
  );
};