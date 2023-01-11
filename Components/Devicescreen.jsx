import React from 'react'
import {ImageBackground, StyleSheet, Text, View,Button } from 'react-native';
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';
import  laungimage  from '../assets/lounge.jpg';
import Footer from './Footer';


export default function Devicescreen() {
  return (
    <View style={styles.main}>
    <View style={styles.setdisplayofpage}>
    <View style={styles.headingcontainerdevice}>
        <Text style={styles.heading}>Devices</Text>
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
       headingcontainerdevice: {
        display:"flex",
        flexDirection:"row",
        flex:1,
      },
      heading: {
        fontSize:30, 
        fontWeight: "700",
       },
     
})