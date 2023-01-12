import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Setting() {
  return (
    <View style={styles.main}>
    <View style={styles.setdisplayofpage}>
       {/* header */}
        <View style={styles.headingconatiner}>
            <FontAwesome icon={RegularIcons.smileWink} />
            <Text style={styles.heading}>Setting</Text>
        </View>
       {/* body */}
          <View style={styles.bodyconatiner}>
   
             <Text>Hello Anderson</Text>

            <View style={styles.settingcontainer}>



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
       settingcontainer: {
      height:"80%",
      width:"100%",
      borderRadius:10,
      shadowOpacity: 0.25,
       shadowRadius: 10,
       elevation: 9,
      shadowColor: 'gray',
      padding:20,  
       },
       heading: {
        fontSize:30, 
        fontWeight: "700",
        color:"blue"
       },
   
   
   


})