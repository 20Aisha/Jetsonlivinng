import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import laungimage from '../assets/lounge.jpg';
import laung2image from '../assets/lounge2.jpg';
import roomimage from '../assets/room.jpg';
import Footer from './Footer';

export default function Camerascreen1() {
  return (
    <View style={styles.main}>
      <View style={styles.setdisplayofpage}>
        <View style={styles.imgcontainer} >
          <ImageBackground source={laungimage} resizeMode="cover" style={styles.image}>
            <Text style={styles.imgtxt}>Front</Text>
            <View style={styles.dateandspotcontainer}><View style={styles.spot}></View><Text style={styles.datandtime}> Nov 15 09:30:31 </Text></View>
          </ImageBackground>
          <ImageBackground source={roomimage} resizeMode="cover" style={styles.image}>
            <Text style={styles.imgtxt}>Room</Text>
            <View style={styles.dateandspotcontainer}><View style={styles.spot}></View><Text style={styles.datandtime}> Nov 15 09:30:31 </Text></View>
          </ImageBackground>
        </View>
        <ImageBackground source={laung2image} resizeMode="cover" style={styles.imagewidth}>
          <Text style={styles.imgtxt}>Lounge</Text>
          <View style={styles.dateandspotcontainer}><View style={styles.spot}></View><Text style={styles.datandtime}> Nov 15 09:30:31 </Text></View>
        </ImageBackground>
        <View style={styles.imgcontainer} >
          <ImageBackground source={laungimage} resizeMode="cover" style={styles.image}>
            <Text style={styles.imgtxt}>Front</Text>
            <View style={styles.dateandspotcontainer}><View style={styles.spot}></View><Text style={styles.datandtime}> Nov 15 09:30:31 </Text></View>
          </ImageBackground>
          <ImageBackground source={roomimage} resizeMode="cover" style={styles.image}>
            <Text style={styles.imgtxt}>Room</Text>
            <View style={styles.dateandspotcontainer}><View style={styles.spot}></View><Text style={styles.datandtime}> Nov 15 09:30:31 </Text></View>
          </ImageBackground>
        </View>

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
    flex: 1,

  },
  setdisplayofpage: {
    display: "flex",
    flexDirection: "column",
    flex: 9,


  },
  image:
  {
    flex: 3,
    display: 'flex',
    justifyContent: 'space-between',
    padding: 20,
    marginBottom: 1,
  },
  imagewidth:
  {
    flex: 4,
    display: 'flex',
    justifyContent: 'space-between',
    padding: 20,
    marginBottom: 1,
  },
  dateandspotcontainer:
  {
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  imgcontainer:
  {
    display: 'flex',
    flexDirection: "row",
    flex: 4,
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
  flexdown:
  {
    flex: 1
  },
})