import { StatusBar } from 'expo-status-bar';
import {ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import  laungimage  from '../assets/lounge.jpg';
import  laung2image  from '../assets/lounge2.jpg';
import  roomimage  from '../assets/room.jpg';
import Footer from './Footer';

export default function Camerascreen() {
  return (
   <View style={styles.setpage}>
     <ImageBackground source={laungimage} resizeMode="cover" style={styles.image}>
       <Text  style={styles.imgtxt}>Lounge</Text>
       <View style={styles.dateandspotcontainer}><View style={styles.spot}></View><Text style={styles.datandtime}> Nov 15 09:30:31 </Text></View>
     </ImageBackground>
     <ImageBackground source={roomimage} resizeMode="cover" style={styles.image}>
       <Text  style={styles.imgtxt}>Room</Text>
       <View style={styles.dateandspotcontainer}><View style={styles.spot}></View><Text style={styles.datandtime}> Nov 15 09:30:31 </Text></View>
     </ImageBackground>
     <ImageBackground source={laung2image} resizeMode="cover" style={styles.image}>
       <Text  style={styles.imgtxt}>Lounge</Text>
       <View style={styles.dateandspotcontainer}><View style={styles.spot}></View><Text style={styles.datandtime}> Nov 15 09:30:31 </Text></View>
     </ImageBackground>
    <Footer/>
 </View>
  );
}

const styles = StyleSheet.create({
    setpage: {
   paddingTop:40,
  },
image:
{
height:240,
padding:30,
display:'flex',
justifyContent:'space-between',
marginBottom:1
},
spot:
{
height:10,
width:10,
backgroundColor:'green',
borderRadius:5
},
imgtxt:
{
color:'white',
fontSize:20,
fontWeight:'bold'
},
datandtime:
{
color:'white',
fontSize:12,

},
dateandspotcontainer:
{
   display:'flex',
   flexDirection:"row",
   justifyContent:'space-between',
},
});
