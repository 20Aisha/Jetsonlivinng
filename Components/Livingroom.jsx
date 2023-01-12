import { Image,StyleSheet, Text, View,ImageBackground } from 'react-native'
import React from 'react'
import Footer from './Footer';
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';
import  laungimage  from '../assets/lounge.jpg';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';


export default function Livingroom() {
  return (
    <View style={styles.main}>
    <View style={styles.setdisplayofpage}>
       {/* header */}
        <View style={styles.headingconatiner}>
        <SimpleLineIcons name="arrow-left" size={24} color="#1877F2" />
            <Text style={styles.heading}>Living Room</Text>
            <AntDesign name="setting" size={24} color="#1877F2" />
        </View>
       {/* body */}
          <View style={styles.bodyconatiner}>
          <ImageBackground source={laungimage} resizeMode="cover" style={styles.imagevertical}>
        </ImageBackground>

        <View style={styles.options}>
        <AntDesign name="pausecircle" size={30} color="#1877F2" />
        <FontAwesome5 name="volume-mute" size={30} color="#1877F2" />
        <MaterialIcons name="crop-rotate" size={30} color="#1877F2" />
        </View>
        <View style={styles.historybox}>
        <Text style={styles.para}>View history record</Text>
        </View>
            
            <View style={styles.moreoptions}>
            <Feather name="camera" size={40} color="black" />
            <Feather name="mic-off" size={40} color="black" />
        <AntDesign name="videocamera" size={40} color="black" />
            </View>
          </View>
   

         
    </View>
    <Footer/>
  </View>
  )
}

const styles = StyleSheet.create({
    main: {
        paddingTop:40,
        display:"flex",
        flexDirection:"column",
        flex:1,    
       },
    setdisplayofpage: {
        display:"flex",
        flexDirection:"column",
        flex:9,
        padding:25,
       },
     headingconatiner: {
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
      flex:1,   
  
       },
    bodyconatiner: {
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"space-evenly",
      flex:8,   
   
       },
    heading: {
        fontSize:30, 
        fontWeight: "700",
        color:"#1877F2",
       },
 headingcam: {
        fontSize:20, 
        fontWeight: "700",
    },
headingtwo: {
        fontSize:20, 
        fontWeight: "700",
        color:"#1877F2",
    },
imagevertical: {
        height:"40%",
        width:"100%",
        backgroundColor:"green",
      },
options: {
        height:"10%",
        width:"80%",
        borderRadius:50,
        display:"flex",
        flexDirection:"row",
       justifyContent:"space-evenly",
       alignItems:"center",
       backgroundColor:"white",
       shadowOpacity: 0.25,
    shadowRadius: 3.84,
    shadowColor: "#000",
    elevation: 7,
      },
      moreoptions: {
        height:"20%",
        width:"100%",
        display:"flex",
        flexDirection:"row",
       justifyContent:"space-between",
       alignItems:"center",
      
      },
historybox: {
        height:"8%",
        width:"60%",
        borderRadius:50,
        display:"flex",
        flexDirection:"row",
       justifyContent:"space-evenly",
       alignItems:"center",
       borderWidth:1,
       bordercolor:"#1877F2",
     
      },
para: {
    color:"gray",
    fontSize:15,
      },
   

  
})