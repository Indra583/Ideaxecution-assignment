// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './src/utils/store';

import LoginScreen from './src/screens/LoginScreen';
import GamePlayScreen from './src/screens/GamePlayScreen';
import LostScreen from './src/screens/LostScreen';
import HistoryScreen from './src/screens/HistoryScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="GamePlay" component={GamePlayScreen} />
          <Stack.Screen name="Lost" component={LostScreen} />
          <Stack.Screen name="History" component={HistoryScreen} />
        </Stack.Navigator>
      </NavigationContainer>
   </Provider>
  );
};

export default App;
