import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import laungimage from '../../assets/lounge.jpg';
import laung2image from '../../assets/lounge2.jpg';
import roomimage from '../../assets/room.jpg';
import camimage from '../../assets/cameraimg.jpg';
import addimage from '../../assets/add.png';
// import Footer from './Footer';




export default function Camerascreen4() {


  const navigation = useNavigation();

  return (
    <View style={styles.main}>

      <View style={styles.setdisplayofpage}>
        <View style={styles.imgcontainer} >

         <TouchableOpacity onPress={() => navigation.navigate('Livingroom')} style={styles.image}>
          <ImageBackground source={laungimage} resizeMode="cover" style={styles.image}>
            <Text style={styles.imgtxt}>Front</Text>
            <View style={styles.dateandspotcontainer}><View style={styles.spot}></View><Text style={styles.datandtime}> Nov 15 09:30:31 </Text></View>
          </ImageBackground>
         </TouchableOpacity>

         <TouchableOpacity onPress={() => navigation.navigate('Livingroom')} style={styles.image}>
          <ImageBackground source={roomimage} resizeMode="cover" style={styles.image}>
            <Text style={styles.imgtxt}>Room</Text>
            <View style={styles.dateandspotcontainer}><View style={styles.spot}></View><Text style={styles.datandtime}> Nov 15 09:30:31 </Text></View>
          </ImageBackground>
         </TouchableOpacity>
        </View>

        <View style={styles.imgcontainer} >

         <TouchableOpacity onPress={() => navigation.navigate('Livingroom')} style={styles.image}>
          <ImageBackground source={laungimage} resizeMode="cover" style={styles.image}>
            <Text style={styles.imgtxt}>Front</Text>
            <View style={styles.dateandspotcontainer}><View style={styles.spot}></View><Text style={styles.datandtime}> Nov 15 09:30:31 </Text></View>
          </ImageBackground>
         </TouchableOpacity>

         <TouchableOpacity onPress={() => navigation.navigate('Livingroom')} style={styles.image}>
          <ImageBackground source={roomimage} resizeMode="cover" style={styles.image}>
            <Text style={styles.imgtxt}>Room</Text>
            <View style={styles.dateandspotcontainer}><View style={styles.spot}></View><Text style={styles.datandtime}> Nov 15 09:30:31 </Text></View>
          </ImageBackground>
         </TouchableOpacity>
        </View>
        <View style={styles.imgcontainer} >

         <TouchableOpacity onPress={() => navigation.navigate('Livingroom')} style={styles.image}>
          <ImageBackground source={laungimage} resizeMode="cover" style={styles.image}>
            <Text style={styles.imgtxt}>Front</Text>
            <View style={styles.dateandspotcontainer}><View style={styles.spot}></View><Text style={styles.datandtime}> Nov 15 09:30:31 </Text></View>
          </ImageBackground>
         </TouchableOpacity>

         <TouchableOpacity onPress={() => navigation.navigate('Livingroom')} style={styles.image}>
          <ImageBackground source={roomimage} resizeMode="cover" style={styles.image}>
            <Text style={styles.imgtxt}>Room</Text>
            <View style={styles.dateandspotcontainer}><View style={styles.spot}></View><Text style={styles.datandtime}> Nov 15 09:30:31 </Text></View>
          </ImageBackground>
         </TouchableOpacity>
        </View>
        <View style={styles.imgcontainer} >

         <TouchableOpacity onPress={() => navigation.navigate('Livingroom')} style={styles.image}>
          <ImageBackground source={laungimage} resizeMode="cover" style={styles.image}>
            <Text style={styles.imgtxt}>Front</Text>
            <View style={styles.dateandspotcontainer}><View style={styles.spot}></View><Text style={styles.datandtime}> Nov 15 09:30:31 </Text></View>
          </ImageBackground>
         </TouchableOpacity>

         <TouchableOpacity onPress={() => navigation.navigate('Livingroom')} style={styles.image}>
          <ImageBackground source={roomimage} resizeMode="cover" style={styles.image}>
            <Text style={styles.imgtxt}>Room</Text>
            <View style={styles.dateandspotcontainer}><View style={styles.spot}></View><Text style={styles.datandtime}> Nov 15 09:30:31 </Text></View>
          </ImageBackground>
         </TouchableOpacity>
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
    // paddingTop: 40,
    display: "flex",
    flexDirection: "column",
    flex: 1,

  },
  setdisplayofpage: {
    display: "flex",
    flexDirection: "column",
    flex: 15,


  },
  image:
  {
    flex: 3,
    display: 'flex',
    justifyContent: 'space-between',
    padding: 1,
   // marginBottom: 1,
  
  },
  imagecam:
  {
    flex: 3,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: "center",
   // marginBottom: 1,
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
    flex: 3,
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
  tinyico:
  {
    height: 40,
    width: 40,

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