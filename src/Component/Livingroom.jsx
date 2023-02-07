import { Image, StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import Footer from './Footer';
import laungimage from '../assets/lounge.jpg';
import { useNavigation } from '@react-navigation/native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import { Feather } from '@expo/vector-icons';
// import { FontAwesome5 } from '@expo/vector-icons';
// import { SimpleLineIcons } from '@expo/vector-icons';
// import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Livingroom() {


  const navigation = useNavigation();

  return (

    <View style={styles.main}>
      {/* header */}
      <View style={styles.headingconatiner}>
        <Feather name="arrow-left" size={24} color="#1877F2" />
        <Text style={styles.heading}>Living Room</Text>
        <AntDesign name="setting" size={24} color="#1877F2" />
      </View>
      <View style={styles.setdisplayofpage}>

        {/* body */}
        <View style={styles.bodyconatiner}>
          <ImageBackground 
          // source={laungimage} 
          resizeMode="cover" style={styles.imagevertical}>
          </ImageBackground>

          <View style={styles.options}>
            <AntDesign name="pausecircle" size={28} color="#1877F2" />
            {/* <Text>Raza</Text> */}
            <FontAwesome5 name="volume-mute" size={28} color="#1877F2" />

            <MaterialIcons name="crop-rotate" size={28} color="#1877F2" onPress={() => navigation.navigate('VideoScreen')} />
          </View>
          <View style={styles.historybox}>
            <Text style={styles.para} onPress={() => navigation.navigate('Recording')}>24 hour video recording video</Text>
          </View>

          <View style={styles.moreoptions}>
            <AntDesign name="camera" size={40} color="gray" />
            <Feather name="mic-off" size={40} color="gray" />
            <FontAwesome5 name="video" size={40} color="gray" />
          </View>
        </View>



      </View>
      <Footer />
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    paddingTop: 10,  
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  setdisplayofpage: {
    display: "flex",
    flexDirection: "column",
    flex: 15,
    padding: 25,
  },
  headingconatiner: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
    marginLeft: 25,
    marginRight: 25,
  },
  bodyconatiner: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    flex: 8,

  },
  heading: {
    fontSize: 30,
    fontWeight: "700",
    color: "#1877F2",
  },
  headingcam: {
    fontSize: 20,
    fontWeight: "700",
  },
  headingtwo: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1877F2",
  },
  imagevertical: {
    height: "40%",
    width: "100%",
    backgroundColor: "skyblue",
    shadowColor: "skyblue",
    shadowOpacity: 0.53,
    shadowRadius: 13.97,
    elevation: 8,
  },
  options: {
    height: "10%",
    width: "80%",
    borderRadius: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "white",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    shadowColor: "#000",
    elevation: 7,
  },
  moreoptions: {
    height: "20%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

  },
  historybox: {
    height: "8%",
    // width: "60%",
    borderRadius: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderWidth: 1,
    bordercolor: "#1877F2",
    padding: 8,
  },
  para: {
    color: "gray",
    fontSize: 15,
  },



})