import { Image,StyleSheet, Text, View } from 'react-native'
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


export default function Statusscreen() {
  return (
    <View style={styles.main}>
     <View style={styles.setdisplayofpage}>
        {/* header */}
         <View style={styles.headingconatiner}>
         <SimpleLineIcons name="arrow-left" size={24} color="#1877F2" />
             <Text style={styles.heading}>Stats</Text>
             <AntDesign name="setting" size={24} color="#1877F2" />
         </View>
        {/* body */}
           <View style={styles.bodyconatiner}>
                 <Text style={styles.headingcam}>Camera / User</Text>
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
  borderBottomWidth:1,
  borderBottomColor:"gray",
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
paragray: { 
    color:"gray"
},
   card: {
    display:"flex",
    flexDirection:"row",
   height:"15%",
   width:"90%",
   borderRadius:10,
borderWidth:1,
bordercolor:"gray",
  
},
   cardimg: {
   height:"100%",
   width:"35%",
   borderBottomLeftRadius: 10,
borderTopLeftRadius: 10,

},
   cardbody: {
    height:"100%",
    width:"65%",
   display:"flex",
   flexDirection:"row",
   justifyContent:"space-evenly",
   alignItems:"center",
},
spotto: {
    height:10,
    width:10,
   backgroundColor:"green", 
   borderRadius:50,
},


})