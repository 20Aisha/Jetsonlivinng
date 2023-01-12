import { StyleSheet, Text, View,Image,TextInput,Button } from 'react-native'
import React from 'react'
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';


export default function Gridscreen() {

  return (
    <View style={styles.main}>
        <View>
     <View style={styles.viewcontainer}>
    <View style={styles.views}>
        <Text style={styles.color}>Vertical</Text>
        <View>
            <View style={styles.subvertical}>
        <View style={styles.vertical1}>

        </View>
        <View style={styles.vertical1}>

        </View>
        </View>

        <View style={styles.subvertical}>
        <View style={styles.vertical1}>

        </View>
        <View style={styles.vertical1}>

        </View>
        <View style={styles.vertical1}>

        </View>
        </View>
        </View>
        <View>
            <View style={styles.subhor}>
        <View style={styles.vertical2}>

        </View>
        <View style={styles.vertical2}>

        </View>
        </View>

        <View style={styles.subhor}>
        <View style={styles.vertical2}>

        </View>
        <View style={styles.vertical2}>

        </View>
        
        <View style={styles.vertical2}>

        </View>
        </View>
        </View>
        <View></View>
    </View>
    <View style={styles.views}>
        <Text style={styles.color}>Horizontal</Text>
        <View>
            <View style={styles.subhor}>
        <View style={styles.vertical2}>

        </View>
        <View style={styles.vertical2}>

        </View>
        </View>

        <View style={styles.subhor}>
        <View style={styles.vertical2}>

        </View>
        <View style={styles.vertical2}>

        </View>
        
        <View style={styles.vertical2}>

        </View>
        </View>
        </View>
        <View>
            <View style={styles.subvertical}>
        <View style={styles.vertical1}>

        </View>
        <View style={styles.vertical1}>

        </View>
        </View>

        <View style={styles.subvertical}>
        <View style={styles.vertical1}>

        </View>
        <View style={styles.vertical1}>

        </View>
        <View style={styles.vertical1}>

        </View>
        </View>
        </View>
    </View>
    </View>
    <View style={styles.closbtn}>
      <Button
                    title="Close"
                    color="#1877F2"
                    style={styles.btn}
                   />
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
   viewcontainer: {
    width:"100%",
    height:"100%",
    backgroundColor:"white",
    padding:20,
    elevation: 9,
    shadowColor: 'gray',
    borderRadius:50,
    display:"flex",
    flexDirection:"row",
   },
   views: {
    width:"50%",
    height:"80%",
    padding:20,
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
   },
color: {
   color:"#1877F2",
   fontSize:25,
   },
vertical1: {
   height:20,
   width:80,
   backgroundColor:"#1877F2",
   borderRadius:50,
   marginTop:1,
   },
   vertical2: {
   height:80,
   width:20,
   backgroundColor:"#1877F2",
   borderRadius:50,
   marginLeft:1,
   },
subvertical: {
   
   marginTop:50,
   },
   subhor: {
   
   marginTop:28,
   display:"flex",
    flexDirection:"row",
    alignItems:"center",
   },
   closbtn: {
    width:"60%",
    alignSelf:"center",
    marginTop:10,
    }
    
   
   })