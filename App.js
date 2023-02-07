import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './src/AuthNavigator';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text} from 'react-native';

import CalenderScreen from './src/Component/Calendar';
import Footer from './src/Component/Footer';
import Statusscreen from './src/Component/Statusscreen';
import VideoScreen from './src/Component/Video';
import Setting from './src/Component/Setting';
import Domi from './src/Component/domi';
import Camerascreen from './src/Component/Camerascreen';
// https://oblador.github.io/react-native-vector-icons/

const App = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  return (

    <NavigationContainer options={{headerShown: false}}>
      {/* <Camerascreen /> */}
      {/* <CalenderScreen /> */}
      {/* <VideoScreen /> */}
      {/* <Domi /> */}
      <AuthNavigator />
    </NavigationContainer>

   
  );
};

export default App;
