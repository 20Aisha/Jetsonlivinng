import { StyleSheet, Text, View,Image,TextInput,Button } from 'react-native'
import React from 'react'
import logo from '../assets/logo.png'

export default function Signup() {
    const [text, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState('');
  return (
    <View style={styles.main}>
     <View style={styles.logincontainer}>
     <Image
        style={styles.tinyLogo}
        source={logo}
      />

    <View style={styles.loginform}>

    <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="I.P xxx"
   
      />
    <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Username"
       
      />
    <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Password"
        keyboardType="visible-password"
      />
     
      <Text  style={styles.forget}>Forget Password?</Text>
      <View style={styles.signbtn}>
      <Button
                    title="Sign in"
                    color="#1877F2"
                    style={styles.btn}
                   />
      </View>
      
     </View>
     </View>
    </View>
  )
}

const styles = StyleSheet.create({
    main: {
        paddingTop:120,
        paddingBottom:120,
        paddingLeft:30,
        paddingRight:30,
        display:"flex",
        flexDirection:"column",
        flex:1,    
       },
       logincontainer: {
        width:"100%",
        height:"100%",
        backgroundColor:"white",
        padding:20,
        elevation: 9,
        shadowColor: 'gray',
        borderRadius:50,
       
       },
       tinyLogo: {
        width:"90%",
        height:100,
         },
         loginform: {
          width:"100%",
          height:"100%",
          marginTop:30,
          
         },
       
         input: {
          borderBottomWidth:1,
          borderBottomColor:"gray",
          height:50,
         },
         forget: {
         color:"gray",
         marginLeft:"60%",
         marginTop:10,
         },
       
         signbtn: {
         width:"60%",
         height:40,
         marginTop:90,
         alignSelf:"center"
         },
         btn: {
         borderRadius:150,
         },
       
    
    
})