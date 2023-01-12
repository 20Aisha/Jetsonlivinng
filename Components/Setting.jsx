import {ImageBackground, StyleSheet, Text, View,Button,Image,Switch } from 'react-native';
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';
import  laungimage  from '../assets/lounge.jpg';
import Footer from './Footer';
import React, { useState } from 'react'



export default function Setting() {
   const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.main}>
    <View style={styles.setdisplayofpage}>
       {/* header */}
        <View style={styles.headingconatiner}>
            <FontAwesome icon={RegularIcons.smileWink} />
            <Text style={styles.heading}>Settings</Text>
        </View>
       {/* body */}
          <View style={styles.bodyconatiner}>
   <View style={styles.usernamebox}>
   <Image
        style={styles.userimg}
        source={laungimage}
      />
   <Text style={styles.username}>Hello, Anderson</Text>
   </View>
             

            <View style={styles.settingcontainer}>
                    <View style={styles.optioncontainer}>
                    <View style={styles.align}>
                    <FontAwesome icon={RegularIcons.smileWink} />
                    <Text style={styles.setingoption}>Notification</Text>
                      </View>
                    
                    <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? 'color:"#1877F2",' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
                    </View>
                    <View style={styles.optioncontainer}>
                      <View style={styles.align}>
                      <FontAwesome icon={RegularIcons.smileWink} />
                    <Text style={styles.setingoption}>Account</Text>
                      </View>
                    
                    <FontAwesome icon={RegularIcons.smileWink} />
                    </View>
                    <View style={styles.optioncontainer}>
                     <View style={styles.align}>
                      <FontAwesome icon={RegularIcons.smileWink} />
                      <Text style={styles.setingoption}>Share With Firends</Text>
                      </View>
                    
                    <FontAwesome icon={RegularIcons.smileWink} />
                    </View>
                    <View style={styles.optioncontainer}>
                    <View style={styles.align}>
                    <FontAwesome icon={RegularIcons.smileWink} />
                    <Text style={styles.setingoption}>Terms and conditions</Text>
                      </View>
                    
                    <FontAwesome icon={RegularIcons.smileWink} />
                    </View>
                    <View style={styles.optioncontainer}>
                    <View style={styles.align}>
                    <FontAwesome icon={RegularIcons.smileWink} />
                    <Text style={styles.setingoption}>Help & Support</Text>
                      </View>
                    
                    <FontAwesome icon={RegularIcons.smileWink} />
                    </View>
                    <View style={styles.btncontainer}>
                    <Button
                    title="Log Out"
                    color="#1877F2"
 
                   />
                  </View>
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
      height:"70%",
      width:"90%",
      borderRadius:10,
      shadowOpacity: 0.25,
       shadowRadius: 80,
       elevation: 7,
      shadowColor: 'gray',
     padding:20,
       },
    align: {
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
       },
   heading: {
        fontSize:30, 
        fontWeight: "700",
        color:"#1877F2",
        marginLeft:50
       },
    usernamebox: {
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-evenly",
       },
    userimg: {
      height:120,
      width:120,   
      borderRadius:100,
      marginTop:10,  
      marginRight:20, 
       },
    username: {
      fontSize:20,
      fontWeight:'bold' 
       },
  setingoption: {
      fontSize:20,
      fontWeight:'300', 
      marginLeft:20, 
       },
    optioncontainer: {
      borderBottomWidth:1,
      borderBottomColor:"gray", 
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
      height:"15%",
       },
    btncontainer: {
      width:"40%",
      height:"13%",
      display:"flex",
      alignSelf:"center",
      marginTop:"20%",
       },
   
      

})