import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Signup from './Component/Signup';
import Homescreen from './Component/Homescreen';
import Devicescreen from './Component/Devicescreen';
import Gridscreen from './Component/Gridscreen';
import Camerascreen from './Component/Camerascreen';
import Camerascreen1 from './Component/Camerascreen1';
import Camerasceen2 from './Component/Camerasceen2';
import Camerascreen3 from './Component/Camerascreen3';
import Livingroom from './Component/Livingroom';
import Recording from './Component/Recording';
import Notification from './Component/Notification';
import SettingScreen from './Component/Setting';
import Statusscreen from './Component/Statusscreen';
import CalenderScreen from './Component/Calendar';
import VideoScreen from './Component/Video';
import StartScreen from './Component/StartScreen';
import Footer from './Component/Footer';
import VideoPlayer from './Component/VideoPlayer';
import AllCamerasScreen from './Component/AllCamerasScreen';

// import Navbar from "../Navbar";
// import Footer from "../Footer";

const Stack = createNativeStackNavigator();

const AuthNavigator = (raza) => (

  
  <Stack.Navigator>
    <Stack.Screen
      name="StartScreen"
      options={{headerShown: false}}
      component={StartScreen}
    />
    <Stack.Screen
      name="signup"
      options={{headerShown: false}}
      component={Signup}
    />
    <Stack.Screen
      name="Footer"
      options={{headerShown: false}}
      component={Footer}
    />
    <Stack.Screen
      name="Devicescreen"
      options={{headerShown: false}}
      component={AllCamerasScreen}
    />
    {/* <Stack.Screen
      name="Devicescreen"
      options={{headerShown: false}}
      component={Devicescreen}
    /> */}
    <Stack.Screen
      name="Gridscreen"
      options={{headerShown: false}}
      component={Gridscreen}
    />
    <Stack.Screen
      name="Camerascreen"
      options={{
        headerShown: false,
      }}
      component={Camerascreen}
    />
    <Stack.Screen
      name="Camerasceen2"
      options={{
        headerShown: false,
      }}
      component={Camerasceen2}
    />
    <Stack.Screen
      name="Camerascreen3"
      options={{
        headerShown: false,
      }}
      component={Camerascreen3}
    />
    <Stack.Screen
      name="Camerascreen1"
      options={{
        headerShown: false,
      }}
      component={Camerascreen1}
    />
    <Stack.Screen
      name="Livingroom"
      options={{
        headerShown: false,
      }}
      component={Livingroom}
    />
    <Stack.Screen
      name="Recording"
      options={{
        headerShown: false,
      }}
      component={Recording}
    />
    <Stack.Screen
      name="VideoPlayer"
      options={{
        headerShown: false,
      }}
      component={VideoPlayer}
    />
    <Stack.Screen
      name="Notification"
      options={{
        headerShown: false,
      }}
      component={Notification}
    />
    <Stack.Screen
      name="SettingScreen"
      options={{
        headerShown: false,
      }}
      component={SettingScreen}
    />
    <Stack.Screen
      name="VideoScreen"
      options={{
        headerShown: false,
      }}
      component={VideoScreen}
    />
    <Stack.Screen
      name="CalenderScreen"
      options={
        {
          // headerShown: false,
        }
      }
      component={CalenderScreen}
    />
    
    <Stack.Screen
      name="Statusscreen"
      options={{
        headerShown: false,
      }}
      component={Statusscreen}
    />
    <Stack.Screen
      name="Home"
      options={{
        headerShown: false,
      }}
      component={Homescreen}
    />
    
    {/* 

   
    <Stack.Screen
      name="Statusscreen"
      options={{
        headerShown: false,
      }}
      component={Statusscreen}
    />
    <Stack.Screen
      name="Devicescreen"
      options={{
        headerShown: false,
      }}
      component={Devicescreen}
    />
   
   */}
  </Stack.Navigator>
);

export default AuthNavigator;
