import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Footer from './Footer';

export default function Statusscreen() {
  return (
    <View style={styles.main}>
    <View style={styles.setdisplayofpage}>
    
   
   

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



})