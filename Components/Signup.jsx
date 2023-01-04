import { Image,Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import logo from '../assets/logo.png'

export default class Signup extends Component {
  render() {
    return (
      <View style={styles.container}>
        
        <Image
        style={styles.stretch}
        source={logo}
      />
        <View style={styles.signformcontainer}>

<Text>sdfg</Text>


        </View>


      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      height:500,
    display:'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  stretch: { 
    height: 200,
  },
  signformcontainer: { 
    height:300,
    width:400,
    backgroundColor: 'black',
  },


})