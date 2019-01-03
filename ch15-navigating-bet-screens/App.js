 
import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './Home';
import Details from './Details';

const AppNavigator = createStackNavigator(
  {
    Home,
    Details
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