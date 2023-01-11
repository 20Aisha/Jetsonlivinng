import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';


export default function Footer() {
  return (
    <>
    <View style={styles.containerfooter}>
        <FontAwesome icon={SolidIcons.smile} />
        <FontAwesome icon={RegularIcons.smileWink} />
        <FontAwesome icon={BrandIcons.github} />
        <FontAwesome icon={BrandIcons.github} />
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
