import { StyleSheet, Text, View, Image, TextInput, Button, ImageBackground, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import logo from '../assets/JetsonLiving.png';
import siginBack from '../assets/siginBack.png'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function Signup() {

  const navigation = useNavigation();
  const [number, onChangeNumber] = React.useState('');
  // const [text, onChangeText] = React.useState('Useless Text');

  function handler() {
    axios({
      method: "post",
      url: "https://licensing.sighthound.com/auth",
      data: {
        email: "Burickg@gmail.com",
        password: "1seeyou2020"
      }
    }).then((res) => {
      console.log(res, "response===========>")
      // navigation.navigate('Footer')
    }).catch((err) => {
      console.log(err, "error===========>")
    })
  }

  console.log(number, "number");
  return (

    <ImageBackground source={siginBack} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <ScrollView>

          <View style={styles.main}>
            <View style={styles.logincontainer}>

   
              <View>
                <View style={styles.tinyLogo}>
                  <Image
                    style={styles.logo}
                    source={logo}
                  />
                </View>

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
                
                />

                <Text style={styles.forget}>Forget Password?</Text>
                <View style={styles.signbtn}>
                  <Button title="Sign in"
                    color="#1877F2"
                    style={styles.btn}
                    onPress={handler}
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

    // height:"400%"

    // alignItems:"center"
  },
  image: {
    flex: 1,
    display: "flex",
    justifyContent: 'center',
    // paddingTop: "10%"
  },
  main: {
    // display: "flex",
    // flexDirection: "column",
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",

  },
  logincontainer: {
    // width: "100%",
    // height: "160%"
    backgroundColor: "white",
    padding: 20,
    elevation: 10,
    shadowColor: 'skyblue',
    borderRadius: 15,
    width: windowWidth / 1.1,
    height: windowHeight / 1.4
  },
  tinyLogo: {
    // width: "100%",
    // height: 190,

    justifyContent: 'center',
    alignItems: 'center',
    // width: 500,
    // height: 200,
    // padding: 80,
    // margin:80,
    // marginLeft:10

  },
  logo: {
    // width: 400,
    // minWidth: windowWidth /2,
    // height: 200,
    width: windowWidth / 1.1,
    height: windowHeight / 4
  },
  loginform: {
    width: "100%",
    height: "100%",
    // marginTop: 30,

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
    // height: windowHeight - 2,
    marginTop: "10%",
    alignSelf: "center",
    // alignItems: "center"
    // borderRadius: 150,

  },
  btn: {
    borderRadius: 14,
    backgroundColor: '#F2F2F2',
    minWidth: '25%',
    textAlign: 'center',
    color: 'skyBlue',
    shadowColor: 'gray',
    // height: windowHeight / 2
  },
})