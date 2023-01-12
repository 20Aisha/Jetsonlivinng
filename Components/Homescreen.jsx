import React from 'react'
import {ImageBackground, StyleSheet, Text, View,Button } from 'react-native';
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';
import  laungimage  from '../assets/lounge.jpg';
import Footer from './Footer';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';



export default function Homescreen() {
  return (
    <View style={styles.main}>
      <View style={styles.setdisplayofpage}>
        {/* heading container */}
       <View style={styles.headingcontainer}>
        <Text style={styles.heading}>Hello, Anderson</Text>
        <Text style={styles.txt}>You have 4 active devices</Text>
       </View>
       {/* Quick view container */}
       <View style={styles.quickcontainer}>
        <Text style={styles.heading}>Quick view</Text>
       <View style={styles.quickflex}>
        <View style={styles.quickimg}>
        <ImageBackground source={laungimage} resizeMode="cover" style={styles.imagevertical}>
        <Text  style={styles.imgtxt}>Front</Text>
        </ImageBackground>
        </View >
  
        <View style={styles.quickimg2}>
        <ImageBackground source={laungimage} resizeMode="cover" style={styles.imagevertical2}>
        <Text  style={styles.imgtxt}>Living room</Text>
        </ImageBackground>
        <ImageBackground source={laungimage} resizeMode="cover" style={styles.imagevertical2}>
        <Text  style={styles.imgtxt}>Garage</Text>
        </ImageBackground>
        </View>
  
       </View>

       </View>
        
        {/* buttons */}
           
           <View  style={styles.btncontainer}>
          <View style={styles.bg}>
            <View style={styles.btn}><Text> <Feather name="share-2" size={24} color="black" /></Text><Text>View all devices</Text></View>
          </View>
          <View style={styles.bgdbtn}>
            <View style={styles.btnd}><Text> <Ionicons name="stats-chart" size={24} color="black" /></Text><Text>Stats</Text></View>
            <View style={styles.btnd}><Text>  <AntDesign name="videocamera" size={24} color="black" /></Text><Text>Recording</Text></View>
            <View style={styles.btnd}><Text> <AntDesign name="setting" size={24} color="black" /></Text><Text>Setting</Text></View>
          </View>

           </View>



      </View>
      <View style={styles.flexdown}>
        <Footer />
      </View>
    </View>
  );
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
      headingcontainer: {
        display:"flex",
        flexDirection:"column",
        flex:1,
      },
      quickcontainer: {
        display:"flex",
        flex:5,
        marginBottom:20,
        marginTop:40,
      },
      btncontainer: {
        display:"flex",
        flex:1,
      },
      bg: {
     
        height:"50%",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
      },
      bgdbtn: {
     
        height:"50%",
        display:"flex",
        alignItems:"center",
        justifyContent:"space-evenly",
        flexDirection:"row",
        marginTop:10,
      },
      btn: {
       
        width:"50%",
        height:"100%",
        backgroundColor:"white",
        display:"flex",
        alignItems:"center",
        justifyContent:"space-evenly",
        flexDirection:"row",
        borderRadius:10,
        elevation: 4,
        shadowColor: 'gray',
      },
      btnd: {
       
        width:"30%",
        height:"100%",
        backgroundColor:"white",
        display:"flex",
        alignItems:"center",
        justifyContent:"space-evenly",
        flexDirection:"row",
        borderRadius:10,
        elevation: 4,
        shadowColor: 'gray',
      },
      quickflex: {
        display:"flex",
        flexDirection:"row",
        flex:5,
        // justifyContent:"space-between",
        marginTop:20,
      },
      quickimg: {
        display:"flex",
        flexDirection:"column",
        flex:5,
        // justifyContent:"space-between"
      },
      quickimg2: {
        display:"flex",
        flexDirection:"column",
        flex:5,
        justifyContent:"space-between",
        marginLeft:20,
      },
      imagevertical: {
        height:"100%",
        width:"100%",
        paddingLeft:10,
        paddingTop:10,
        backgroundColor:"green", 
      
      },
      imagevertical2: {
        height:"45%",
        width:"100%",
        backgroundColor:"green",
        paddingLeft:10,
        paddingTop:10,
      },
      heading: {
       fontSize:30, 
       fontWeight: "700",
      },
      txt: {
       fontSize:15, 
       color:"gray",
       fontWeight: "500",
      },
     flexdown:
     {
     flex:1
     },
     imgtxt:
     {
     color:'white',
     fontSize:20,
     fontWeight:'bold'
     },
})