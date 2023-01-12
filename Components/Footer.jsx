import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


export default function Footer() {
  return (
    <>
    <View style={styles.containerfooter}>
    <AntDesign name="home" size={24} color="black" />
     <AntDesign name="videocamera" size={24} color="black" />
     <Feather name="bell" size={24} color="black" />
     <AntDesign name="user" size={24} color="black" />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
    containerfooter: {
    // backgroundColor: 'green',
    display:"flex",
    justifyContent:'space-evenly',
    alignItems:"center",
    height: 80,
    flexDirection:'row',
    borderTopColor:'black',
    elevation: 3,
    shadowColor: 'gray',
  },
  footerchild: {
   color:'black'
  },
});
