import { ImageBackground, StyleSheet, Text, View, Image, Switch, Button } from 'react-native';
import laungimage from '../assets/lounge.jpg';
import React, { useState } from 'react'
// import { useNavigation } from '@react-navigation/native';
import { Menu, Divider, Provider } from 'react-native-paper';

import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

export default function Setting({ navigation }) {

  const [RoutaA, setRoutaA] = useState('condition');


  const [isEnabled, setIsEnabled] = useState(false);
  const [visible, setVisible] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  // const navigation = useNavigation();

  console.log();

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (


    <View style={styles.main}>


      <Provider>
        <View
          style={{
            paddingTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            color: "#1877F2",
            marginLeft: "5%",
            marginRight: "5%"
          }}>
          <Feather name="arrow-left" size={24} color="#1877F2" onPress={() => navigation.navigate('Home')} />
          <Text style={styles.heading}>Settings</Text>
          <Menu
            visible={visible}
            style={{ color: "blue" }}
            onDismiss={closeMenu}
            anchor={<Fontisto name="more-v-a" onPress={openMenu} size={34} color="#1877F2" />
            }>
            <Menu.Item onPress={() => { navigation.navigate("Officescreen"), setVisible(false), { language: "Office" } }} title="Office" />
            <Divider />
            <Menu.Item onPress={() => { navigation.navigate("Home"), setVisible(false), { language: "Home" } }} title="Home" />
            <Divider />
            {/* <Menu.Item onPress={() => { setVisible(false) }} title="log Out" /> */}
          </Menu>
        </View>
      </Provider>


      <View style={styles.setdisplayofpage}>

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
                <Feather name="bell" size={24} color="black" />
                <Text style={styles.setingoption} onPress={() => navigation.navigate('Notification')}>Notifications</Text>
              </View>

              <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={isEnabled ? 'color:"#1877F2",' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
            <View style={styles.optioncontainer}>
              <View style={styles.align}>
                <AntDesign name="user" size={24} color="black" />
                <Text style={styles.setingoption}>Account</Text>
              </View>

              <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
            </View>
            <View style={styles.optioncontainer}>
              <View style={styles.align}>
                <FontAwesome5 name="share-alt" size={24} color="black" />
                <Text style={styles.setingoption}>Share With Friends</Text>
              </View>

              <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
            </View>

            <View style={styles.optioncontainer}>
              <View style={styles.align}>
                <MaterialIcons name="pages" size={24} color="black" />
                <Text style={styles.setingoption}>Terms and conditions</Text>
              </View>

              <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
            </View>
            <View style={styles.optioncontainer}>
              <View style={styles.align}>
                <AntDesign name="questioncircleo" size={24} color="black" />
                <Text style={styles.setingoption}>About US</Text>
              </View>

              <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
            </View>
            <View style={styles.optioncontainer}>
              <View style={styles.align}>
                <Ionicons name="help-buoy-outline" size={24} color="black" />
                <Text style={styles.setingoption}>Help & Support</Text>
              </View>
              <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />

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
    </View>
  )
}

const styles = StyleSheet.create({

  main: {
    paddingTop: 20,
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  setdisplayofpage: {
    display: "flex",
    flexDirection: "column",
    flex: 9,
    // padding: 25,
  },

  bodyconatiner: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    // flex: 8,
  },
  settingcontainer: {
    height: "70%",
    width: "90%",
    borderRadius: 10,
    shadowOpacity: 0.25,
    shadowRadius: 80,
    elevation: 7,
    shadowColor: 'gray',
    padding: 20,
    margin: 20
  },
  align: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heading: {
    fontSize: 30,
    fontWeight: "700",
    color: "#1877F2",
    // marginLeft: 50
  },
  usernamebox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  userimg: {
    height: 120,
    width: 120,
    borderRadius: 100,
    marginTop: 10,
    marginRight: 20,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  setingoption: {
    fontSize: 20,
    fontWeight: '300',
    marginLeft: 20,
  },
  optioncontainer: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: "14%",
  },
  btncontainer: {
    width: "40%",
    height: "13%",
    display: "flex",
    alignSelf: "center",
    marginTop: "4%",
  },



})