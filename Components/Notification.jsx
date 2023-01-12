import { Image,StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Footer from './Footer';
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';
import  laungimage  from '../assets/lounge.jpg';


export default function Notification() {
  return (
    <View style={styles.main}>
     <View style={styles.setdisplayofpage}>
        {/* header */}
         <View style={styles.headingconatiner}>
             <FontAwesome icon={RegularIcons.smileWink} />
             <Text style={styles.heading}>Notifiaction</Text>
             <FontAwesome icon={RegularIcons.smileWink} />
         </View>
        {/* body */}
           <View style={styles.bodyconatiner}>
    

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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, dolor!
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, dolor!2
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, dolor!3
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, dolor!4
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, dolor!5
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
        color:"gray",
   
    },
       card: {
        display:"flex",
        flexDirection:"row",
       height:"20%",
       width:"100%",
      borderBottomColor:"gray",
      borderBottomWidth:1,

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