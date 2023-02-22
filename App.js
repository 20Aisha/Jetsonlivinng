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
import Camerascreen from './src/Component/GridScreen/Camerascreen';
import VideoPlayer from './src/Component/VideoPlayer';
import Devicescreen from './src/Component/Devicescreen';
import AllCamerasScreen from './src/Component/AllCamerasScreen';
import Livingroom from './src/Component/Livingroom';
import Officescreen from './src/Component/Officescreen';
// import Camerascreen1 from './src/Component/GridScreen/Camerascreen1';
// import Camerascreen3 from './src/Component/Camerascreen3';

// https://oblador.github.io/react-native-vector-icons/

const App = ({navigation, route}) => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  // let language = route;
  // console.log(language, navigation, 'language');
  return (
    <NavigationContainer options={{headerShown: false}}>
      {/* <Camerascreen /> */}
      {/* <CalenderScreen /> */}
      {/* <VideoPlayer /> */}
      <AuthNavigator />

      {/* <VerticalScreen6/> */}
      {/* <VertcalScreen1/> */}
      {/* <VerticalScreen2/> */}
      {/* <VerticalScreen3/> */}
      {/* <VerticalScreen4/> */}
      {/* <VerticalScreen5/> */}
      {/* <VerticalScreen6/> */}
      {/* <VerticalScreen7/> */}
      {/* <VerticalScreen8/> */}

      {/* <VideoScreen /> */}
      {/* <Livingroom /> */}
      {/* <Devicescreen /> */}
      {/* <Domi /> */}
      {/* <AllCamerasScreen /> */}
    </NavigationContainer>
  );
};

export default App;
