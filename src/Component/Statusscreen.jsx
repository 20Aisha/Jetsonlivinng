
import React from 'react'
import Footer from './Footer';
import { StyleSheet, ScrollView, Text, View, Image } from 'react-native';
import PieChart from 'react-native-pie-chart';


export default function Statusscreen() {

   const widthAndHeight = 250
   const series = [223, 721]
   const sliceColor = ['#97C549', '#285E3A', '#FFEB3B', '#4CAF50', '#FF9800']


   return (
      <View style={styles.main}>

         <ScrollView>
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
         </ScrollView>

      </View>
   )
}

const styles = StyleSheet.create({

   main: {
      flexDirection: "column",
      display: "flex",
      flex: 1,
      // paddingTop: 40,
      // height:"100%",
      // backgroundColor: "yellow",
   },
   setdisplayofpage: {
      flexDirection: "column",
      display: "flex",
      // marginBottom:"0%",
      // padding: 25,
      flex: 15,
   },
   headingconatiner: {
      justifyContent: "space-between",
      borderBottomColor: "gray",
      alignItems: "center",
      flexDirection: "row",
      borderBottomWidth: 1,
      display: "flex",
      marginRight: 25,
      marginLeft: 25,
      flex: 1,
   },
   bodyconatiner: {
      justifyContent: "space-evenly",
      flexDirection: "column",
      alignItems: "center",
      display: "flex",
      flex: 8,
   },
   heading: {
      fontSize: 30,
      fontWeight: "700",
      color: "#1877F2",
   },
   headingcam: {
      fontWeight: "700",
      fontSize: 20,
      margin: 20
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
      flexDirection: "row",
      bordercolor: "gray",
      display: "flex",
      height: "15%",
      width: "90%",
      borderRadius: 10,
      borderWidth: 1,
   },
   cardimg: {
      height: "100%",
      width: "35%",
      borderBottomLeftRadius: 10,
      borderTopLeftRadius: 10,

   },
   cardbody: {
      width: "65%",
      height: "100%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-evenly",
   },
   spotto: {
      width: 10,
      height: 10,
      borderRadius: 50,
      backgroundColor: "green",
   },

   container: {
      flex: 1,
      alignItems: 'center'
   },
   title: {
      margin: 20,
      fontSize: 24,
   }
})