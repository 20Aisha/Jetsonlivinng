import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import laungimage from '../assets/lounge.jpg';
import laung2image from '../assets/lounge2.jpg';
import roomimage from '../assets/room.jpg';
import Footer from './Footer';

export default function Camerascreen3() {
  return (
    <View style={styles.main}>
      <View style={styles.setdisplayofpage}>
        <ImageBackground source={laungimage} resizeMode="cover" style={styles.image}>
          <Text style={styles.imgtxt}>Front</Text>
          <View style={styles.dateandspotcontainer}><View style={styles.spot}></View><Text style={styles.datandtime}> Nov 15 09:30:31 </Text></View>
        </ImageBackground>
        <ImageBackground source={roomimage} resizeMode="cover" style={styles.image}>
          <Text style={styles.imgtxt}>Room</Text>
          <View style={styles.dateandspotcontainer}><View style={styles.spot}></View><Text style={styles.datandtime}> Nov 15 09:30:31 </Text></View>
        </ImageBackground>
        <ImageBackground source={laung2image} resizeMode="cover" style={styles.image}>
          <Text style={styles.imgtxt}>Lounge</Text>
          <View style={styles.dateandspotcontainer}><View style={styles.spot}></View><Text style={styles.datandtime}> Nov 15 09:30:31 </Text></View>
        </ImageBackground>
        <ImageBackground source={roomimage} resizeMode="cover" style={styles.image}>
          <Text style={styles.imgtxt}>Backarea</Text>
          <View style={styles.dateandspotcontainer}><View style={styles.spot}></View><Text style={styles.datandtime}> Nov 15 09:30:31 </Text></View>
        </ImageBackground>

      </View>
      {/* <View style={styles.flexdown}>
        <Footer />
      </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    paddingTop: 40,
    display: "flex",
    flexDirection: "column",

  },
  setdisplayofpage: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    height: 730
  },
  flexdown: {
    flex: 1
  },
  image:
  {
    height: 360,
    width: 205,
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 1,
    padding: 20
  },
  dateandspotcontainer:
  {
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  spot:
  {
    height: 10,
    width: 10,
    backgroundColor: 'green',
    borderRadius: 5
  },
  imgtxt:
  {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  datandtime:
  {
    color: 'white',
    fontSize: 12,

  },
})