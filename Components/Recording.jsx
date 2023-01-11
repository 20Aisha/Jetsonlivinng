import { Image,StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Footer from './Footer';
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';
import  laungimage  from '../assets/lounge.jpg';


export default function Recording() {
  return (
    <View style={styles.main}>
     <View style={styles.setdisplayofpage}>
        {/* header */}
         <View style={styles.headingconatiner}>
             <FontAwesome icon={RegularIcons.smileWink} />
             <Text style={styles.heading}>Recordings</Text>
             <FontAwesome icon={RegularIcons.smileWink} />
         </View>
        {/* body */}
           <View style={styles.bodyconatiner}>
                 <Text style={styles.headingcam}>Select Camera</Text>

               <View style={styles.card}>
               <Image
               style={styles.cardimg}
               source={laungimage}
                />

               <View style={styles.cardbody} >
                 <View>
                    <Text style={styles.headingtwo}>
                        Living room
                    </Text>
                    <Text style={styles.paragray}>
                        Camera 1
                    </Text>
                 </View>
                   <View style={styles.spotto}>
                   </View>
               </View>
            </View>
            <View style={styles.card}>
               <Image
               style={styles.cardimg}
               source={laungimage}
                />

               <View style={styles.cardbody} >
                 <View>
                    <Text style={styles.headingtwo}>
                        Bed room
                    </Text>
                    <Text style={styles.paragray}>
                        Camera 2
                    </Text>
                 </View>
                   <View style={styles.spotto}>
                   </View>
               </View>
            </View>
            <View style={styles.card}>
               <Image
               style={styles.cardimg}
               source={laungimage}
                />

               <View style={styles.cardbody} >
                 <View>
                    <Text style={styles.headingtwo}>
                        Front
                    </Text>
                    <Text style={styles.paragray}>
                        Camera 3
                    </Text>
                 </View>
                   <View style={styles.spotto}>
                   </View>
               </View>
            </View>
            <View style={styles.card}>
               <Image
               style={styles.cardimg}
               source={laungimage}
                />

               <View style={styles.cardbody} >
                 <View>
                    <Text style={styles.headingtwo}>
                        Back area
                    </Text>
                    <Text style={styles.paragray}>
                        Camera 4
                    </Text>
                 </View>
                   <View style={styles.spotto}>
                   </View>
               </View>
            </View>
            <View style={styles.card}>
               <Image
               style={styles.cardimg}
               source={laungimage}
                />

               <View style={styles.cardbody} >
                 <View>
                    <Text style={styles.headingtwo}>
                        Garage
                    </Text>
                    <Text style={styles.paragray}>
                        Camera 5
                    </Text>
                 </View>
                   <View style={styles.spotto}>
                   </View>
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
        color:"blue"
       },
       headingcam: {
        fontSize:20, 
        fontWeight: "700",
    },
    headingtwo: {
        fontSize:20, 
        fontWeight: "700",
        color:"blue"
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
       shadowOpacity: 0.25,
        shadowRadius: 10,
     elevation: 9,
       shadowColor: 'gray',
       
      
    },
       cardimg: {
       height:"80%",
       width:"35%",
       marginTop:"4%",
       marginLeft:"1%"
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