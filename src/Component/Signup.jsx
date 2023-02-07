import { StyleSheet, Text, View, Image, TextInput, Button, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import logo from '../assets/logo2.png';
import siginBack from '../assets/siginBack.png'
import { useNavigation } from '@react-navigation/native';


export default function Signup() {

  const navigation = useNavigation();
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');
  // const image = { uri: 'https://i.pinimg.com/originals/d0/2b/5b/d02b5b51fadb746eb1b2e3017ae1a716.jpg' };
  // const logo = { require(url'https://i.pinimg.com/originals/b1/9e/56/b19e56e0b9e23b771eb2dd1183bfe378.png') };

  console.log(number, "number");
  return (

    <ImageBackground source={siginBack} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <ScrollView>

          <View style={styles.main}>
            <View style={styles.logincontainer}>

              {/* <View style={styles.loginform}> */}
              <View>
                <Image
                  style={styles.tinyLogo}
                  source={logo}
                />

                <TextInput
                  style={styles.input}
                  onChangeText={onChangeNumber}
                  value={number}
                  placeholder="I.P xxx"

                />
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeNumber}
                  value={number}
                  placeholder="Username"

                />
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeNumber}
                  value={number}
                  placeholder="Password"
                // keyboardType="visible-password"
                />

                <Text style={styles.forget}>Forget Password?</Text>
                <View style={styles.signbtn}>
                  <Button title="Sign in"
                    color="#1877F2"
                    style={styles.btn}
                    onPress={() => navigation.navigate('Footer')}
                  />
                </View>

              </View>
            </View>
          </View>

        </ScrollView>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({



  container: {
    flex: 1,
    marginTop: "15%",
    // height:"400%"

    // alignItems:"center"
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  main: {
    padding: 40,
    display: "flex",
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logincontainer: {
    // width: "100%",
    // height: "160%",
    backgroundColor: "white",
    padding: 20,
    elevation: 10,
    shadowColor: 'skyblue',
    borderRadius: 15,

  },
  tinyLogo: {
    width: "100%",
    // height: 100,
    // padding: 80,
    // margin:80,
    // marginLeft:10

  },
  loginform: {
    width: "100%",
    height: "100%",
    marginTop: 30,

  },

  input: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    height: 70,
  },
  forget: {
    color: "gray",
    marginLeft: "55%",
    marginTop: 2,
  },

  signbtn: {
    width: "60%",
    height: 40,
    marginTop: 15,
    alignSelf: "center",
    // borderRadius: 150,

  },
  btn: {
    borderRadius: 14,
    backgroundColor: '#F2F2F2',
    minWidth: '25%',
    textAlign: 'center',
    color: 'skyBlue',
    shadowColor: 'gray',
  },
})