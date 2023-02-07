import React from 'react'
import { ImageBackground, StyleSheet, Text, View, Button, Dimensions, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import Video from 'react-native-video';
import { useNavigation } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function Devicescreen() {

  const [status, setStatus] = React.useState({});

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* <ScrollView> */}

      <View style={styles.miniHeader}>
        <Text style={styles.heading} >Devices</Text>
        <View style={styles.btncontainer}>
          <Text style={styles.btnHeader} onPress={() => navigation.navigate('Gridscreen')}>Grid View</Text>
          <Text style={styles.btnHeader} ><Ionicons name="add" size={35} color="black" /></Text>
        </View>
      </View>
      <View style={styles.main}>
        <View style={styles.setdisplayofpage}>


          <View style={styles.VidoContent}>

            <Video
              source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
              resizeMode="cover"
              shouldPlay
              // onFullscreenUpdate={setOrientation}
              // isMuted
              isLooping
              useNativeControls
              onPlaybackStatusUpdate={status => setStatus(() => status)}
              style={{ width: Dimensions.get('window').width, height: "100%", width: "100%", borderRadius: 18, }}
            />
          </View>
          <View style={styles.VidoContent}>
            <Video
              source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
              resizeMode="cover"
              shouldPlay
              isMuted
              // onFullscreenUpdate={setOrientation}
              isLooping
              useNativeControls
              onPlaybackStatusUpdate={status => setStatus(() => status)}
              style={{ width: Dimensions.get('window').width, height: "100%", width: "100%", borderRadius: 8 }}
            />
          </View>

          <View style={styles.VidoContent}>
            <Video
              source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
              resizeMode="cover"
              shouldPlay
              isMuted
              // onFullscreenUpdate={setOrientation}
              isLooping
              useNativeControls
              onPlaybackStatusUpdate={status => setStatus(() => status)}
              style={{ width: Dimensions.get('window').width, height: "100%", width: "100%", borderRadius: 8 }}
            />
          </View>


        </View>


      </View>
      {/* </ScrollView> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "2%",
  },
  // scrollView: {
  //   // backgroundColor: 'pink',
  //   // marginHorizontal: 20,
  // },
  text: {
    fontSize: 42,
  },
  main: {
    // paddingTop: 40,
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  setdisplayofpage: {
    display: "flex",
    flexDirection: "column",
    flex: 9,
    padding: 25,
  },
  headingcontainerdevice: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
  },
  heading: {
    fontSize: 30,
    fontWeight: "700",
    marginLeft: -5
  },
  VidoContent: {

    backgroundColor: '#68a0cf',
    height: '26%',
    // padding: "3%",
    margin: "3%",
    borderTopColor: 'black',
    marginHorizontal: 20,
    borderRadius: 21,


    shadowColor: "skyblue",
    shadowOpacity: 0.53,
    shadowRadius: 13.97,
    elevation: 8,
    // paddingTop:'19%'
    // paddingBottom: '8%',

  },
  miniHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "1%",
    marginLeft: 30,
    marginRight: 30,
    // shadowColor: 'skyblue',
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
    // shadowColor: "#000",
    // borderBottomColor: "yellow",
    // backgroundColor:"green",
    // height: "8%",
  },
  btncontainer: {
    // display: "flex",
    flexDirection: "row",
    height: "5%",
    marginBottom: "2%",

    // marginLeft: "20%",
    // marginRight: 30,
  },
  btnHeader: {
    borderRadius: 4,
    backgroundColor: '#F2F2F2',
    minWidth: '25%',
    textAlign: 'center',
    color: 'skyBlue',
    shadowColor: 'skyblue',
    borderRadius: 10,
    elevation: 8,
    height: 35,
    display: "flex",
    justifyContent: 'center',
    alignItems: "center",
    // paddingTop: "1%",
    marginRight: 5,
    fontSize: 22,
    // marginBottom:"2%"

    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    textShadowColor:"skyblue"
  }




})


// https://helpincoding.com/rotate-expo-video-player-in-full-screen-mode/