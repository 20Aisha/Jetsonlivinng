import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signup from './Component/Signup';
import Homescreen from './Component/Homescreen';
import Devicescreen from './Component/Devicescreen';
import Gridscreen from './Component/Gridscreen';

import Camerascreen from './Component/GridScreen/Camerascreen';
import Camerascreen1 from './Component/GridScreen/Camerascreen1';
import Camerasceen2 from './Component/GridScreen/Camerasceen2';
import Camerascreen3 from './Component/GridScreen/Camerascreen3';
import Camerascreen4 from './Component/GridScreen/Camerascreen4';
import Camerascreen5 from './Component/GridScreen/Camerascreen5';
import Camerascreen6 from './Component/GridScreen/Camerascreen6';
import Camerascreen7 from './Component/GridScreen/Camerascreen7';
import Camerascreen8 from './Component/GridScreen/Camerascreen8';
import Camerascreenv1 from './Component/GridScreen/Camerascreenv1';

import VertcalScreen1 from './Component/VierticalScreen/VerticalScreen1';
import VerticalScreen2 from './Component/VierticalScreen/VertcalScreen2';
import VerticalScreen3 from './Component/VierticalScreen/VericalScreen3';
import VerticalScreen4 from './Component/VierticalScreen/VerticalScreen4';
import VerticalScreen5 from './Component/VierticalScreen/VerticalScreen5';
import VerticalScreen6 from './Component/VierticalScreen/VerticalScreen6';
import VerticalScreen7 from './Component/VierticalScreen/VertcalScreen7';
import VerticalScreen8 from './Component/VierticalScreen/VerticalScreen8';

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
import Officescreen from './Component/Officescreen';
import Clips from './Component/Clips';


// import shahzar from './Component/shahzar';



// import Navbar from "../Navbar";
// import Footer from "../Footer";

const Stack = createNativeStackNavigator();


const AuthNavigator = () => (
  <Stack.Navigator>
    {/* <Stack.Screen
      name="shahzar"
      options={{headerShown: false}}
      component={shahzar}
    /> */}
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
      name="Officescreen"
      options={{headerShown: false}}
      component={Officescreen}
    />
    {/*  */}
    <Stack.Screen
      name="VertcalScreen1"
      options={{
        headerShown: false,
      }}
      component={VertcalScreen1}
    />
    <Stack.Screen
      name="VerticalScreen2"
      options={{
        headerShown: false,
      }}
      component={VerticalScreen2}
    />
    <Stack.Screen
      name="VerticalScreen3"
      options={{
        headerShown: false,
      }}
      component={VerticalScreen3}
    />
    <Stack.Screen
      name="VerticalScreen4"
      options={{
        headerShown: false,
      }}
      component={VerticalScreen4}
    />
    <Stack.Screen
      name="VerticalScreen5"
      options={{
        headerShown: false,
      }}
      component={VerticalScreen5}
    />
    <Stack.Screen
      name="VerticalScreen6"
      options={{
        headerShown: false,
      }}
      component={VerticalScreen6}
    />
    <Stack.Screen
      name="VerticalScreen7"
      options={{
        headerShown: false,
      }}
      component={VerticalScreen7}
    />
    <Stack.Screen
      name="VerticalScreen8"
      options={{
        headerShown: false,
      }}
      component={VerticalScreen8}
    />
    {/*  */}
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
      name="Camerascreen4"
      options={{
        headerShown: false,
      }}
      component={Camerascreen4}
    />
    <Stack.Screen
      name="Camerascreen5"
      options={{
        headerShown: false,
      }}
      component={Camerascreen5}
    />
    <Stack.Screen
      name="Camerascreen6"
      options={{
        headerShown: false,
      }}
      component={Camerascreen6}
    />
    <Stack.Screen
      name="Camerascreen7"
      options={{
        headerShown: false,
      }}
      component={Camerascreen7}
    />
    <Stack.Screen
      name="Camerascreen8"
      options={{
        headerShown: false,
      }}
      component={Camerascreen8}
    />
    <Stack.Screen
      name="Camerascreenv1"
      options={{
        headerShown: false,
      }}
      component={Camerascreenv1}
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
    <Stack.Screen
      name="Clips"
      options={{
        headerShown: false,
      }}
      component={Clips}
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
