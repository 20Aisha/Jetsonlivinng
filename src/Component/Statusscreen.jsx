
import React from 'react'
import Footer from './Footer';
import { StyleSheet, ScrollView, Text, View, Image } from 'react-native';
import PieChart from 'react-native-pie-chart';
// import { useNavigation } from '@react-navigation/native';
// import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';
// import  laungimage  from '../assets/lounge.jpg';
// import { AntDesign } from '@expo/vector-icons';
// import { Feather } from '@expo/vector-icons';
// import { MaterialIcons } from '@expo/vector-icons';
// import { FontAwesome5 } from '@expo/vector-icons';
// import { Ionicons } from '@expo/vector-icons';
// import { SimpleLineIcons } from '@expo/vector-icons';


// import AntDesign from 'react-native-vector-icons/AntDesign';
// import Feather from 'react-native-vector-icons/Feather';

export default function Statusscreen() {

   //   const navigation = useNavigation();
   const widthAndHeight = 250
   const series = [223, 721]
   const sliceColor = ['red', 'purple', '#FFEB3B', '#4CAF50', '#FF9800']


   return (
      <View style={styles.main}>
         <View style={styles.setdisplayofpage}>
            <View style={styles.headingconatiner}>
               <Text style={styles.heading}>Stats</Text>
            </View>

            <View style={styles.bodyconatiner}>
               <ScrollView style={{ flex: 1 }}>
                  <View style={styles.container}>
                     <Text style={styles.headingcam}>Camera / User</Text>
                     <PieChart
                        widthAndHeight={widthAndHeight}
                        series={series}
                        sliceColor={sliceColor}
                     />
                     <Text style={styles.title}>Active <Text>No Active</Text></Text>
                     <PieChart
                        widthAndHeight={widthAndHeight}
                        series={series}
                        sliceColor={sliceColor}
                     />
                  </View>
               </ScrollView>
            </View>



         </View>
         <Footer />
      </View>
   )
}

const styles = StyleSheet.create({

   main: {
      // paddingTop: 40,
      display: "flex",
      flexDirection: "column",
      flex: 1,
      // height:"100%",
      // backgroundColor: "yellow",
   },
   setdisplayofpage: {
      display: "flex",
      // marginBottom:"0%",
      flexDirection: "column",
      flex: 15,
      // padding: 25,
   },
   headingconatiner: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      flex: 1,
      borderBottomWidth: 1,
      borderBottomColor: "gray",
      marginLeft: 25,
      marginRight: 25,
   },
   bodyconatiner: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-evenly",
      flex: 8,
   },
   heading: {
      fontSize: 30,
      fontWeight: "700",
      color: "#1877F2",
   },
   headingcam: {
      fontSize: 20,
      fontWeight: "700",
   },
   headingtwo: {
      fontSize: 20,
      fontWeight: "700",
      color: "#1877F2",
   },
   paragray: {
      color: "gray"
   },
   card: {
      display: "flex",
      flexDirection: "row",
      height: "15%",
      width: "90%",
      borderRadius: 10,
      borderWidth: 1,
      bordercolor: "gray",

   },
   cardimg: {
      height: "100%",
      width: "35%",
      borderBottomLeftRadius: 10,
      borderTopLeftRadius: 10,

   },
   cardbody: {
      height: "100%",
      width: "65%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
   },
   spotto: {
      height: 10,
      width: 10,
      backgroundColor: "green",
      borderRadius: 50,
   },

   container: {
      flex: 1,
      alignItems: 'center'
   },
   title: {
      fontSize: 24,
      margin: 10
   }
})