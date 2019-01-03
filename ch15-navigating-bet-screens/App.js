 
import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './Home';
import Settings from './Settings';

const AppNavigator = createStackNavigator(
  {
    Home,
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